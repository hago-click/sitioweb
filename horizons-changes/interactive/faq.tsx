import { ArrowUpRight, Mail, Plus } from 'lucide-react';
import { faqs } from '@/data/community';

const faqStyles = `
.faq-section.hc-faq-section{display:block;background:#eadfce;padding-top:76px;padding-bottom:76px;border-top:1px solid #d3c4ac}
.hc-faq-layout{display:grid;grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr);gap:clamp(40px,7vw,110px);align-items:start}
.hc-faq-intro{position:sticky;top:30px;min-width:0}
.hc-faq-kicker{display:inline-flex;align-items:center;gap:8px;border:1px solid #9c9f85;border-radius:100px;padding:8px 12px;margin-bottom:26px;font:10px/1.5 ui-monospace,monospace;letter-spacing:.09em;color:#40513a}
.hc-faq-kicker:before{content:'';width:6px;height:6px;border-radius:50%;background:#3e7551}
.hc-faq-intro h2{font-size:clamp(38px,4.4vw,68px);line-height:1.02;letter-spacing:-.045em;font-weight:500;margin:0 0 26px;color:#203b2c}
.hc-faq-intro h2 em{font-family:'Instrument Serif',Georgia,serif;font-weight:400}
.hc-faq-intro>p{font-size:14px;line-height:1.8;color:#4e5847;max-width:370px}
.hc-faq-shortcuts{display:flex;flex-wrap:wrap;gap:10px;margin:24px 0 34px}
.hc-faq-shortcuts a{display:inline-flex;align-items:center;min-height:44px;padding:8px 14px;border:1px solid #b3b39b;border-radius:100px;font-size:12px;font-weight:600;color:#284d35;transition:background .2s,transform .2s}
.hc-faq-shortcuts a:hover{background:#f9f3e8;transform:translateY(-2px)}
.hc-faq-contact{position:relative;max-width:370px;padding:25px;border-radius:12px;background:#f5eee2;box-shadow:0 12px 28px #483a1f0c;border:1px solid #d7cbb6;overflow:hidden}
.hc-faq-contact>svg{display:block;margin-bottom:15px;color:#396a49}
.hc-faq-contact strong{font-size:19px;font-weight:550;letter-spacing:-.02em;color:#203b2c}
.hc-faq-contact p{font-size:13px;line-height:1.7;color:#59614f;margin:10px 0 14px}
.hc-faq-contact a{display:inline-flex;align-items:center;gap:12px;min-height:44px;font-size:13px;font-weight:650;color:#285e49;text-decoration:underline;text-underline-offset:5px;word-break:break-word}
.hc-faq-contact:after{content:'?';position:absolute;right:10px;top:3px;font:italic 135px/1 'Instrument Serif',Georgia,serif;color:#d3d8bb;pointer-events:none;opacity:.55;transform:rotate(12deg)}
.hc-faq-contact>*{position:relative;z-index:1}
.hc-faq-list{display:flex;flex-direction:column;gap:12px;min-width:0}
.hc-faq-item{scroll-margin-top:24px;border:1px solid #c6bfa9;border-radius:12px;background:#f5efe4;color:#203b2c;overflow:hidden;transition:background .25s,border-color .25s,box-shadow .25s}
.hc-faq-item summary{cursor:pointer;list-style:none;padding:23px 24px}
.hc-faq-item summary::-webkit-details-marker{display:none}
.hc-faq-item summary:focus-visible{outline:3px solid #709b5b;outline-offset:-6px;border-radius:12px}
.hc-faq-item h3{display:grid;grid-template-columns:28px minmax(0,1fr) 22px;align-items:center;gap:15px;font-size:16px;line-height:1.5;font-weight:600;letter-spacing:-.02em;margin:0}
.hc-faq-number{font:11px/1.4 ui-monospace,monospace;color:#58654c}
.hc-faq-plus{display:flex;align-items:center;justify-content:center;transition:transform .25s}
.hc-faq-answer{padding:0 25px 26px 67px}
.hc-faq-answer p{font-size:14px;line-height:1.85;margin:0;color:inherit}
.hc-faq-item:hover{border-color:#779365}
.hc-faq-item[open]{background:#213d2c;border-color:#213d2c;color:#f4f6eb;box-shadow:0 12px 26px #1c36251a}
.hc-faq-item[open] .hc-faq-number{color:#b7d79e}
.hc-faq-item[open] .hc-faq-plus{transform:rotate(45deg);color:#c9e9ae}
.hc-faq-item[open] .hc-faq-answer{animation:hc-faq-answer .28s ease both}
@keyframes hc-faq-answer{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:none}}
@media(max-width:900px){.hc-faq-layout{grid-template-columns:1fr;gap:34px}.hc-faq-intro{position:static}.hc-faq-intro h2{font-size:48px}.hc-faq-intro>p{max-width:580px}.hc-faq-contact{max-width:none;display:grid;grid-template-columns:30px 1fr;gap:0 16px;padding:20px}.hc-faq-contact>svg{grid-row:1/4;margin:0}.hc-faq-contact p{margin:6px 0}.hc-faq-contact a{grid-column:2}.hc-faq-shortcuts{margin-bottom:24px}}
@media(max-width:600px){.faq-section.hc-faq-section{padding-top:44px;padding-bottom:44px}.hc-faq-kicker{font-size:9px;margin-bottom:20px}.hc-faq-intro h2{font-size:43px}.hc-faq-item summary{padding:20px 16px}.hc-faq-item h3{grid-template-columns:20px minmax(0,1fr) 18px;gap:10px;font-size:14px}.hc-faq-answer{padding:0 18px 24px 46px}.hc-faq-answer p{font-size:13px}.hc-faq-list{gap:10px}}
@media(prefers-reduced-motion:reduce){.hc-faq-item,.hc-faq-plus,.hc-faq-shortcuts a{transition:none!important;transform:none!important}.hc-faq-answer{animation:none!important}}
`;

export function Faq() {
  const openQuestion = (id: string) => {
    const question = document.getElementById(id);
    if (question instanceof HTMLDetailsElement) question.open = true;
  };
  return (
    <section id="preguntas" className="faq-section section-rail hc-faq-section" aria-labelledby="faq-heading">
      <style>{faqStyles}</style>
      <div className="hc-faq-layout">
        <div className="hc-faq-intro">
          <span className="hc-faq-kicker">10 RESPUESTAS PARA DAR EL PRIMER PASO</span>
          <h2 id="faq-heading">¿Qué necesito<br/><em>para empezar?</em></h2>
          <p>Una idea que quieras explorar o algo que puedas aportar. El acceso inicial a la plataforma y al piloto es sin costo; cada colaboración se acuerda entre quienes participan.</p>
          <nav className="hc-faq-shortcuts" aria-label="Temas de las preguntas frecuentes"><a href="#faq-1" onClick={() => openQuestion('faq-1')}>Empezar</a><a href="#faq-6" onClick={() => openQuestion('faq-6')}>Costos</a><a href="#faq-9" onClick={() => openQuestion('faq-9')}>Confianza</a></nav>
          <div className="hc-faq-contact">
            <Mail size={24} aria-hidden="true"/>
            <strong>¿Tu duda es otra?</strong>
            <p>Escríbenos para preguntar sobre hago.click.</p>
            <a href="mailto:contacto@hago.click">contacto@hago.click <ArrowUpRight size={16} aria-hidden="true"/></a>
          </div>
        </div>
        <div className="hc-faq-list">
          {faqs.map((faq, index) => (
            <details className="hc-faq-item" id={`faq-${index + 1}`} key={faq.question} open={index === 0}>
              <summary><h3><span className="hc-faq-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span>{faq.question}</span><span className="hc-faq-plus" aria-hidden="true"><Plus size={19}/></span></h3></summary>
              <div className="hc-faq-answer"><p>{faq.answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
