# Hago.Click — Próximo lote priorizado para subir AI Visibility (2026-11-15, 14:24 Cancún)

## Medición real nueva
Checker: **79/100**, grado B. Categorías 20/20 rastreo, 16/16 descubrimiento, 18/18 legibilidad, 12/14 semántica, 5/12 información comercial, 8/10 contenido agentes, 0/10 interacción. Navegador 52/52. Hostinger confirma nueva publicación a las 19:16:35 UTC, pero en la consulta actual mantiene `is_in_progress:true`; no enviar otra edición mientras esté ocupado.

## Cinco acciones para próximo lote, separando funcionamiento real del indicador

1. **Enlaces de confianza reconocibles (potencial +3):** crear `/about` y `/terms` como alias o redirecciones comprobadas de `/acerca-de` y `/terminos`, publicarlos en HTML del footer de inicio, conservar canonicals de español, no duplicar contenido SEO; comprobar ruta, H1, enlace inicial y rescaneo. El Checker reportó literalmente `No link found for: about, terms`.
2. **Corregir acuerdo comunitario y NO publicar tarifas:** retirar tabla monetaria en `/precios`, reemplazar con `/acuerdos` (y compatibilidad /precios), texto «hago.click no establece precios ni tarifas por las aportaciones; las partes acuerdan si la colaboración es voluntaria, intercambio o remunerada». Sin Offer schema ficticio. Revisar home, FAQ, llms e index.md; no prometer recuperar los 4 puntos de precios.
3. **Negociación Markdown real (potencial +2):** `/index.md` hoy responde Markdown, pero `GET /` con `Accept: text/markdown` devuelve text/html. La respuesta debe negociarse a nivel HTTP para devolver `text/markdown` a bots que lo soliciten, manteniendo HTML para navegador normal. Si Horizons no admite servidor/middleware/edge, marcar bloqueo; no simular desde React.
4. **WebMCP real (potencial +6):** integrar API `document.modelContext.registerTool`/biblioteca React oficial según soporte y compatibilidad, con feature detection, sin polyfills; herramientas de solo lectura `get_topics`, `get_participation_options`, `get_collaboration_policy`, `get_pilot_status`, `get_faq`, basadas en información publicada. Asegurar que no se exponen consultas privadas, que no se realizan escrituras y que los controles actuales de teclado siguen funcionando. Fuente técnica: docs Chrome WebMCP (modo preview).
5. **MCP real + carta (potencial +4):** SOLO si Horizons ofrece backend integrado con POST HTTP/JSON-RPC compatible `initialize`, `tools/list` y `tools/call`; validar el servicio antes de anunciarlo en `/.well-known/mcp/server-card.json` porque es la ruta buscada por Checker. Una carta JSON sin servidor no equivale a funcionalidad. El estándar de tarjetas todavía evoluciona; la ruta de Checker refleja SEP-1649.

## Limitaciones que no se resolverán con ficción
- El Checker descuenta **2 puntos** por falta de teléfono y domicilio en schema. No hay contacto telefónico/dirección comercial confirmados; sitio digital, no inventar.
- El Checker descuenta **4 puntos** por ausencia de precios. Es una decisión deliberada no tener catálogo ni tarifas.
- Si se resolvieran todos los demás faltantes (3+2+6+4), el **máximo matemático orientativo sería 94/100**, sujeto a detección efectiva y sin atribuir puntuación antes de escanear.
- Si no se puede alojar MCP remoto real, el potencial aritmético sería 90/100. La rúbrica SEO/AEO del hackathon es evaluación distinta del Checker y exige evidencias por criterio.
- Core Web Vitals: LCP móvil histórico >2.5 s; repetir PageSpeed después de cambios.
- Prueba de 10 respuestas: preguntas por país y fecha de disponibilidad siguen siendo parcialmente contestadas; establecer y publicar una política real de elegibilidad y calendario solo cuando esté decidida, sin inventar fechas.

## Comp uertas
Conservar versión recuperable, lotes máximo cinco cambios, previsualización, 10 rutas iniciales + nuevas, 404, sitemap, robots, llms, schema y acceso sin JS, repetir Chromium 390/768/1440 y WebMCP en navegador compatible, Checker después de publicar. Sin cambios DNS, hosting o exposición de datos. Estado: recomendación documentada, **no implementado ni publicado por este archivo**.
