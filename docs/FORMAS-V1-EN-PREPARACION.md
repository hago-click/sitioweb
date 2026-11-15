# Formas de hacer click — corte de preparación

Estado: implementado en la vista previa de Horizons, NO publicado. El paquete de imágenes aún debe extraerse en el alojamiento existente; la comprobación HTTP de conocimientos-480.webp devuelve 404. No se debe publicar con estas imágenes ausentes.

## Cambio visual (cinco archivos)
- gallery.tsx: seis escenas editoriales originales creadas con IA; títulos HTML, ejemplos desplegables y enlaces de participación reales.
- community.ts: imágenes WebP responsivas y cinco preguntas agrupadas; mantiene datos de otros componentes. Las escenas no representan casos reales.
- faq.tsx: cinco acordeones inicialmente cerrados, contacto compacto, accesos de escritorio corregidos.
- root.tsx: fondo ambiental en todas las rutas con control de pausa.
- index.css: estilo editorial y animaciones de transformación, compatibilidad con prefers-reduced-motion.

Recursos: HagoClick-formas-v1.zip, 610443 bytes; 12 WebP (480 y 960 px), seis escenas. URL base prevista: https://ocre.mx/assets/hago-click/. Generados en relación 4:3; atributos 960×720 reservan espacio.

## Pruebas realizadas en vista previa
- 10 rutas del sitemap: HTTP 200 y un H1 por ruta.
- Canonical, idioma es, viewport, metadatos y Open Graph presentes.
- 5 FAQ en JSON-LD y texto coincidente en el HTML inicial.
- /sitemap.xml, /robots.txt y /llms.txt: 200; ruta inexistente: 404. El robots de vista previa bloquea rastreo de forma esperada; falta verificar producción tras publicar.
- Escritorio: seis tarjetas y sin desbordamiento horizontal.
- Móvil: viewport solicitado 390; ancho efectivo de contenido 375, una columna, scrollWidth=375; sin desbordamiento.
- Tableta: viewport solicitado 768, contenido 753; dos columnas, scrollWidth=753.
- Pausa global: animationPlayState=paused tanto en fondo global como red de portada. Reanudación funcional.
- Primer ejemplo de colaboración: abre con summary nativo.
- Acceso Costos: abre FAQ 3 y muestra el costo inicial gratuito y los servicios eventualmente de pago.
- Consola de primera carga limpia: sin errores ni advertencias. Tras editar/recompilar se observaron avisos de manifest de preview; falta una carga fresca final estable antes de publicación.

## Diez preguntas originales conservadas en cinco grupos
1 Qué es y para quién / 2 Idea indefinida / 10 Solicitar piloto → FAQ 1.
3 Qué aportar sin dinero / 4 Negocios → FAQ 2.
5 Colaboración gratuita / 6 Costo plataforma → FAQ 3.
7 Países / 8 Funciones y fechas → FAQ 4. Países habilitados y fechas no anunciados; no inventados.
9 Autoría y confidencialidad → FAQ 5; añade intermediar inconformidades por contacto@hago.click.

## Pendiente para cierre
1 Extraer imágenes y verificar 12 respuestas HTTP 200 image/webp.
2 Inspeccionar galería real y capturar antes/después en móvil y escritorio.
3 Verificar carga fresca sin errores; publicar; confirmar estado Hostinger y HTML público.
4 Repetir auditoría, Lighthouse/PageSpeed móvil y escritorio, Checker y enlaces.
5 Atender resultados. LCP anterior 3.078 s sigue por encima de 2.5 s; no se declara corregido.

Hallazgos para siguiente lote SEO: títulos temáticos de 63–70 caracteres y descripciones de 161/163 caracteres. No se han modificado aún.

Recuperación: before.json y cinco snapshots nuevos en horizons-changes/formas-v1. No equivalen a exportación completa de la aplicación ni a restauración ensayada.
