# Rendimiento verificado — 15 noviembre 2026, 05:52 Cancún

Publicación finalizada a 2026-11-15T10:52:14Z. Se mantienen el diseño y las interacciones.

1. Hero servido como WebP nativo del CDN Hostinger. Verificados estado 200, MIME image/webp y dimensiones de las variantes: 375→13.916 bytes; 768→33.220; 1024→46.976; 1280→62.488. Se corrigió altura intrínseca a 832 para el original de 1280 px.
2. Fondo conserva movimiento mediante transform del SVG; se retiraron dos animaciones continuas de stroke-dashoffset. Lighthouse pasa de tres animaciones no compuestas a una.
3. Fuentes conservadas: Manrope variable 400–800 e Instrument Serif normal/cursiva. Reglas oficiales @font-face WOFF2 incorporadas al HTML; se eliminó solicitud CSS bloqueante a fonts.googleapis.com. Se conservó preconnect a fonts.gstatic.com y se precargaron dos archivos latinos. Diez recursos de todos los subconjuntos respondieron 200; cada navegador solicita los necesarios. Respaldo root-before-fonts.tsx y fuente root.tsx en horizons-changes/performance/.

## PageSpeed posterior

https://pagespeed.web.dev/analysis/https-hago-click/tt3de49u62?form_factor=mobile

05:52:48: rendimiento 94; accesibilidad 100; buenas prácticas 100; SEO 100; navegación con agentes 3/3. FCP 1,056 s; LCP 3,006 s; TBT 0 ms; CLS 0; Speed Index 2,914 s. Sin CrUX.

Anterior 05:45:48: 89; FCP 1,686 s; LCP 3,303 s; CLS 0. La mejora medida es posterior al ajuste de fuentes; no demuestra por sí sola causalidad aislada. LCP <2,5 s sigue pendiente.

## AI Visibility Checker

Escaneo visible 05:46:10: 76/100, grado B. Rastreo 20/20; descubrimiento 16/16; legibilidad 18/18; semántica 10/14; comercial 4/12; contenido para agentes 8/10; interacción 0/10. Baseline 61. No mide menciones ni ranking.

La política de robots sigue bloqueando GPTBot, ClaudeBot y Google-Extended para entrenamiento; no se modificó. Aunque el checker marca rastreo completo, el criterio literal de la rúbrica sigue parcial. La fuente fuente (robots.txt) prevalece para describir el bloqueo.

Pruebas de vista previa del cambio global: diez rutas 200; diez FAQ coincidentes; un H1; ruta inexistente 404; consola sin errores capturados; tipografías inspeccionadas visualmente. La escritura GitHub está comprobada, pero no existe despliegue automático desde ese repo a Horizons ni backup completo probado.
