# Metro Pizzería — Landing

Landing one-page para **Metro Pizzería** (Paysandú). HTML + CSS + JS puro, sin build
ni dependencias. Vidriera digital + canal de pedido por WhatsApp.

Sitio web por [Nikato Estudio](https://nikatoestudio.uy).

---

## Cómo verla localmente

Abrí `index.html` con doble click en el navegador. Para que el fade-in al scroll y el
mapa se vean bien, mejor servirlo:

```bash
# con Python (ya viene en Mac/Linux)
python -m http.server 5500
# luego abrí http://localhost:5500
```

O usá la extensión **Live Server** de VS Code (click derecho → "Open with Live Server").

---

## ✅ Antes de mostrársela al dueño — reemplazar los placeholders

Toda la info real está marcada en el código con `<!-- TODO ... -->`. Buscá `TODO` en
los archivos y reemplazá. Lo mínimo para que quede impecable:

### 1. WhatsApp (lo más importante)
Buscá `598XXXXXXXX` en `index.html` y reemplazá por el número real **sin espacios ni +**
(ej: `598991234567`). Aparece en: nav, hero, menú, footer, botón flotante y ubicación.

> Sacalo del Instagram **@metropizzeria.2024**, no de directorios viejos.

### 2. Fotos
Descargá del Instagram y poné en `public/img/` con los nombres exactos
(ver `public/img/LEEME.txt`): `hero.jpg`, `pizza-1.jpg` … `pizza-4.jpg`, `faina.jpg`,
`logo.png`. Mientras falten, se muestra un placeholder dorado (no se rompe nada).

### 3. Menú y precios
En la sección `id="menu"` de `index.html`: reemplazá los `$ ___` y los nombres de
platos por la carta real. Moneda: pesos uruguayos.

### 4. Reseñas
En la sección `id="resenas"`: pegá 5–6 reseñas reales del Google Maps de Metro
(texto, nombre y estrellas). Ya hay 6 tarjetas listas para completar.

### 5. Ubicación, horarios y mapa
En la sección `id="ubicacion"`:
- Dirección y teléfono reales.
- Horarios reales.
- **Mapa**: en Google Maps buscá el local → *Compartir* → *Insertar un mapa* →
  copiá el `src` del iframe y pegalo reemplazando el `src` del `<iframe>`. (Sin API key.)
- Botón "Cómo llegar": reemplazá el link por el de Google Maps del local.

### 6. SEO / dominio (opcional pero recomendado)
En el `<head>`: reemplazá `https://metropizzeria.uy/` por el dominio final en las
etiquetas `canonical`, Open Graph y el JSON-LD. Completá el JSON-LD `Restaurant`
(dirección, teléfono, geo, horarios) — ayuda a aparecer mejor en Google.

> Tip: pegá el bloque JSON-LD en el **Rich Results Test** de Google para validarlo.

---

## Desplegar en GitHub Pages

Igual que `web-express.nikatoestudio.uy`:

1. Crear un repo nuevo y subir estos archivos (`index.html` en la raíz).
2. En el repo → **Settings → Pages** → *Source*: `Deploy from a branch` → branch
   `main` / carpeta `/ (root)` → **Save**.
3. A los minutos queda en `https://<usuario>.github.io/<repo>/`.
4. (Opcional) Dominio propio en **Settings → Pages → Custom domain**.

---

## Estructura

```
index.html      Markup, SEO/Open Graph y JSON-LD
styles.css      Sistema de diseño (negro + dorado) y todas las secciones
script.js       Año del footer, nav al scroll, fade-in (IntersectionObserver)
public/img/     Fotos (ver LEEME.txt)
```

---

## Fuera de esta versión (posibles upsells)

Pedidos online con carrito y checkout · menú editable por el dueño (panel admin) ·
WhatsApp Business API · galería ampliada / sección de eventos · fidelidad / cupones.
