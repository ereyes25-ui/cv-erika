# CV — Erika Adai Reyes Herrera

## Cómo abrirlo

1. Abre la carpeta en **VS Code**
2. Instala la extensión **Live Server** (si no la tienes)
3. Clic derecho sobre `index.html` → **Open with Live Server**
4. Se abrirá en `http://127.0.0.1:5500`

## Agregar tu foto

Reemplaza el archivo `img/profile.jpg` con tu foto real.  
La imagen debe ser cuadrada (ej. 300×300 px) para que se vea perfecta en el círculo.

## Personalizar contenido

Todo el contenido del CV está en **`cv-data.json`**.  
Abre ese archivo y edita el texto — la página se actualiza sola.

## Imprimir como PDF

1. Abre el CV en el navegador con Live Server
2. `Ctrl + P` (o `Cmd + P` en Mac)
3. Destino: **Guardar como PDF**
4. Tamaño: **A4**, Márgenes: **Ninguno**
5. Activa: **Gráficos de fondo** (para que aparezca el color oscuro)

## Archivos del proyecto

```
cv-erika/
├── index.html       → Estructura HTML base
├── cv-data.json     → Todo el contenido del CV (edita aquí)
├── css/
│   └── style.css    → Diseño completo
├── js/
│   └── app.js       → Lógica que carga el JSON y construye el CV
└── img/
    └── profile.jpg  → Tu foto (reemplázala)
```
