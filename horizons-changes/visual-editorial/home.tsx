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
  return <main id="contenido"><Hero/><Projects/><Value/><HowItWorks/><Gallery/><Explorer/><Participation/><Faq/></main>;
}
