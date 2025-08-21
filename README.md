# EVADIA — Plantilla de boletín mensual (HTML + GitHub Pages)

Este repositorio es un **starter kit** para crear y publicar tus boletines mensuales de EVADIA
usando solo archivos estáticos (HTML/CSS/JS) y **GitHub Pages**.

## ¿Qué incluye?

- `/html/index.html`: plantilla imprimible en A4 lista para PDF.
- `/html/styles.css`: estilos de marca y estilos de impresión.
- `/html/app.js`: script que carga `/html/content.json` y llena la plantilla.
- `/html/content.json`: **archivo de datos** que editas cada mes (título, sector, resumen, checklist, enlaces).
- `/assets/logo.(png|jpg)`: tu logo.
- `/template.md`: esqueleto en Markdown del boletín para redactar primero, si lo prefieres.

> Sugerencia de flujo: redacta en `template.md` → pasa el contenido a `content.json` → revisa en GitHub Pages → imprime a PDF.

---

## Paso a paso para tu **primer uso de GitHub**

1. **Crea tu cuenta** en https://github.com si aún no la tienes e inicia sesión.
2. En la esquina superior derecha, haz clic en **+ → New repository**.
3. Nombra tu repo (ej. `evadia-boletin`), elige **Public** (recomendado para GitHub Pages) y da **Create repository**.
4. Haz clic en **Add file → Upload files**, arrastra la **carpeta completa** de este starter (`evadia-boletin-template`) y suelta.
   - Opción alternativa: sube el **ZIP** y luego en GitHub descomprímelo localmente y vuelve a subir su contenido.
5. **Confirma** con **Commit changes**.
6. Activa **GitHub Pages**:
   - Ve a **Settings → Pages**.
   - En **Build and deployment / Source**, elige **Deploy from a branch**.
   - En **Branch**, selecciona `main` (o `master`) y la **carpeta raíz (`/`)**. Guarda.
   - GitHub tardará ~1 minuto en publicar. Aparecerá una URL como `https://tu-usuario.github.io/evadia-boletin/`.
7. Abre la URL y añade `/html/` al final para ver tu boletín: `.../html/`.

> Si navegas el repo localmente **sin servidor** (doble clic a `index.html`), algunos navegadores bloquean `fetch` de `content.json` por seguridad. En GitHub Pages funcionará sin problema.

---

## Cómo **editar tu boletín mensual**

1. Abre `/html/content.json` en GitHub (botón **✏️ Edit**).
2. Cambia los campos: título, mes/año, sector, **resumen (qué cambió / impacto / acciones)**, **checklist**, y **enlaces a fuentes oficiales** (DOF, CNARTyS, CIS, etc.).
3. Al terminar, presiona **Commit changes**.
4. Actualiza la página de GitHub Pages (`/html/`) y revisa el resultado.
5. Para **PDF**: en Chrome/Edge, **Imprimir → Guardar como PDF**, tamaño **A4**, márgenes **Default**, encabezado/pie **desactivados**. Las reglas `@media print` ya optimizan saltos de página.

---

## Estructura del `content.json`

Consulta el archivo para ver un ejemplo. Campos principales:
- `meta`: mes, año, número de edición, sector, tipo de instrumento, etapa.
- `resumen`: `que_cambio`, `impacto`, `acciones` (300–500 palabras en total).
- `checklist`: lista de tareas con área, responsable y fecha objetivo.
- `enlaces`: lista de fuentes oficiales (DOF, CNARTyS, CIS, reguladores, etc.).
- `editorial`: texto del **flujo editorial integrado** (CNARTyS → DOF/autoridades → Alerta → Checklist).

---

## Marca

- Cambia colores en `:root` dentro de `styles.css` si lo necesitas.
- Puedes sustituir `/assets/logo.png` por otra imagen manteniendo el mismo nombre.

¡Listo! Con esto podrás repetir tu edición **cada mes** en solo minutos.
