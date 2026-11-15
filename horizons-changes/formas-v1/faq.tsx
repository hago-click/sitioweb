import { ArrowUpRight, Plus } from 'lucide-react';
import { faqs } from '@/data/community';



export function Faq() {
  const openQuestion = (id: string) => {
    const question = document.getElementById(id);
    if (question instanceof HTMLDetailsElement) question.open = true;
  };
  return (
    <section id="preguntas" className="faq-section section-rail hc-faq-section" aria-labelledby="faq-heading">
      
      <div className="hc-faq-layout">
        <div className="hc-faq-intro">
          <span className="hc-faq-kicker">5 RESPUESTAS PARA DAR EL PRIMER PASO</span>
          <h2 id="faq-heading">¿Qué necesito<br/><em>para empezar?</em></h2>
          <p>Lo esencial para empezar, colaborar y cuidar tus acuerdos.</p>
          <nav className="hc-faq-shortcuts" aria-label="Temas de las preguntas frecuentes"><a href="#faq-1" onClick={() => openQuestion('faq-1')}>Empezar</a><a href="#faq-3" onClick={() => openQuestion('faq-3')}>Costos</a><a href="#faq-5" onClick={() => openQuestion('faq-5')}>Confianza</a></nav>
          <div className="hc-faq-contact">
            
            <strong>¿Otra duda?</strong>
            
            <a href="mailto:contacto@hago.click">contacto@hago.click <ArrowUpRight size={16} aria-hidden="true"/></a>
          </div>
        </div>
        <div className="hc-faq-list">
          {faqs.map((faq, index) => (
            <details className="hc-faq-item" id={`faq-${index + 1}`} key={faq.question}>
              <summary><h3><span className="hc-faq-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span>{faq.question}</span><span className="hc-faq-plus" aria-hidden="true"><Plus size={19}/></span></h3></summary>
              <div className="hc-faq-answer"><p>{faq.answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

