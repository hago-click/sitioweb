import { exampleProjects } from '@/data/community';

/**
 * Galería editorial de tres proyectos hipotéticos. No son proyectos
 * registrados ni actividad real: ilustran cómo se vería una colaboración en
 * hago.click. Cada ficha alterna la posición de la imagen para crear un ritmo
 * editorial, no una cuadrícula uniforme de tarjetas.
 */
export function Projects() {
  return (
    <section id="ideas" className="projects-section" aria-labelledby="projects-heading">
      <div className="projects-rail">
        <div className="section-label projects-label">
          <span>EJEMPLOS · NO PROYECTOS REALES</span>
          <span>TRES IDEAS. TRES CAMINOS POSIBLES.</span>
        </div>
        <div className="projects-heading-row">
          <h2 id="projects-heading">
            Ideas que podrían
            <br />
            <em>hacerse realidad.</em>
          </h2>
          <p>
            Son ejemplos ilustrativos de cómo se vería una colaboración en hago.click. No son proyectos
            registrados ni representan actividad real de la comunidad.
          </p>
        </div>
        <ol className="projects-list">
          {exampleProjects.map((project, index) => (
            <li key={project.number} className={`project-item${index % 2 === 1 ? ' project-reverse' : ''}`}>
              <figure className="project-media">
                <span className="project-index">{project.number}</span>
                <img
                  src={project.image}
                  srcSet={project.srcSet}
                  sizes="(min-width: 1400px) 400px, (min-width: 900px) 28vw, (min-width: 601px) 42vw, 88vw"
                  alt={project.alt}
                  width={1216}
                  height={912}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span className="project-stage-dot" aria-hidden="true" />
                  <span className="project-stage">EJEMPLO HIPOTÉTICO · {project.stage}</span>
                </figcaption>
              </figure>
              <div className="project-copy">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                
                <details className="hc-project-details">
                  <summary>¿Cómo podría empezar? <span aria-hidden="true">+</span></summary>
                  <p>{[
                    'Elegir una pieza pequeña, revisar materiales y herramientas disponibles y buscar apoyo para desarrollar y probar el diseño.',
                    'Definir qué se quiere medir, reunir los componentes disponibles y pedir apoyo para preparar una primera prueba del sensor.',
                    'Elegir una pequeña colección, calcular materiales y costos y colaborar en fotografías e identidad para presentar los productos.'
                  ][index]}</p>
                  <a href={['/tema/fabricacion-y-prototipos', '/tema/tecnologia-y-software', '/tema/emprendimientos-y-negocios'][index]}>Explora formas de colaborar <span aria-hidden="true">↗</span></a>
                </details>
<div className="project-meta">
                  <div className="project-meta-block">
                    <span className="project-meta-label">APORTES POSIBLES</span>
                    <ul>
                      {project.resources.map((resource) => (
                        <li key={resource}>{resource}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-meta-block">
                    <span className="project-meta-label">COLABORACIÓN QUE NECESITARÍA</span>
                    <p>{project.helpNeeded}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="projects-note">
          Estos proyectos son hipotéticos y solo sirven para ilustrar el tipo de colaboración que imagina
          hago.click. Cuando existan iniciativas reales aprobadas, podrán incorporarse aquí como fichas dinámicas.
        </p>
      </div>
    </section>
  );
}
