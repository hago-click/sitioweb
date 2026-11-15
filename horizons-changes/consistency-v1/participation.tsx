import { Link } from 'react-router';
import { ArrowUpRight, Check } from 'lucide-react';
import { PathIllustration } from '@/components/page-hero';

export function Participation() {
  return <section id="participar" className="participation-section section-rail hc-participation" aria-labelledby="participation-heading">
    <div className="section-label"><span>04 / FORMAS DE PARTICIPAR</span><span>TODOS TENEMOS ALGO QUE SUMAR</span></div>
    <div className="section-heading-row"><h2 id="participation-heading">Un primer paso.<br/><em>Dos maneras de llegar.</em></h2><p>No tienes que saberlo todo ni tener un proyecto terminado. Elige desde dónde quieres empezar; puedes recorrer ambos caminos.</p></div>
    <div className="participation-grid">
      <Link to="/tengo-una-idea" className="participation-path idea-path"><div className="path-top"><span>01 / QUIERO HACERLO REALIDAD</span><ArrowUpRight size={24} aria-hidden="true"/></div><PathIllustration kind="idea"/><h3>Tengo una idea<span>.</span></h3><p>Quieres crear algo y te vendría bien otra habilidad, una herramienta o una mirada distinta.</p><ul className="hc-path-points"><li><Check size={15} aria-hidden="true"/>Aclara qué quieres lograr</li><li><Check size={15} aria-hidden="true"/>Identifica la ayuda que necesitas</li></ul><span className="path-link">Preparar mi idea<ArrowUpRight size={20} aria-hidden="true"/></span></Link>
      <Link to="/quiero-aportar" className="participation-path contribute-path"><div className="path-top"><span>02 / QUIERO SUMAR LO QUE SÉ</span><ArrowUpRight size={24} aria-hidden="true"/></div><PathIllustration kind="aporte"/><h3>Quiero aportar<span>.</span></h3><p>Tu experiencia, tiempo o recursos pueden ayudar a que alguien dé su siguiente paso.</p><ul className="hc-path-points"><li><Check size={15} aria-hidden="true"/>Define una aportación concreta</li><li><Check size={15} aria-hidden="true"/>Aclara alcance y condiciones</li></ul><span className="path-link">Preparar mi aportación<ArrowUpRight size={20} aria-hidden="true"/></span></Link>
    </div>
    <div className="participation-pilot"><div><span className="hc-route-kicker">PILOTO · ACCESO INICIAL SIN COSTO</span><h3>Ayúdanos a construir el comienzo.</h3><p>Conoce la propuesta y expresa cómo te gustaría participar. Solicitar acceso no crea una cuenta ni garantiza admisión o fecha de apertura.</p></div><Link className="button button-dark" to="/piloto">Solicitar acceso al piloto<ArrowUpRight size={20} aria-hidden="true"/></Link></div>
    <p className="participation-note">Los perfiles, el directorio de proyectos y la mensajería aún no están disponibles. Las asesorías o servicios pueden tener un costo acordado entre integrantes.</p>
  </section>;
}
