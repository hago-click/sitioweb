# FAQ editorial y explicación interactiva — publicación verificada

Publicado en https://hago.click/ a 2026-11-15T11:18:50Z.

## Referencias investigadas

- Two-Column FAQ, LN: https://21st.dev/@ln-dev7/components/faqs-02 — composición de dos columnas e introducción fija; MIT declarada.
- Slit Type FAQ, Kedhareswer: https://21st.dev/@kedhareswer/components/slit-type-faq — contraste y relleno de la respuesta activa; MIT declarada.
- FAQ Accordion Reveal, Mohammad Shehadeh: https://21st.dev/@mohammadshehadeh/components/faq-06 — tarjetas y transiciones de apertura; MIT declarada.

Implementación propia sobre React, CSS y lucide-react existentes. No se importaron componentes completos ni dependencias nuevas.

## Implementado

FAQ cálida en dos columnas; diez preguntas numeradas en details/summary nativos; respuesta activa verde oscuro, sombras y transición de apertura. Accesos Empezar/Costos/Confianza abren y desplazan a su pregunta. Contacto real mailto. Dos H2 nuevos son preguntas con respuesta introductoria inmediata: cómo convertir una idea en un paso y qué se necesita para empezar. El contenido de las diez respuestas se conserva y sigue sincronizado con FAQPage.

Demostración de tres entradas: idea, habilidad o herramientas. Cambian aportación, apoyo complementario, resultado posible y enlace. Conexiones animadas mediante transform, controles para pausar y parada fuera de pantalla; prefers-reduced-motion en CSS. Se identifica expresamente como ejemplo, sin miembros ni ofertas reales. Los pasos anteriores se conservan en un desplegable para reducir longitud en móvil.

## Incidencia resuelta antes de publicar

La revisión automática rechazó inicialmente la publicación por un error de hidratación observado durante edición en caliente: el HTML aún contenía un color de la versión previa del estilo de FAQ, mientras el cliente tenía la nueva. Se eliminaron los nodos React style de ambos componentes y se movió su CSS a index.css. No se desactivaron validaciones ni se añadió suppressHydrationWarning. Dos cargas estables y sus interacciones devolvieron cero errores capturados. La publicación posterior fue aceptada; en producción se verificaron cero nodos de estilo dentro de FAQ y cero errores de consola tras usar los controles.

## Pruebas

Tres escenarios y destinos /tengo-una-idea y /quiero-aportar; pausa de animación; apertura directa de costos y confianza; Enter abre/cierra una pregunta. Vista previa móvil efectiva 375 px sin desbordamiento, con conexiones verticales. La captura móvil final de producción no se validó: el override de la extensión devolvió ancho de escritorio; no se presenta como prueba móvil.

Auditoría: diez rutas 200; un H1 en inicio; diez FAQ y respuestas en HTML inicial coincidentes con JSON-LD; ruta inexistente 404. Copias antes/después de los dos componentes y stylesheet en horizons-changes/interactive/; recuperación parcial, no backup completo del proyecto.

## Medición publicada más reciente

https://pagespeed.web.dev/analysis/https-hago-click/afy91l8nye?form_factor=mobile — 15 noviembre 06:20:21 Cancún: rendimiento 91; accesibilidad 100; buenas prácticas 100; SEO 100; navegación con agentes 3/3. FCP 1,517 s; LCP 3,078 s; TBT 0 ms; CLS 0; Speed Index 4,216 s. Sin CrUX. La medición previa a estos dos bloques fue 94; no se afirma mejora del rendimiento con esta ampliación. Sigue pendiente LCP <2,5 s.
