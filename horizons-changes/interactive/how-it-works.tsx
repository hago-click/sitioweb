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

const demoStyles = `
.collab-demo{position:relative;isolation:isolate;overflow:hidden;margin-top:38px;padding:34px;border:1px solid #42644e;border-radius:20px;background:radial-gradient(ellipse at 95% 5%,#3f654b,transparent 55%),#192d24;color:#f4f6ec;box-shadow:0 24px 55px #19352718}
.demo-top{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:24px}
.demo-kicker{font:10px/1.6 ui-monospace,monospace;letter-spacing:.12em;color:#d7e8d4}
.demo-pause{display:flex;align-items:center;gap:7px;min-height:44px;color:#e3efdf;font-size:11px;white-space:nowrap}
.demo-options{position:relative;z-index:2;display:flex;flex-wrap:wrap;gap:10px;margin-bottom:30px}
.demo-options button{display:inline-flex;gap:10px;align-items:center;min-height:48px;padding:12px 19px;border:1px solid #6a8974;border-radius:100px;color:#e0ecdf;font-size:13px;transition:background .2s,transform .2s,box-shadow .2s}
.demo-options button[aria-pressed=true]{background:#d8f3bc;border-color:#d8f3bc;color:#173a29;box-shadow:0 6px 20px #0002;transform:translateY(-2px)}
.demo-options button:hover{border-color:#d8f3bc}
.demo-options button:focus-visible,.demo-pause:focus-visible{outline:2px solid #f2c78d;outline-offset:5px}
.demo-scene{position:relative;display:grid;grid-template-columns:1fr 46px 1fr 46px 1fr;align-items:center;gap:0}
.demo-card{position:relative;min-width:0;align-self:stretch;display:flex;flex-direction:column;gap:14px;padding:26px 24px;border:1px solid #668373;border-radius:12px;background:#f7f8ef;color:#1c3428;box-shadow:0 12px 30px #0002;animation:demo-enter .4s ease both}
.demo-card:nth-of-type(3){animation-delay:.08s}
.demo-card.demo-result{background:#e5bd82;border-color:#e5bd82;animation-delay:.16s}
.demo-card-icon{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:#dfebd4;box-shadow:inset 0 0 0 1px #36573b18}
.demo-result .demo-card-icon{background:#f5d6ac}
.demo-card-label{font:10px/1.6 ui-monospace,monospace;letter-spacing:.09em;color:#344d3b}
.demo-card h3{font-size:clamp(20px,1.65vw,26px);line-height:1.16;letter-spacing:-.035em;margin:0;font-weight:550}
.demo-card p{font-size:13px;line-height:1.7;color:#344d3b;margin:0}
.demo-card a{display:inline-flex;align-items:center;justify-content:space-between;gap:12px;min-height:44px;padding-top:10px;margin-top:auto;font-size:12px;font-weight:700;color:#193d29;text-decoration:underline;text-underline-offset:4px}
.demo-connector{position:relative;height:2px;background:#7e9c7b;margin:0 5px;overflow:visible}
.demo-connector:after{content:'';position:absolute;right:0;top:-3px;width:8px;height:8px;border-top:1px solid #a6c698;border-right:1px solid #a6c698;transform:rotate(45deg)}
.demo-flow-dot{position:absolute;top:-3px;left:0;width:8px;height:8px;border-radius:50%;background:#e8c58c;box-shadow:0 0 12px #e8c58c80;animation:demo-flow 2.8s ease-in-out infinite}
.demo-connector:nth-of-type(4) .demo-flow-dot{animation-delay:1.4s}
.collab-demo[data-running=false] .demo-flow-dot{animation-play-state:paused}
.demo-note{font-size:11px;line-height:1.7;color:#d7e8d4;margin:24px 0 0;max-width:880px}
.demo-method{margin-top:28px;border-top:1px solid #c2cebf;border-bottom:1px solid #c2cebf}
.demo-method>summary{cursor:pointer;min-height:60px;display:flex;align-items:center;justify-content:space-between;gap:20px;font-size:14px;font-weight:650;list-style:none}
.demo-method>summary::-webkit-details-marker{display:none}
.demo-method>summary:focus-visible{outline:2px solid #285e49;outline-offset:4px}
.demo-method .steps-list{margin-top:0}
@keyframes demo-flow{0%{transform:translateX(0);opacity:0}20%{opacity:1}80%{opacity:1}100%{transform:translateX(26px);opacity:0}}
@keyframes demo-enter{from{opacity:.4;transform:translateY(10px)}to{opacity:1;transform:none}}
@media(max-width:1000px){.demo-scene{grid-template-columns:1fr;gap:0}.demo-card{padding:24px}.demo-connector{width:2px;height:26px;margin:0 auto;background:#7e9c7b}.demo-connector:after{right:-3px;top:auto;bottom:0;transform:rotate(135deg)}.demo-flow-dot{left:-3px;top:0;animation-name:demo-flow-vertical}.demo-card h3{font-size:24px}.collab-demo{padding:24px}}
@keyframes demo-flow-vertical{0%{transform:translateY(0);opacity:0}25%{opacity:1}75%{opacity:1}100%{transform:translateY(20px);opacity:0}}
@media(max-width:600px){.collab-demo{padding:20px 16px;border-radius:14px}.demo-top{align-items:flex-start;gap:12px;margin-bottom:20px}.demo-kicker{font-size:9px}.demo-options{gap:8px;margin-bottom:24px}.demo-options button{font-size:11px;padding:10px 12px;gap:7px;min-height:44px}.demo-options button svg{width:16px}.demo-card{padding:22px}.demo-note{font-size:11px}.demo-pause{font-size:10px}}
@media(prefers-reduced-motion:reduce){.demo-flow-dot,.demo-card{animation:none!important}.demo-options button{transition:none;transform:none!important}.demo-pause{display:none}}
`;

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
      <style>{demoStyles}</style>
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
