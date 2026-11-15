# hago.click — Auditoría editorial y AI Visibility tras publicación
Corte: 2026-11-15, 14:45 hora de Cancún. Publicación confirmada por Horizons a las **19:43:58 UTC**. Proyecto: websiteId `bba8bde2-1477-49df-aa06-3f71ce33c6ea`.

## Resultado verificado
- **AI Visibility Checker: 88/100, grado B**, frente a 79/100 anterior. Desglose: rastreo 20/20; descubrimiento 16/16; legibilidad 18/18; datos estructurados 12/14; comercial 8/12; contenido agentes 8/10; interacción 6/10.
- **52/52 pruebas generales Chromium** aprobadas en portada 390, 768 y 1440, rutas y metadatos, menú móvil, video muted loop y teclado; formulario solo verificado en estructura, sin enviar datos.
- **52/54 comprobaciones de entrega** aprobadas. Fallos: GET `/` con `Accept: text/markdown` sigue entregando text/html; tarjeta MCP publicada pero estructura de card no coincide con la expectativa del test y el Checker todavía da 0/4.
- **WebMCP funciona realmente**: Chromium 153 con `--enable-features=WebMCP --enable-webmcp-testing` expuso `get_topics`, `get_participation_options`, `get_collaboration_policy`, `get_pilot_status`, `get_faq`; las cinco herramientas devolvieron resultados de ejecución (5/5). En Chrome 153 `executeTool` usa argumentos serializados a JSON; nuestro test se corrigió para compatibilidad.
- **El servidor MCP remoto /mcp funciona parcialmente en los métodos probados**: `initialize` devuelve 200/result con versión 2025-06-18; `tools/list` devuelve 200 y cinco tools; `tools/call` sobre get_topics, get_collaboration_policy y get_faq devuelve 200/result (3/3), todos solo lectura con datos públicos. El endpoint existe: no confundir con tarjeta válida.
- **Tarjeta MCP**: `/.well-known/mcp/server-card.json` devuelve 200 application/json, pero usa `{"version":"2025-11-25","server":{"name":...,"transport":...}}`. La propuesta SEP-1649 que usa el Checker espera `$schema`, `version:"1.0"`, `protocolVersion`, `serverInfo:{name,version}`, `transport:{type,endpoint}`, `capabilities` al nivel raíz. El Checker otorga **0/4**, así que no declarar conformidad ni puntos hasta corregir tarjeta y comprobar su CORS y MIME.
- **El usuario decidió** no publicar precios/tarifas de aportaciones. El Checker descuenta 0/4 por precios, deliberadamente. No fabricar precios. El Checker resta 2/4 por teléfono y domicilio no confirmados: no inventarlos.

## ¿Se publicó toda la reescritura editorial?
**NO.** El documento aprobado de renovación editorial aún no se incorporó en las diez rutas originales. Se compararon en HTML publicado 24 titulares/frases concretos priorizados de `docs/EDITORIAL-IMPLEMENTACION-2026-11-15.md`, con **0 coincidencias literales de 24** (no significa que el contenido actual carezca de mensajes similares). Esta es una comprobación exacta de textos, no una evaluación subjetiva ni SEO.

| Ruta | H1 público verificado | H1 editorial propuesto | Coincidencia |
|---|---|---|---|
| / | Las ideas hacen click. Colabora para hacerlas realidad. | Lo que quieres hacer puede empezar con una conversación. | No |
| /tengo-una-idea | Tengo una idea. | Tu idea no necesita estar terminada para empezar a explicarla. | No |
| /quiero-aportar | Quiero aportar. | Eso que sabes hacer puede ser útil de otra manera. | No |
| /piloto | Solicitar acceso al piloto. | Queremos conocer cómo te gustaría participar. | No |
| /tema/tecnologia-y-software | Tecnología y software. | Una herramienta digital empieza por resolver algo concreto. | No |
| /tema/diseno-y-productos | Diseño y desarrollo de productos. | Antes de fabricar algo, vale la pena probar si funciona para quien lo necesita. | No |
| /tema/fabricacion-y-prototipos | Fabricación y prototipos. | Entre un dibujo y una pieza terminada hay decisiones que tomar. | No |
| /tema/emprendimientos-y-negocios | Emprendimientos y pequeños negocios. | Hacer algo bien y convertirlo en un negocio son tareas diferentes. | No |
| /tema/proyectos-sociales | Proyectos sociales y comunitarios. | Una mejora para tu entorno empieza por escuchar a quienes lo conocen. | No |
| /tema/agricultura-y-sostenibilidad | Agricultura y sostenibilidad. | Lo que funciona en el campo también depende de conocer el lugar. | No |

Otros titulares pendientes en portada incluyen: «En un tema puedes enseñar. En otro, aprender», «Una necesidad concreta hace más fácil empezar», «Los acuerdos claros también son una forma de cuidar el trabajo», «Cada proyecto tiene una pregunta por resolver» y «Quizá ya tienes algo útil para otro proyecto». Confirmado con GET de las diez rutas y extracción de HTML inicial; evidencia: `evidence/2026-11-15/editorial-comparison-publication-194358Z.json`.

## Acción intentada, bloqueo de escritura
Se intentó editar el lote de **cinco secciones de la portada** mediante Hostinger Horizons tras verificar `is_in_progress=false`. API rechazó con **HTTP 402: No available credits left**. La edición editorial **no fue aplicada**, aunque las anteriores mejoras técnicas continúan publicadas. El editor del sitio solo podrá procesar nuevo lote una vez disponibles créditos; no asumir GitHub -> Horizons.
- Contrato completo en `docs/EDITORIAL-IMPLEMENTACION-2026-11-15.md` (lotes A–F).
- Prioridad siguiente: portada en lote de cinco cambios, luego las páginas de participación/piloto y las seis temáticas en dos lotes de tres, sin perder SEO, accesibilidad, multimedia ni reglas sobre ausencia de precios.
- Tarjeta MCP: corregir el **esquema de respuesta**, no inventar servidor, pues /mcp ya responde correctamente a los métodos públicos comprobados.
- Negociación Markdown depende de la respuesta HTTP en la ruta raíz: React no modifica MIME por sí mismo.

## Evidencias de QA versionadas
- `evidence/2026-11-15/editorial-comparison-publication-194358Z.json`: 24 titulares comparados en 10 rutas.
- `evidence/2026-11-15/webmcp-verified-publication-194358Z.json`: 5 tools ejecutadas.
- `evidence/2026-11-15/release-gate-publication-194358Z.json`: 52/54 puntos del release gate.
- `scripts/browser-smoke.cjs` y `scripts/webmcp-native-regression.cjs`: pruebas reutilizables.

Estados: editorial **preparado/documentado, bloqueado en edición**; WebMCP **implementado, probado, publicado**; MCP remoto **implementado, métodos públicos probados, publicado**; Server Card **publicada pero no conforme al Checker**; Markdown en /index.md **publicado**, negociación `Accept` **pendiente**.
