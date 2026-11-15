import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, Lightbulb, Pencil, Wrench, Sparkles, Compass } from 'lucide-react';

type Cta = { label: string; href: string; variant?: 'dark' | 'outline' | 'mint' };
type PathKind = 'idea' | 'aporte' | 'tema' | 'piloto';

export function PathIllustration({ kind = 'idea' }: { kind?: PathKind }) {
  return <svg className="hc-path-visual" viewBox="0 0 360 180" fill="none" aria-hidden="true" focusable="false">
    <ellipse cx="180" cy="159" rx="146" ry="12" fill="#0c1526" opacity=".12"/>
    <path d="M57 111C91 176 247 10 306 91M48 121C120 21 252 179 315 103" stroke="#edbb79" strokeWidth="1.5" opacity=".65"/>
    <circle cx="56" cy="111" r="5" fill="#efb86b"/><circle cx="305" cy="92" r="5" fill="#ea9679"/>
    <g className="hc-path-float">
      <rect x="39" y="43" width="83" height="100" rx="10" transform="rotate(-10 39 43)" fill="#edb56b" stroke="#f9d9a4"/>
      <Lightbulb x="63" y="58" width="35" height="35" color="#263b60" strokeWidth="1.5"/>
      <path d="M60 112H92M59 123H81" stroke="#263b60" strokeWidth="3" strokeLinecap="round"/>
    </g>
    <g>
      <rect x="139" y="24" width="100" height="127" rx="11" fill="#fbf4e6" stroke="#d4dcec"/>
      {kind === 'aporte' ? <Wrench x="166" y="45" width="44" height="44" color="#31558e" strokeWidth="1.5"/> : kind === 'tema' ? <Compass x="166" y="45" width="44" height="44" color="#31558e" strokeWidth="1.5"/> : <Pencil x="166" y="45" width="44" height="44" color="#31558e" strokeWidth="1.5"/>}
      <path d="M159 109H218M159 122H204M159 135H211" stroke="#b8c4d6" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="218" cy="37" r="7" fill="#df8e72"/>
    </g>
    <g className="hc-path-float hc-path-float-late">
      <rect x="249" y="65" width="73" height="84" rx="10" transform="rotate(10 249 65)" fill="#d98164" stroke="#efa98d"/>
      <Sparkles x="265" y="88" width="33" height="33" color="#fff4e2" strokeWidth="1.5"/>
    </g>
    <path d="M116 35L123 25M122 43L136 41M264 36L273 26M279 48L291 46" stroke="#edbb79" strokeWidth="2" strokeLinecap="round"/>
  </svg>;
}

const paths = {
  idea: { title: 'De una inquietud a un primer paso.', steps: ['Explica qué quieres lograr', 'Identifica la ayuda que necesitas', 'Prepara una tarea pequeña'], note: 'No necesitas tener todas las respuestas. La guía te ayuda a ordenar lo que ya tienes.' },
  aporte: { title: 'Lo que sabes puede abrir un camino.', steps: ['Elige una aportación concreta', 'Aclara tu disponibilidad', 'Define alcance y condiciones'], note: 'Puedes aportar conocimiento, tiempo o recursos. Tú decides si tu servicio tiene costo.' },
  tema: { title: 'Encuentra dónde puede encajar lo tuyo.', steps: ['Reconoce una necesidad', 'Explora formas de colaborar', 'Prepara tu idea o aportación'], note: 'Estas páginas son orientación para empezar; todavía no son un directorio de proyectos.' },
  piloto: { title: 'Una comunidad que está comenzando.', steps: ['Conoce la propuesta', 'Expresa cómo te gustaría participar', 'Consulta las próximas novedades'], note: 'El acceso inicial es sin costo. Solicitarlo no garantiza admisión ni una fecha de acceso.' },
};

export function PageHero({ eyebrow, title, intro, ctas }: { eyebrow: string; title: ReactNode; intro: string; ctas?: Cta[] }) {
  const kind: PathKind = eyebrow.startsWith('QUIERO') ? 'aporte' : eyebrow.startsWith('TEMA') ? 'tema' : eyebrow.startsWith('PILOTO') ? 'piloto' : 'idea';
  const path = paths[kind];
  return <section className="page-hero section-rail hc-inner-hero" data-path={kind} aria-labelledby="page-hero-heading">
    <div className="page-hero-top"><span className="eyebrow"><span className="status-dot"/>{eyebrow}</span><span className="hero-coordinate">LATINOAMÉRICA ↗</span></div>
    <div className="hc-inner-layout">
      <div className="hc-inner-copy"><h1 id="page-hero-heading" className="page-title">{title}</h1><p className="page-hero-intro">{intro}</p>
        {ctas && ctas.length > 0 && <div className="page-hero-ctas">{ctas.map(cta => <Link key={cta.href} className={`button button-${cta.variant ?? 'dark'}`} to={cta.href}>{cta.label}<ArrowUpRight size={20} aria-hidden="true"/></Link>)}</div>}
      </div>
      <aside className="hc-route-panel" aria-label="Cómo empezar en este camino"><span className="hc-route-kicker">TU PUNTO DE PARTIDA</span><PathIllustration kind={kind}/><h2>{path.title}</h2><ol>{path.steps.map((step, i) => <li key={step}><span aria-hidden="true">0{i + 1}</span>{step}</li>)}</ol><p>{path.note}</p></aside>
    </div>
  </section>;
}
