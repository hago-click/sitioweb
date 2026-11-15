# Video de emprendimiento — integración preparada

Estado: componente y estilos preparados; no integrados, compilados ni publicados. Falta recibir y revisar el MP4 generado por el usuario y alojar sus archivos en un destino estable de Hostinger.

## Decisiones

- Un solo video de repostería por ahora; formato horizontal 16:9, sin audio.
- Insertar después de los proyectos y antes de las secciones explicativas, sujeto a comprobación visual del conjunto.
- Imagen inicial como poster; descarga de video únicamente después de activar el botón. Sin reproducción al cargar la página, sin bucle y con controles nativos.
- Altura reservada 16:9 para evitar saltos; una columna en móvil.
- Texto de contexto accesible fuera del video y aviso visible de escena ficticia generada con IA.
- No se presenta como caso real ni se prometen ingresos.

## Archivos

`entrepreneur-story.tsx` recibe `videoSrc` y `posterSrc` obligatorios. No contiene URLs ficticias ni se monta hasta tener activos verificados. `entrepreneur-story.css` es el estilo de la sección.

## Comprobación antes de publicar

1. Revisar archivo: continuidad de protagonista, anatomía, cortes, logotipo, encuadre final y ausencia de audio inesperado.
2. Preparar MP4 compatible y poster comprimido; verificar tamaño, duración y reproducción. Conservar el original.
3. Cargar activos en Hostinger y verificar respuesta HTTP y tipos de contenido.
4. Guardar fuente actual recuperable; integrar sección e importar CSS. No asumir despliegue automático desde GitHub a Horizons.
5. Probar vista previa móvil/escritorio, teclado, controles, error de reproducción, enlace `/piloto`, ausencia de solicitud MP4 antes del clic y estabilidad del espacio reservado.
6. Publicar y comprobar la versión pública; repetir medición de rendimiento móvil y guardar evidencia.

## Revisión HTTP actual

Se conserva evidencia en `evidence/video-preparacion/audit.json`: diez rutas del sitemap con estado 200, portada con un H1 y diez FAQ coincidentes con JSON-LD, imágenes sin alt ausente; sitemap, robots y llms responden 200, ruta inexistente 404. Esto no sustituye pruebas visuales ni una medición nueva de Lighthouse.
