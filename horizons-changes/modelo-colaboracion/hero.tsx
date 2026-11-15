import { Link } from 'react-router';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-top">
        <span className="eyebrow"><span className="status-dot"/> IDEAS LOCALES. POSIBILIDADES COMPARTIDAS.</span>
        <span className="hero-coordinate">LATINOAMÉRICA ↗</span>
      </div>
      <div className="hero-title-wrap">
        <h1 id="hero-heading">Las ideas hacen <span className="click-word">click<span className="click-dot">.</span><svg viewBox="0 0 400 20" aria-hidden="true"><path d="M4 14 C100 1 280 2 392 10"/></svg></span><span className="hero-sub">Colabora para hacerlas realidad.</span></h1>
      </div>
      <div className="hero-bottom">
        <div className="hero-description">
          <p>hago.click es una comunidad latinoamericana para crecer y generar ingresos colaborando. Personas, emprendedores y negocios comparten conocimientos, habilidades y recursos para desarrollar proyectos y ofrecer servicios a quienes van empezando. El acceso inicial es sin costo; cada integrante acuerda las condiciones de sus aportaciones.</p>
          <p className="hero-promise">Juntos las hacemos realidad.</p>
        </div>
        <div className="hero-actions">
          <Link className="button button-dark" to="/tengo-una-idea">Tengo una idea <ArrowUpRight size={21}/></Link>
          <Link className="button button-outline" to="/quiero-aportar">Quiero aportar <ArrowUpRight size={21}/></Link>
          <span className="action-note">Dos formas de empezar. Un mismo propósito.</span>
        </div>
      </div>
      <figure className="hero-feature">
        <img
          src="https://images.hostinger.com/bba8bde2-1477-49df-aa06-3f71ce33c6ea/a5c5ef84-c6bd-410b-ad13-30923dbcf4fb.png"
          srcSet="https://images.hostinger.com/bba8bde2-1477-49df-aa06-3f71ce33c6ea/a5c5ef84-c6bd-410b-ad13-30923dbcf4fb.png?width=375 375w, https://images.hostinger.com/bba8bde2-1477-49df-aa06-3f71ce33c6ea/a5c5ef84-c6bd-410b-ad13-30923dbcf4fb.png?width=768 768w, https://images.hostinger.com/bba8bde2-1477-49df-aa06-3f71ce33c6ea/a5c5ef84-c6bd-410b-ad13-30923dbcf4fb.png?width=1024 1024w, https://images.hostinger.com/bba8bde2-1477-49df-aa06-3f71ce33c6ea/a5c5ef84-c6bd-410b-ad13-30923dbcf4fb.png 1280w"
          sizes="(min-width: 1600px) 1450px, (min-width: 760px) 89vw, 88vw"
          alt="Tres personas latinoamericanas colaborando alrededor de un banco de trabajo iluminado, revisando bocetos y un prototipo."
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <figcaption>
          <span>FIG. 00 — EL MOMENTO EN QUE ALGO EMPIEZA</span>
          <strong>Tres personas, un prototipo y una conversación que avanza.</strong>
        </figcaption>
      </figure>
      <div className="hero-foot">
        <a href="#comunidad"><ArrowDown size={16}/> Descubre lo que podemos hacer juntos</a>
        <span>DE UNA IDEA A LO POSIBLE</span>
      </div>
    </section>
  );
}
