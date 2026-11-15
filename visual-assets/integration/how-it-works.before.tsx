import { ArrowUpRight } from 'lucide-react';
import { steps } from '@/data/community';

export function HowItWorks() {
  return <section id="como-funciona" className="how-section section-rail" aria-labelledby="how-heading"><div className="section-label"><span>02 / CÓMO FUNCIONA</span><span>MENOS VUELTAS. MÁS PRIMEROS PASOS.</span></div><div className="section-heading-row"><h2 id="how-heading">Una conexión.<br/><em>Un nuevo comienzo.</em></h2><p>De lo que imaginas a lo que puedes hacer.<br/>Así entendemos la colaboración.</p></div><ol className="steps-list">{steps.map(step => <li key={step.number}><div className="step-marker"><span>{step.number}</span><ArrowUpRight size={24}/></div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol><div className="principle"><span className="status-dot"/><p>Colaborar bien también es acordar: respeto, transparencia y expectativas claras desde el inicio.</p></div></section>;
}
