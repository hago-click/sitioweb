import { ArrowUpRight, BookOpen, Cpu, Wrench, Compass, Network, Shapes } from 'lucide-react';
import { galleryForms } from '@/data/community';

const accents = [BookOpen, Cpu, Wrench, Compass, Network, Shapes];
const examples = [
  'Por ejemplo: enseñar a calcular el costo de una receta para empezar a vender.',
  'Por ejemplo: convertir un boceto en un prototipo que se pueda probar.',
  'Por ejemplo: facilitar una herramienta y acordar su uso, cuidado y devolución.',
  'Por ejemplo: revisar los primeros precios o ayudar a organizar un proceso.',
  'Por ejemplo: presentar a una ilustradora con quien puede fabricar sus diseños.',
  'Por ejemplo: acordar un primer entregable y construirlo en equipo.',
];

export function Gallery() {
  return (
    <section id="formas-de-hacer-click" className="gallery-section section-rail hc-forms" aria-labelledby="gallery-heading">
      <div className="section-label"><span>03 / FORMAS DE HACER CLICK</span><span>LO QUE APORTAS PUEDE CAMBIAR LO QUE SIGUE</span></div>
      <div className="section-heading-row hc-forms-heading">
        <h2 id="gallery-heading">Algo que sabes.<br/>Algo que tienes.<br/><em>Mucho por hacer.</em></h2>
        <div><span className="hc-forms-seal">SEIS MANERAS DE SUMAR</span><p>Cada colaboración empieza con algo concreto. Descubre dónde encaja lo tuyo y cómo puede ayudar a que otra idea dé su siguiente paso.</p><a className="text-link" href="/quiero-aportar">Encuentra tu forma de aportar <ArrowUpRight size={18} aria-hidden="true"/></a></div>
      </div>
      <ul className="gallery-grid hc-forms-grid">
        {galleryForms.map((form, index) => {
          const Icon = accents[index];
          return <li key={form.number} className={`gallery-card hc-form-card hc-form-${index + 1}`}>
            <div className="gallery-media">
              <span className="gallery-index">{form.number}</span>
              <img src={form.image} srcSet={form.srcSet} sizes="(min-width: 1800px) 520px, (min-width: 1000px) 28vw, (min-width: 620px) 43vw, 89vw" alt={form.alt} width={960} height={720} loading="lazy" decoding="async"/>
              <span className="hc-form-icon" aria-hidden="true"><Icon size={22}/></span>
            </div>
            <div className="gallery-copy"><h3>{form.title}</h3><p>{form.description}</p>
              <details className="hc-form-example"><summary>Una forma de empezar <span aria-hidden="true">+</span></summary><p>{examples[index]}</p><a href="/quiero-aportar" aria-label={`Cómo aportar: ${form.title.toLowerCase()}`}>Explorar cómo aportar <ArrowUpRight size={16} aria-hidden="true"/></a></details>
            </div>
          </li>;
        })}
      </ul>
      <p className="gallery-note">Escenas ilustrativas creadas con IA para explicar formas de colaborar. Los ejemplos no representan proyectos realizados ni ofertas de integrantes.</p>
    </section>
  );
}
