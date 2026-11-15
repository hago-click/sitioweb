import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export function Hero() {
  const [motionPaused, setMotionPaused] = useState(false);
  return (
    <section className="hero hc-night-hero" aria-labelledby="hero-heading" data-motion-paused={motionPaused}>
      <div className="hc-atmosphere" aria-hidden="true">
        <div className="hc-orb hc-orb-one"/><div className="hc-orb hc-orb-two"/>
        <svg className="hc-network" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" focusable="false">
          <g className="hc-net-base" fill="none">
            <path d="M-100 720 C200 720 80 140 470 140 S840 790 1550 390"/>
            <path d="M-80 790 C300 790 110 220 520 220 S980 860 1540 460"/>
            <path d="M-120 580 C190 580 210 55 680 85 S1030 620 1550 200"/>
            <path d="M50 1000 C90 540 640 700 850 290 S1270 60 1550 130"/>
            <path d="M20 1050 C160 610 710 780 930 340 S1350 120 1580 220"/>
          </g>
          <g className="hc-net-flow" fill="none">
            <path d="M-100 720 C200 720 80 140 470 140 S840 790 1550 390"/>
            <path d="M-120 580 C190 580 210 55 680 85 S1030 620 1550 200"/>
            <path d="M50 1000 C90 540 640 700 850 290 S1270 60 1550 130"/>
          </g>
          <g className="hc-net-nodes"><circle cx="470" cy="140" r="9"/><circle cx="850" cy="290" r="12"/><circle cx="1140" cy="490" r="8"/><circle cx="200" cy="510" r="7"/></g>
        </svg>
      </div>

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
        <div className="hc-photo-sticker" aria-hidden="true"><span>Una idea tuya.</span><strong>Más posibilidades juntos ↗</strong></div>
        <picture>
          <source type="image/avif" srcSet="https://darkorchid-donkey-829051.hostingersite.com/hago-click-media/hero-night-team-v1-480.avif 480w, https://darkorchid-donkey-829051.hostingersite.com/hago-click-media/hero-night-team-v1-768.avif 768w, https://darkorchid-donkey-829051.hostingersite.com/hago-click-media/hero-night-team-v1-1200.avif 1200w" sizes="(min-width: 1600px) 750px, (min-width: 1100px) 43vw, 88vw"/>
          <img src="https://darkorchid-donkey-829051.hostingersite.com/hago-click-media/hero-night-team-v1-1200.webp" srcSet="https://darkorchid-donkey-829051.hostingersite.com/hago-click-media/hero-night-team-v1-480.webp 480w, https://darkorchid-donkey-829051.hostingersite.com/hago-click-media/hero-night-team-v1-768.webp 768w, https://darkorchid-donkey-829051.hostingersite.com/hago-click-media/hero-night-team-v1-1200.webp 1200w" sizes="(min-width: 1600px) 750px, (min-width: 1100px) 43vw, 88vw" alt="Tres personas colaboran en una lámpara de madera: una dibuja el diseño, otra ajusta la pantalla y otra sostiene la base, en un taller azul iluminado por luz ámbar." width={1200} height={900} loading="eager" fetchPriority="high" decoding="sync"/>
        </picture>
        <figcaption>
          <span>ESCENA ILUSTRATIVA CREADA CON IA</span>
          <strong>Tres habilidades distintas. Una idea que toma forma.</strong>
        </figcaption>
      </figure>
      <div className="hero-foot">
        <a href="#ideas"><ArrowDown size={16}/> Explora lo que podríamos crear juntos</a>
        <span>DE UNA IDEA A LO POSIBLE</span>
        <button type="button" className="hc-motion-toggle" aria-pressed={motionPaused} onClick={() => setMotionPaused(value => !value)}>{motionPaused ? "Activar fondo" : "Pausar fondo"} <span aria-hidden="true">{motionPaused ? "▶" : "Ⅱ"}</span></button>
      </div>
    </section>
  );
}

