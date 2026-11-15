# Video de repostería publicado

Publicación Horizons finalizada: 2026-11-15T10:21:11Z (05:21:11 Cancún). Se comprobó la sección en el sitio público.

- Ruta: https://hago.click/#del-talento-al-negocio
- MP4 actualmente utilizado: https://ocre.mx/assets/hago-click/click.mp4 ; archivo original subido por el usuario, 3.768.079 bytes, 5,041667 s, 1280×720, sin audio. HTTPS 200 video/mp4; Range 0-1023 devuelve 206 con Content-Range correcto.
- La versión ligera de 2.010.709 bytes está preparada, pero su carga automática en cPanel devolvió un error genérico; no se usa en producción y no se afirma que la cuota sea la causa.
- Sección implementada en home.tsx. Conserva diez FAQ y metadatos; controles nativos, playsInline, muted, sin autoplay, preload=metadata. Esta configuración permite solicitudes de video antes del clic: NO es la propuesta inicial de descarga exclusivamente bajo demanda.
- Reproducción en vista previa llegó al final (currentTime=duration=5,041667; ended=true), sin error del elemento.
- Vista previa móvil: ancho efectivo 375 px, scrollWidth=375; composición de una columna, texto antes del video. Captura conservada. Escritorio y sección publicada también capturados.
- Aviso de escena ficticia generada con IA; enlace real a /piloto.
- Respaldo fuente: horizons-changes/video/home-antes-de-integrar.tsx. Fuente implementada: horizons-changes/video/home-integrado.tsx. No hay sincronización automática GitHub→Horizons.

## PageSpeed móvil después de publicar

Informe 15-11-2026 05:21:38 Cancún: https://pagespeed.web.dev/analysis/https-hago-click/g6h1js63lt?form_factor=mobile

Rendimiento 92; accesibilidad 100; buenas prácticas 100; SEO 100. FCP 1,540 s; LCP 2,996 s; TBT 0 ms; CLS 0; Speed Index 4,042 s. Navegación con agentes 3/3. Sin datos de campo CrUX.

LCP aún supera el objetivo 2,5 s. El informe detecta carga útil total de 4.049 KiB y oportunidad de caché para 3.725 KiB. Siguiente mejora: alojar poster comprimido y versión ligera, y activar fuente de video solo bajo interacción; revisar también imagen hero y fuentes. Los puntajes de Lighthouse no sustituyen la rúbrica del jurado.
