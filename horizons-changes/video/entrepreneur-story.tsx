import { useState } from 'react';

type EntrepreneurStoryProps = {
  videoSrc: string;
  posterSrc: string;
};

/** Prepared integration: pass verified, published asset URLs before mounting. */
export function EntrepreneurStory({ videoSrc, posterSrc }: EntrepreneurStoryProps) {
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <section className="entrepreneur-story" aria-labelledby="story-title">
      <div className="entrepreneur-story__copy">
        <p className="entrepreneur-story__eyebrow">DEL TALENTO AL PRIMER EMPRENDIMIENTO</p>
        <h2 id="story-title">Tú sabes hacer algo.<br />Juntos podemos darle forma.</h2>
        <p>Una persona sabe preparar brownies. La comunidad puede ayudarle a calcular costos, crear su identidad y organizar sus primeros pedidos.</p>
        <p>Así imaginamos la colaboración en hago.click: compartir lo que sabemos para abrir nuevas posibilidades de ingreso.</p>
        <a href="/piloto">Conoce cómo participar <span aria-hidden="true">↗</span></a>
      </div>
      <figure className="entrepreneur-story__figure">
        <div className="entrepreneur-story__media">
          {started ? (
            <video
              controls
              autoPlay
              muted
              playsInline
              preload="none"
              poster={posterSrc}
              aria-label="Escena ilustrativa: de preparar brownies en casa a atender una repostería"
              onError={() => setFailed(true)}
            >
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          ) : (
            <button
              className="entrepreneur-story__play"
              type="button"
              onClick={() => setStarted(true)}
              aria-label="Reproducir ejemplo ilustrativo de emprendimiento"
            >
              <img src={posterSrc} alt="Repostera disfrutando un brownie preparado en su cocina casera" width="1664" height="936" loading="lazy" decoding="async" />
              <span className="entrepreneur-story__play-label"><span aria-hidden="true">▶</span> Mira lo que podemos construir juntos</span>
            </button>
          )}
        </div>
        {failed && <p role="status">No se pudo reproducir el video. <a href={videoSrc}>Abrir el archivo de video</a>.</p>}
        <figcaption>Escena ilustrativa generada con IA. Dulce Comienzo es un negocio ficticio; no representa un caso real ni garantiza ingresos.</figcaption>
      </figure>
    </section>
  );
}
