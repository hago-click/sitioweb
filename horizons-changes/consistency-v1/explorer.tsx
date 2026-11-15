import { Link } from 'react-router';
import { ArrowUpRight, Code2, PencilRuler, Hammer, Store, Users, Sprout } from 'lucide-react';
import { categories } from '@/data/categories';

const themes = [
  { icon: Code2, idea: 'Una app, una automatización o una herramienta digital.', skills: 'Programación · Datos · Pruebas' },
  { icon: PencilRuler, idea: 'Un objeto útil, una experiencia o un diseño por probar.', skills: 'Diseño · Investigación · Prototipos' },
  { icon: Hammer, idea: 'Una pieza que necesita pasar del boceto a las manos.', skills: 'Materiales · Herramientas · Fabricación' },
  { icon: Store, idea: 'Un talento que quieres convertir en un pequeño negocio.', skills: 'Costos · Identidad · Primeras ventas' },
  { icon: Users, idea: 'Una necesidad compartida en tu barrio o comunidad.', skills: 'Organización · Educación · Colaboración' },
  { icon: Sprout, idea: 'Una forma de cultivar, ahorrar recursos o aprovechar residuos.', skills: 'Cultivo · Energía · Sostenibilidad' },
];

export function Explorer() {
  return <section id="explorar" className="explorer-section section-rail hc-explorer" aria-labelledby="explorer-heading">
    <div className="section-label"><span>EXPLORAR POR TEMA</span><span>SEIS ÁMBITOS PARA HACER CLICK</span></div>
    <div className="section-heading-row"><h2 id="explorer-heading">¿Dónde puede crecer<br/><em>lo que tienes en mente?</em></h2><p>Elige el tema más cercano a tu idea o a lo que sabes hacer. Encontrarás necesidades, ejemplos de aportaciones y orientación para empezar.</p></div>
    <ul className="explorer-grid">{categories.map((category, index) => {
      const theme = themes[index]; const Icon = theme.icon;
      return <li key={category.slug}><Link to={`/tema/${category.slug}`} className="explorer-card hc-theme-card"><div className="hc-theme-top"><span className="explorer-index">TEMA 0{index + 1}</span><span className="hc-theme-symbol" aria-hidden="true"><Icon size={34} strokeWidth={1.3}/></span></div><h3>{category.label}</h3><p>{theme.idea}</p><span className="hc-theme-skills">{theme.skills}</span><span className="hc-theme-action">Explorar este tema<ArrowUpRight size={19} aria-hidden="true"/></span></Link></li>;
    })}</ul>
    <div className="hc-explorer-help"><CompassNote/><p><strong>Tu idea puede cruzar varios temas.</strong> Empieza por el más cercano y explora los relacionados. Estas páginas explican posibilidades; todavía no muestran un directorio de proyectos reales.</p></div>
  </section>;
}
function CompassNote() { return <span className="hc-explorer-note-icon" aria-hidden="true">↗</span>; }
