# Verificación de hago.click — 15 noviembre 2026, 14:06 Cancún

## Publicación observada
- Hostinger Horizons websiteId `bba8bde2-1477-49df-aa06-3f71ce33c6ea`: último `published_at=2026-11-15T19:04:50Z`, sin generación pendiente al momento de la lectura.
- Sitio público comprobado vía HTTPS: portada HTTP 200, nuevas rutas institucionales `/acerca-de`, `/contacto`, `/privacidad`, `/terminos`, `/precios` HTTP 200.
- Compilación observada en HTML actual: `/assets/index-CNxcyVIo...` diferente de versión anterior.
- Playwright en Chromium: **52/52** pruebas aprobadas; 390/768/1440px, navegación, menú, video muted loop, teclado, formulario (sin envío), diez rutas originales.
- AI Visibility Checker nuevo escaneo 14:06:20 Cancún: **79/100 grado B**, exactamente igual a la última medición anterior.

## Desglose observado del Checker
Crawling 20/20, Findability 16/16, Readability 18/18, Structured meaning 12/14, Commercial legibility 5/12, Agent-native content 8/10, Agent interaction 0/10.

Hallazgos reproducidos por la herramienta:
- Organization incomplete 2/4: solicita teléfono/dirección; NO se inventarán.
- About/contact/legal 1/4: no reconoce equivalentes de rutas `about` y `terms`.
- Pricing 0/4: busca lista de precios u Offer schema; el titular decidió **no mostrar precios de aportaciones**, ya que las condiciones dependen de la comunidad.
- Markdown 0/2: `GET /` con `Accept: text/markdown` devuelve HTTP 200 `text/html; charset=utf-8`; `GET /index.md` sí devuelve `text/markdown`.
- WebMCP 0/6: no se detectan herramientas de agentes.
- MCP card 0/4: `/.well-known/mcp/server-card.json` sin implementación verificada.

## Discrepancias de despliegue
- La web conserva tabla de importes `$0` en `/precios`, contraria a la última decisión de producto del titular.
- `/acuerdos`, `/about` y `/terms` responden 404; no están publicados.
- La nueva publicación **no demuestra** que se haya aplicado el lote solicitado previamente; el intento de enviarlo por API devolvió HTTP 409 porque había generación en curso.
- Los cambios específicos permanecen preparados en `docs/AI-VISIBILITY-ITERACION-79-2026-11-15.md` y el auditor `scripts/ai_visibility_regression.py` mide sus criterios. No fusionar el PR documental como señal de deployment.

## Próxima acción
Solicitar edición de cinco cambios al proyecto Horizons cuando esté libre; luego verificar preview/publicación, 52 pruebas, checker y huella de HTML público, sin inventar MCP, precios ni datos de contacto.
