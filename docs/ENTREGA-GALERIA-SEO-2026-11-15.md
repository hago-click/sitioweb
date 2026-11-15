# Hago.Click — entrega verificada del hackathon

Corte: publicación del 15 de noviembre de 2026, **16:07:34 UTC / 11:07:34 Cancún**. Sitio: https://hago.click/ · Repositorio: https://github.com/hago-click/sitioweb.

Este informe describe evidencia y límites; no asigna puntuaciones del jurado. Los informes anteriores conservan valor histórico y no representan todos los cambios actuales.

## Estado de la versión publicada

- Portada editorial con fondo SVG animado, pausa y movimiento reducido; fotografía WebP y fuentes optimizadas.
- Tres ejemplos hipotéticos con iluminación al cursor y desplegables de primer paso.
- Video ilustrativo de repostería de 5,04 s, con controles y poster WebP de 26.614 bytes. MP4 original en https://ocre.mx/assets/hago-click/click.mp4 ; preload=none es una indicación al navegador, no garantía universal de cero solicitudes.
- Explicador interactivo con tres puntos de partida: idea, habilidad y herramientas. No simula miembros ni ofertas reales.
- Galería con seis escenas editoriales originales creadas con IA, doce WebP responsivos (480/960 px), ejemplos desplegables y enlaces de participación. Fondo ambiental global con pausa y preferencia de movimiento reducido.
- FAQ editorial cálida condensada en cinco grupos, todos inicialmente cerrados; conservan las diez consultas prioritarias y coinciden con el HTML inicial y FAQPage.
- Diez rutas públicas; sitemap, robots y llms accesibles; 404 real. No hubo cambios DNS, migraciones ni modificaciones de base de datos.

## Los seis entregables del Prompt Pack

|Entregable|Estado verificable|Límite|
|---|---|---|
|1. Mapa de preguntas|Diez preguntas y respuestas publicadas, reproducidas abajo|Mapa editorial; no se presenta como diez entrevistas reales a clientes|
|2. Construir página|Landing y nueve rutas adicionales publicadas|Perfiles, directorio y mensajería no están implementados|
|3. SEO, AEO y datos estructurados|Matriz de veinte criterios, metadatos y JSON-LD comprobados|Portada validada en Schema.org: 0 errores y 0 advertencias; las demás rutas tienen comprobación local|
|4. Prueba de respuestas|Prueba editorial usando solo HTML público: ocho completas y dos parciales|No equivale a ejecución independiente de Hostinger Agent; formulario no probado de extremo a extremo|
|5. Auditoría y corrección|Checker inicial 61; último observado 76. Correcciones y pruebas registradas|76 corresponde al escaneo 11:00:36 Cancún, posterior a la galería y anterior al ajuste de metadatos secundarios; no mide menciones ni ranking|
|6. Roadmap de 90 días|Plan con responsables, esfuerzo y KPI al final|Son tareas futuras, no implementaciones|

## Matriz de veinte criterios

|ID|Criterio|Estado|Evidencia y límite|
|---|---|---|---|
|SEO1|Título|Verificado|Diez títulos únicos de 50–60 caracteres. Se acortaron cuatro títulos temáticos y se ampliaron dos títulos de participación.|
|SEO2|Descripción y vista al compartir|Verificado técnicamente|Diez descripciones de 140–160 caracteres; OG title/description/image presentes. Falta prueba en aplicaciones de compartido.|
|SEO3|Encabezados|Verificado|Un H1 por cada una de las diez rutas; H2 de secciones y H3 de preguntas y ejemplos. Cuatro H2 interrogativos observados.|
|SEO4|Tema y contenido|Verificado|Tema de colaboración en título, H1 e introducción; Más de 300 palabras de contenido útil en HTML inicial; se condensaron las FAQ sin retirar los datos esenciales.|
|SEO5|Indexable|Verificado técnicamente|HTTPS, lang es, viewport y canonical del dominio presentes; no meta noindex observado. Indexación efectiva en Google no comprobada.|
|SEO6|robots.txt y sitemap.xml|Verificado|Ambos 200; sitemap con diez rutas públicas que responden 200; fecha de modificación de portada coherente con cambios del 15 de noviembre.|
|SEO7|Imágenes|Verificado con mejora pendiente|Once imágenes con alt en inicio; srcset y lazy loading inferiores. Hero WebP: variantes verificadas entre 13.916 y 62.488 bytes. Nuevas escenas: doce WebP, entre 20.276 y 85.240 bytes cada uno; todas responden 200 y las seis cargan en navegador. Se pueden optimizar otras fotografías.|
|SEO8|Velocidad|Parcial|Lighthouse móvil más reciente: rendimiento 93, LCP 2,928 s, CLS 0, TBT 0. Cumple rendimiento ≥80 y CLS <0,1; falta LCP <2,5 s.|
|SEO9|Móvil|Verificado en producción en el alcance probado|Viewport solicitado de 390 px; contenido efectivo de 375 px y scrollWidth 375, sin overflow. Galería en una columna y seis imágenes cargadas. Captura pública y Lighthouse móvil conservados.|
|SEO10|Enlaces y URLs|Verificado en el alcance probado|Diez rutas 200, 404 real y URLs legibles. Probados destinos de tres escenarios, accesos a FAQ y navegación temática; 27 destinos internos comprobados sin enlaces ni anclas rotas.|
|AEO1|Respuesta directa arriba|Verificado|Primer párrafo define comunidad, destinatarios, aportaciones y acceso inicial sin costo. Texto en HTML inicial, antes de la foto en móvil.|
|AEO2|Encabezados como preguntas|Verificado|H2 interrogativos con respuestas introductorias; se reforzaron Cómo funciona y FAQ. Cinco preguntas H3 agrupadas en FAQ.|
|AEO3|Preguntas frecuentes|Verificado|Cinco acordeones nativos, inicialmente cerrados, todos abren y cierran con Enter. Todo el texto sigue en HTML inicial, sincronizado con FAQPage.|
|AEO4|Datos estructurados|Portada validada externamente; otras rutas comprobadas localmente|Schema.org detectó WebSite, Organization y FAQPage: 0 errores y 0 advertencias en los tres. Cinco respuestas coinciden con HTML. URL, nombre y email coherentes. No se declara elegibilidad para resultados enriquecidos.|
|AEO5|Contenido sin JavaScript|Verificado|GET contiene definición, ejemplos, pasos, cinco respuestas agrupadas y avisos de etapa inicial. El contenido principal no depende de ejecutar JS.|
|AEO6|Acceso de bots IA|Parcial según rúbrica literal|GPTBot, ClaudeBot y Google-Extended siguen bloqueados para entrenamiento; búsqueda y Perplexity permitidos. llms.txt 200 text/plain. No se alteró la política para perseguir puntos.|
|AEO7|Formato extraíble|Verificado|Párrafos cortos, listas, pasos y preguntas/respuestas semánticas; la ilustración interactiva también ofrece texto.|
|AEO8|Identidad consistente|Parcial|hago.click, responsable Luis Carlos Olivares Trinidad, contacto@hago.click y alcance latinoamericano publicados. Faltan perfiles externos y detalles operativos confirmados.|
|AEO9|Datos concretos|Verificado en el alcance publicado|Acceso inicial y piloto sin costo; asesorías pueden cobrarse; seis ámbitos y tres ejemplos hipotéticos. No hay ingresos, clientes o testimonios inventados.|
|AEO10|Confianza|Parcial|Responsable y contacto visibles; ejemplos ficticios y funciones actuales aclarados. Responsable y fecha de actualización del 15 de noviembre visibles. Falta completar una sección institucional y documentación de privacidad con prácticas verificadas.|

## Prueba de diez preguntas con el contenido público

Fuente única: HTML público, con cinco grupos FAQ que conservan diez consultas prioritarias. Esta es una revisión editorial del contenido, no una prueba independiente de un agente ni de funciones operativas. Ocho consultas están contestadas; dos son parciales porque países habilitados y fechas no se han definido/publicado.

|#|Pregunta|Respuesta sustentada en contenido público|Grupo / resultado|
|---|---|---|---|
|1|¿Qué es hago.click y para quién es?|Comunidad latinoamericana para personas, emprendedores y negocios que convierten ideas en proyectos mediante colaboración y conocimiento.|FAQ 1 · Contestada|
|2|¿Necesito tener una idea completamente definida?|No se necesita una idea terminada; basta explicar qué se quiere lograr y qué ayuda se necesita.|FAQ 1 · Contestada|
|3|¿Qué puedo aportar si no tengo dinero?|Conocimientos, tiempo, habilidades, herramientas, espacios o contactos; aportar dinero no es requisito.|FAQ 2 · Contestada|
|4|¿Cómo participan los negocios?|Pueden ofrecer experiencia, recursos o servicios, procurando condiciones preferenciales. No se garantizan ingresos ni clientes.|FAQ 2 · Contestada|
|5|¿Toda colaboración tiene que ser gratuita?|No. Quien presta una asesoría o servicio puede cobrarlo; los integrantes acuerdan alcance, precio, tiempos y responsabilidades.|FAQ 3 · Contestada|
|6|¿La plataforma tiene algún costo?|El acceso inicial y el piloto son sin costo; eso no implica gratuidad de todas las colaboraciones.|FAQ 3 · Contestada|
|7|¿El alcance es para toda Latinoamérica?|Está orientada a Latinoamérica. Las condiciones de acceso por país todavía no se publican.|FAQ 4 · Parcial|
|8|¿Qué funciones están disponibles hoy y cuándo llegarán perfiles, directorio y mensajería?|Hoy se presenta la propuesta, los temas y las guías. Perfiles, directorio y mensajería no están disponibles ni tienen fecha anunciada.|FAQ 4 · Parcial|
|9|¿Qué pasa con la autoría de las ideas y los datos confidenciales?|Compartir no equivale a ceder autoría. Se recomienda evitar información confidencial y acordar por escrito materiales, derechos y condiciones.|FAQ 5 · Contestada|
|10|¿Cómo solicito acceso al piloto?|En /piloto, con nombre, correo y rol. Solicitar no crea una cuenta ni garantiza admisión o fecha. El formulario no se verificó de extremo a extremo por instrucción del titular.|FAQ 1 · Contestada|

## Mediciones

|Momento, Cancún|Rendimiento móvil|Accesibilidad / buenas prácticas / SEO|LCP|CLS|
|---|---|---|---|---|
|03:34, antes de las últimas ampliaciones|93|100 / 100 / 100|2,817 s|0|
|05:36, primer fondo interactivo|89|100 / 100 / 100|3,303 s|0|
|05:52, después de fuentes y WebP|94|100 / 100 / 100|3,006 s|0|
|06:20, FAQ y demostración publicadas|91|100 / 100 / 100|3,078 s|0|
|11:00, galería, fondo global y FAQ compactas|93|100 / 100 / 100|2,928 s|0|

Último informe: https://pagespeed.web.dev/analysis/https-hago-click/jt30yx25v4?form_factor=mobile . FCP 1,360 s; TBT 0; Speed Index 4,201 s; navegación con agentes 3/3. Son mediciones de laboratorio, sin CrUX. No se atribuye causalidad aislada a la diferencia entre ejecuciones. LCP <2,5 s sigue pendiente.

Escritorio de ese mismo informe: **100 rendimiento, 100 accesibilidad, 100 buenas prácticas y 100 SEO**; FCP 0,301 s, LCP 0,642 s, TBT 0, CLS 0, Speed Index 0,621 s. Estas mediciones anteceden únicamente al ajuste de metadatos secundarios.

AI Visibility Checker, escaneo 11:00:36: **76/100, grado B**, frente a 61 inicial. Desglose: rastreo 20/20, descubrimiento 16/16, legibilidad 18/18, semántica 10/14, comercial 4/12, contenido para agentes 8/10 e interacción 0/10. Fuente: https://www.hostinger.com/ai-visibility-checker?domain=hago.click . Su lectura de rastreo completo no elimina los bloqueos explícitos de entrenamiento observados en robots.txt.

## Cinco correcciones de alto impacto ejecutadas

1. Definición y acceso claros: propuesta, destinatarios, costo inicial y condiciones de colaboración, con responsable y contacto proporcionados por el titular.
2. Diez consultas esenciales cubiertas en cinco FAQ y FAQPage sincronizado: lectura en HTML inicial y presentación compacta accesible.
3. Rastreabilidad: canonical, sitemap, llms y respuesta 404 comprobadas.
4. Explicación visual: proyectos etiquetados, video, fondo animado, demostración interactiva y nueva FAQ.
5. Recursos y metadatos: hero WebP, doce variantes WebP de escenas originales, fuentes WOFF2 optimizadas, animaciones de transformación y diez títulos/descripciones dentro del rango de la rúbrica.

## Pruebas y recuperación

Tres escenarios y destinos comprobados; controles de pausa; cinco acordeones con Enter (abrir/cerrar); accesos Costos y Confianza. Capturas de galería de escritorio y móvil en producción, seis imágenes cargadas y sin desbordamiento. Auditoría de diez rutas, 27 destinos internos y 404 real. El control global detiene el fondo y la red SVG de portada. CSS de movimiento reducido presente; no se simuló esa preferencia en esta ronda.

La primera publicación del nuevo FAQ fue rechazada automáticamente por un aviso de hidratación observado durante edición en caliente. Se movieron los estilos de ambos componentes a index.css; dos cargas limpias, una recarga con interacciones y la versión pública registraron cero errores de consola capturados. No se desactivaron validaciones ni se añadió suppressHydrationWarning para ocultarlo.

GitHub tiene escritura comprobada y fuentes antes/después en horizons-changes/, incluidos formas-v1 y meta-1106. Son respaldos parciales de archivos modificados, no un repositorio completo compilable ni una restauración integral ensayada. La exportación completa de Horizons sigue pendiente. No se asumió importación automática GitHub→Horizons.

## Referencias de diseño

Implementación propia con React, CSS, SVG y lucide-react ya existentes; no se importaron componentes completos ni nuevas dependencias.

- Background Paths: https://21st.dev/@kokonutd/components/background-paths — MIT declarada.
- Spotlight Cards: https://21st.dev/@mohammadshehadeh/components/feature-08 — MIT declarada.
- Two-Column FAQ: https://21st.dev/@ln-dev7/components/faqs-02 — MIT declarada.
- Slit Type FAQ: https://21st.dev/@kedhareswer/components/slit-type-faq — MIT declarada.
- FAQ Accordion Reveal: https://21st.dev/@mohammadshehadeh/components/faq-06 — MIT declarada.

## Roadmap de 90 días

|Plazo|Tarea y propósito|Responsable / herramienta|Esfuerzo estimado / prioridad|KPI o prueba futura|
|---|---|---|---|---|
|0–7 días|Cerrar LCP sin perder identidad visual|Desarrollo / PSI y perfiles de rendimiento|2–4 h / P0|LCP <2,5 s, CLS <0,1 y rendimiento ≥90 en informe guardado|
|0–7 días|Exportar, inspeccionar y versionar el proyecto completo; ensayar recuperación aislada|Titular + desarrollo / Horizons y GitHub|1–2 h / P0|Archivo completo sin secretos, build reproducible y restauración ensayada|
|0–7 días|Confirmar condiciones por país y calendario; completar sección institucional y privacidad según prácticas reales|Titular aporta datos; desarrollo publica|2–4 h / P0|Diez respuestas completas, identidad consistente y documentos revisados|
|Antes de abrir admisiones|Probar solicitud de piloto desde envío hasta registro, con consentimiento y seguimiento|Titular + QA / navegador y administración autorizada|1–2 h / P0|Una solicitud de prueba persistida una sola vez y trazabilidad de respuesta|
|8–30 días|Recoger cinco preguntas reales y comprobar comprensión con personas del público objetivo|Titular + UX|2 h iniciales / P1|Cinco preguntas documentadas y registro de dudas sin resolver|
|8–30 días|Verificar Search Console y elegibilidad de URLs; revisar metadatos secundarios|Titular + desarrollo / GSC|1–2 h + revisión semanal / P1|Diez URL elegibles, títulos/descripciones revisados y errores explicados|
|8–30 días|Acompañar colaboraciones pequeñas con acuerdos de alcance, precio y responsabilidades|Titular / piloto manual|2 h por colaboración / P1|Tres primeros pasos documentados con consentimiento; resultados reales separados de ejemplos|
|31–60 días|Priorizar un MVP de perfiles y publicaciones según evidencia del piloto|Producto + desarrollo|Estimación tras piloto / P1|Un flujo completo probado por participantes con permisos normales|
|31–60 días|Definir aportaciones verificadas, confianza y permisos progresivos|Titular + producto|4–8 h de diseño / P1|Reglas comprensibles y verificables; prueba con usuarios del piloto|
|31–60 días|Publicar experiencias reales consentidas y lecciones de colaboración|Titular verifica; contenido edita|2 h por caso / P1|Dos casos con permiso y fuentes; ningún testimonio ficticio|
|61–90 días|Revisar consultas, solicitudes, menciones IA y abandono; optimizar con evidencia|Titular + analítica autorizada|1 h semanal / P1|Informe por fuente y fecha, diez respuestas mantenidas y cero enlaces internos rotos|

## Pendientes que requieren datos o acción del titular

Condiciones de piloto por país, calendario de funcionalidades, prácticas reales de tratamiento de datos y exportación completa del proyecto. No se inventaron estos datos. El formulario fue pospuesto expresamente. Los créditos IA de Horizons están agotados; la edición y publicación usadas no dependieron de comprarlos.


## Evidencia de la ronda visual y metadatos

- Galería escritorio: formas-de-hacer-click-publicado.jpg.
- Galería móvil público: formas-de-hacer-click-movil.jpg (viewport solicitado 390, contenido 375).
- Auditoría: formas-publicado/audit.json e internal-links.json; metadatos finales en meta-publicado/audit.json.
- Código antes/después: horizons-changes/formas-v1 y horizons-changes/meta-1106 en GitHub.
- Validador oficial de Schema.org, portada: tres elementos, 0 errores y 0 advertencias; registro en schema-home.txt.
- El paquete es evidencia documental y HTTP; no incluye copia integral de Horizons ni datos de usuarios.
