import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Lightbulb, Palette, Wrench, Users, Check, Pause, Play } from 'lucide-react';
import { steps } from '@/data/community';

const examples = [
  {
    label: 'Tengo una idea', Icon: Lightbulb,
    yours: 'Quiero vender mis brownies',
    contribution: 'Tu receta, tu experiencia preparando repostería y tus ganas de empezar.',
    partner: 'Alguien que sabe de costos y diseño',
    support: 'Puede ayudarte a calcular ingredientes, ordenar pedidos y presentar tu producto.',
    result: 'Una primera oferta para probar',
    next: 'Un producto definido, un costo estimado y una forma de darlo a conocer.',
    href: '/tengo-una-idea', action: 'Da forma a tu idea',
  },
  {
    label: 'Sé hacer algo', Icon: Palette,
    yours: 'Sé diseñar identidades',
    contribution: 'Tu experiencia en diseño, ilustración o comunicación puede ser un punto de partida.',
    partner: 'Un emprendimiento que necesita presentarse',
    support: 'Pueden acordar una aportación voluntaria o un servicio con precio y alcance claros.',
    result: 'Un encargo con un objetivo claro',
    next: 'Una pieza de muestra, condiciones acordadas y un próximo paso para ambas partes.',
    href: '/quiero-aportar', action: 'Descubre cómo aportar',
  },
  {
    label: 'Tengo herramientas', Icon: Wrench,
    yours: 'Tengo equipo que puedo compartir',
    contribution: 'Puedes aportar acceso a una herramienta, un espacio y experiencia para utilizarlo.',
    partner: 'Una persona con un prototipo pendiente',
    support: 'Pueden revisar qué equipo sirve y acordar acompañamiento, uso seguro, tiempos y responsabilidades.',
    result: 'Una prueba pequeña y viable',
    next: 'Un primer prototipo para aprender, evaluar y mejorar antes de hacer algo más grande.',
    href: '/quiero-aportar', action: 'Pon tus recursos en movimiento',
  },
] as const;



function CollaborationDemo() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const example = examples[selected];
  const Icon = example.Icon;

  useEffect(() => {
    if (!container.current || !('IntersectionObserver' in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(entries => setVisible(entries.some(entry => entry.isIntersecting)), { threshold: .08 });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="collab-demo" ref={container} data-running={visible && !paused}>
      
      <div className="demo-top">
        <span className="demo-kicker">ELIGE TU PUNTO DE PARTIDA · EJEMPLO INTERACTIVO</span>
        <button type="button" className="demo-pause" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? <Play size={13} aria-hidden="true"/> : <Pause size={13} aria-hidden="true"/>}{paused ? 'Activar movimiento' : 'Pausar movimiento'}</button>
      </div>
      <div className="demo-options" role="group" aria-label="Elige tu punto de partida">
        {examples.map((item, index) => <button type="button" key={item.label} aria-pressed={index === selected} aria-controls="collaboration-example" onClick={() => setSelected(index)}><item.Icon size={18} aria-hidden="true"/>{item.label}</button>)}
      </div>
      <div className="demo-scene" id="collaboration-example" key={selected} aria-live="polite" aria-atomic="true">
        <article className="demo-card">
          <span className="demo-card-icon"><Icon size={22} aria-hidden="true"/></span>
          <span className="demo-card-label">01 · LO QUE TÚ APORTAS</span>
          <h3>{example.yours}</h3><p>{example.contribution}</p>
        </article>
        <div className="demo-connector" aria-hidden="true"><span className="demo-flow-dot"/></div>
        <article className="demo-card">
          <span className="demo-card-icon"><Users size={22} aria-hidden="true"/></span>
          <span className="demo-card-label">02 · LO QUE PUEDE SUMAR OTRA PERSONA</span>
          <h3>{example.partner}</h3><p>{example.support}</p>
        </article>
        <div className="demo-connector" aria-hidden="true"><span className="demo-flow-dot"/></div>
        <article className="demo-card demo-result">
          <span className="demo-card-icon"><Check size={22} aria-hidden="true"/></span>
          <span className="demo-card-label">03 · UN PRIMER RESULTADO POSIBLE</span>
          <h3>{example.result}</h3><p>{example.next}</p>
          <a href={example.href}>{example.action}<ArrowUpRight size={17} aria-hidden="true"/></a>
        </article>
      </div>
      <p className="demo-note">Esta es una demostración ilustrativa, no una búsqueda de miembros ni una oferta disponible. Cada colaboración puede ser voluntaria o remunerada y requiere acuerdos entre quienes participan.</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="how-section section-rail" aria-labelledby="how-heading">
      <div className="section-label"><span>02 / CÓMO FUNCIONA</span><span>MENOS VUELTAS. MÁS PRIMEROS PASOS.</span></div>
      <div className="section-heading-row">
        <h2 id="how-heading">¿Cómo se convierte una idea<br/><em>en un primer paso?</em></h2>
        <p>Compartiendo qué quieres lograr, conectando conocimientos y recursos y acordando una tarea concreta. Prueba estos tres ejemplos de colaboración.</p>
      </div>
      <CollaborationDemo/>
      <details className="demo-method"><summary>Los tres pasos para colaborar bien <span aria-hidden="true">+</span></summary><ol className="steps-list">{steps.map(step => <li key={step.number}><div className="step-marker"><span>{step.number}</span><ArrowUpRight size={24} aria-hidden="true"/></div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></details>
      <div className="principle"><span className="status-dot"/><p>Colaborar bien también es acordar: respeto, transparencia y expectativas claras desde el inicio.</p></div>
    </section>
  );
}
