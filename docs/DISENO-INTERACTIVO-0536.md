# Diseño interactivo publicado — 15 noviembre 2026

## Implementado y publicado

Horizons finalizó publicación a 2026-11-15T10:36:12Z. Se comprobó públicamente un fondo SVG de ocho trazos con señales animadas, nodos, degradado menta y luz cálida; tarjeta editorial superpuesta a la foto; control de pausa de fondo. La animación se pausa fuera de pantalla y CSS respeta prefers-reduced-motion.

Los tres ejemplos tienen luz radial siguiendo el puntero, elevación y ampliación de fotografía en dispositivos con puntero preciso. Tienen desplegables nativos con primer paso ilustrativo y enlaces a tres rutas temáticas existentes. Revelado mediante IntersectionObserver; no se oculta contenido en el HTML inicial. Sin librerías nuevas ni canvas/WebGL.

Video: poster WebP de 26.614 bytes incrustado (aprox. 35 KB en texto base64) y preload=none. El MP4 sigue siendo el original en ocre.mx; no afirmar que se reemplazó por el optimizado. DOM público mostró readyState=0 antes de reproducir; vista previa llegó al final tras activarlo, sin error. preload es una indicación al navegador, no una garantía universal de cero solicitudes.

## Referencias 21st.dev

- Background Paths de Kokonut UI: https://21st.dev/@kokonutd/components/background-paths — página muestra MIT y dependencia framer-motion.
- Feature Grid Spotlight Cards de Mohammad Shehadeh: https://21st.dev/@mohammadshehadeh/components/feature-08 — página enlaza licencia MIT.

Se usaron como referencias de patrones. La implementación SVG/CSS/React es propia; no se descargó ni instaló el código completo de esos componentes. Animated SVG Background también se investigó, pero no se confirmó su licencia y no se incorporó su código.

## Pruebas y evidencia

- Pausa del fondo: animationPlayState running → paused → reactivación.
- Desplegable: open=true con contenido y enlace /tema/fabricacion-y-prototipos.
- Puntero: variables --spot-x/--spot-y actualizadas en la tarjeta.
- Pausa fuera de pantalla: data-hc-offscreen=true.
- Ancho móvil efectivo 375 px, scrollWidth 375; pruebas y capturas de vista previa.
- Consola de vista previa sin errores capturados.
- HTML de vista previa: diez rutas 200, un H1 en inicio, diez FAQ coincidentes, ruta inexistente 404.
- Publicación: fondo, tres desplegables y un H1 presentes; poster y preload=none verificados.
- Evidencia local: evidence/creativo-portada-publicada.jpg; evidence/creativo-proyectos-preview.jpg; evidence/creativo-movil-preview.jpg.
- Recuperación: horizons-changes/creative/before.json contiene las tres fuentes previas. Fuentes finales en la misma carpeta; no existe sincronización automática GitHub→Horizons.

## Medición posterior

PageSpeed móvil: https://pagespeed.web.dev/analysis/https-hago-click/d1g854baf9?form_factor=mobile

15 noviembre 05:36:30 Cancún: rendimiento 89, accesibilidad 100, buenas prácticas 100, SEO 100, navegación con agentes 3/3. FCP 1,658 s, LCP 3,303 s, TBT 0 ms, CLS 0. Sin datos de campo.

La medición anterior dio 92 y LCP 2,996 s. No se afirma mejora de rendimiento ni se atribuye causalidad sin aislamiento. El informe actual señala la imagen principal como LCP, retraso de renderización 1.960 ms y tres animaciones no compuestas. Objetivo LCP <2,5 s pendiente; siguiente lote: revisar imagen/fuentes y costo de pintura del fondo, conservando el impacto visual.
