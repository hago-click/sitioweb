import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { Value } from '@/components/home/value';
import { HowItWorks } from '@/components/home/how-it-works';
import { Gallery } from '@/components/home/gallery';
import { Projects } from '@/components/home/projects';
import { Explorer } from '@/components/home/explorer';
import { Participation } from '@/components/home/participation';
import { Faq } from '@/components/home/faq';
import { faqs } from '@/data/community';

export function meta({ matches, location }: Route.MetaArgs) {
  const description = 'Comunidad latinoamericana para colaborar en proyectos: conecta ideas, conocimientos, habilidades, herramientas y recursos. Juntos las hacemos realidad.';
  return seo({ matches, location }, {
    title: 'hago.click — Comunidad para colaborar en Latinoamérica',
    description,
    image: 'https://images.hostinger.com/bba8bde2-1477-49df-aa06-3f71ce33c6ea/bba88a90-5130-4b10-a1db-0fe04f50a804.png',
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebSite', name: 'hago.click', url: 'https://hago.click/', description },
      { '@context': 'https://schema.org', '@type': 'Organization', name: 'hago.click', url: 'https://hago.click/', description, email: 'contacto@hago.click', contactPoint: { '@type': 'ContactPoint', name: 'Luis Carlos Olivares Trinidad', contactType: 'Contacto de hago.click', email: 'contacto@hago.click', availableLanguage: 'es' }, slogan: 'Las ideas hacen click. Juntos las hacemos realidad.' },
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    ],
  });
}

export default function HomePage() {
  return <main id="contenido"><Hero/><Projects/><EntrepreneurStory/><Value/><HowItWorks/><Gallery/><Explorer/><Participation/><Faq/></main>;
}


function EntrepreneurStory() {
  return (
    <section id="del-talento-al-negocio" className="bakery-story" aria-labelledby="bakery-title">
      <style>{`
        .bakery-story{max-width:1440px;margin:auto;padding:72px 24px;display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.8fr);gap:48px;align-items:center}
        .bakery-story figure{margin:0;min-width:0}
        .bakery-story video{display:block;width:100%;aspect-ratio:16/9;object-fit:contain;background:#20271f;border-radius:12px}
        .bakery-story figcaption{font-size:.78rem;line-height:1.5;color:#555b52;margin-top:12px}
        .bakery-story .eyebrow{font-size:.72rem;letter-spacing:.12em;font-weight:650}
        .bakery-story h2{font-size:clamp(2rem,3.1vw,3.4rem);line-height:1.08;letter-spacing:-.04em;margin:16px 0 24px;text-wrap:balance}
        .bakery-story p{line-height:1.65}
        .bakery-story ol{display:flex;flex-wrap:wrap;gap:10px 20px;list-style:none;padding:0;margin:24px 0;font-size:.8rem;color:#285e49}
        .bakery-story a{display:inline-flex;gap:20px;align-items:center;min-height:44px;color:#285e49;font-weight:650;text-decoration:underline;text-underline-offset:5px}
        @media(max-width:900px){.bakery-story{grid-template-columns:1fr;padding:44px 24px;gap:28px}.bakery-story .story-copy{grid-row:1}}
      `}</style>
      <figure>
        <video controls playsInline muted preload="metadata" aria-label="Ejemplo ilustrativo: de preparar brownies en casa a atender una repostería">
          <source src="https://ocre.mx/assets/hago-click/click.mp4" type="video/mp4" />
          Tu navegador no puede reproducir el video. <a href="https://ocre.mx/assets/hago-click/click.mp4">Abrir video de repostería</a>.
        </video>
        <figcaption>Escena ilustrativa generada con IA · Dulce Comienzo es un negocio ficticio.</figcaption>
      </figure>
      <div className="story-copy">
        <p className="eyebrow">DEL TALENTO AL PRIMER EMPRENDIMIENTO</p>
        <h2 id="bakery-title">Ya sabes hacer algo.<br />Imagina lo que podemos hacer juntos.</h2>
        <p>Preparar unos brownies puede ser el comienzo. Compartir conocimientos de costos, diseño y organización puede ayudar a convertir ese talento en un emprendimiento.</p>
        <ol aria-label="Una posibilidad de colaboración"><li>01 · Tu talento</li><li>02 · El apoyo de otros</li><li>03 · Un nuevo comienzo</li></ol>
        <a href="/piloto">Encuentra tu lugar <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
