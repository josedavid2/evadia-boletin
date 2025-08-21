async function main(){
  try{
    const res = await fetch('./content.json', {cache:'no-store'});
    const data = await res.json();

    // Header
    document.getElementById('titulo').textContent = data.meta.titulo || 'EVADIA — Boletín mensual';
    const meta = `${data.meta.mes} ${data.meta.anio} · Sector: ${data.meta.sector} · Instrumento: ${data.meta.tipo_instrumento} · Etapa: ${data.meta.etapa}`;
    document.getElementById('meta').textContent = meta;
    document.getElementById('anio').textContent = data.meta.anio;

    // Clasificación badges
    ['sector','instrumento','etapa'].forEach(k => {
      document.getElementById(k).textContent = data.meta[k==='instrumento'?'tipo_instrumento':k];
      document.getElementById(k+'2').textContent = data.meta[k==='instrumento'?'tipo_instrumento':k];
    });

    // Resumen
    document.getElementById('que_cambio').innerHTML = `<strong>Qué cambió.</strong> ${data.resumen.que_cambio}`;
    document.getElementById('impacto').innerHTML   = `<strong>Impacto.</strong> ${data.resumen.impacto}`;
    document.getElementById('acciones').innerHTML  = `<strong>Acciones recomendadas.</strong> ${data.resumen.acciones}`;

    // Checklist
    const tb = document.querySelector('#tabla-check tbody');
    tb.innerHTML = '';
    (data.checklist || []).forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${item.tarea}</td><td>${item.area}</td><td>${item.responsable}</td><td>${item.fecha}</td>`;
      tb.appendChild(tr);
    });

    // Enlaces
    const ul = document.getElementById('enlaces');
    ul.innerHTML = '';
    (data.enlaces || []).forEach(l => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = l.url;
      a.textContent = l.label || l.url;
      a.target = '_blank';
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Editorial
    document.getElementById('editorial').textContent = data.editorial;
  }catch(e){
    console.error('Error cargando content.json', e);
  }
}
main();
