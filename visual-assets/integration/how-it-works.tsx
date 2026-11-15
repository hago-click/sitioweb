import { ArrowUpRight } from 'lucide-react';
import { steps } from '@/data/community';

export function HowItWorks() {
  return <section id="como-funciona" className="how-section section-rail" aria-labelledby="how-heading"><div className="section-label"><span>02 / CÓMO FUNCIONA</span><span>MENOS VUELTAS. MÁS PRIMEROS PASOS.</span></div><div className="section-heading-row"><h2 id="how-heading">Una conexión.<br/><em>Un nuevo comienzo.</em></h2><p>De lo que imaginas a lo que puedes hacer.<br/>Así entendemos la colaboración.</p></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-labelledby="how-art-title how-art-desc" className="click-connections">
  <title id="how-art-title">Una idea encuentra conocimientos y recursos</title>
  <desc id="how-art-desc">Ilustración conceptual de tres aportes conectados para desarrollar un proyecto. No representa actividad real de la comunidad.</desc>
  
  <rect x="1" y="1" width="718" height="358" rx="24" fill="#f5f5ee"/>
  <g className="route"><path d="M145 100C250 100 240 180 330 180"/><path d="M145 260C250 260 240 180 330 180"/><path d="M390 180H565"/></g>
  <g className="pulse"><path d="M145 100C250 100 240 180 330 180"/><path d="M145 260C250 260 240 180 330 180"/><path d="M390 180H565"/></g>
  <g fill="#e0eadd" stroke="#427b68" strokeWidth="1.5"><circle cx="110" cy="100" r="34"/><circle cx="110" cy="260" r="34"/></g>
  <g fill="none" stroke="#244f40" strokeWidth="2" strokeLinecap="round"><path d="M98 102V88l12 5 12-5v14l-12 5Zm12-9v14M97 250l10 10-10 10m14 0h12"/></g>
  <circle cx="360" cy="180" r="39" fill="#192822"/>
  <g stroke="#a4e9c9" strokeWidth="3" strokeLinecap="round"><path d="M360 158v44M341 169l38 22M341 191l38-22"/></g>
  <rect x="565" y="145" width="70" height="70" rx="18" fill="#c2efda" stroke="#427b68"/>
  <path d="m582 180 12 12 23-25" fill="none" stroke="#244f40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  <g className="label" textAnchor="middle"><text x="110" y="155">Conocimientos</text><text x="110" y="315">Herramientas</text><text x="360" y="245">La idea hace click</text><text x="600" y="245">Primer paso</text></g>
</svg>
<ol className="steps-list">{steps.map(step => <li key={step.number}><div className="step-marker"><span>{step.number}</span><ArrowUpRight size={24}/></div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol><div className="principle"><span className="status-dot"/><p>Colaborar bien también es acordar: respeto, transparencia y expectativas claras desde el inicio.</p></div></section>;
}

