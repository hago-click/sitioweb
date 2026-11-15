import type { Route } from './+types/quiero-aportar';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { PageHero } from '@/components/page-hero';
import { StageNotice } from '@/components/stage-notice';
import { Ways } from '@/components/quiero-aportar/ways';
import { Business } from '@/components/quiero-aportar/business';
import { PrepareSection } from '@/components/prepare-section';
import { NextSteps } from '@/components/next-steps';

const SOCIAL_IMAGE =
	'https://images.hostinger.com/bba8bde2-1477-49df-aa06-3f71ce33c6ea/bba88a90-5130-4b10-a1db-0fe04f50a804.png';

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	const url = absoluteUrl(origin, location.pathname);
	return seo({ matches, location }, {
		title: 'Quiero aportar — Colabora con lo que sabes · hago.click',
		description:
			'Comparte conocimientos, habilidades o recursos en hago.click. Descubre formas de colaborar, prepara tu aportación y conoce cómo pueden participar los negocios.',
		image: SOCIAL_IMAGE,
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'WebPage',
				name: 'Quiero aportar — hago.click',
				description: 'Cómo colaborar en hago.click ofreciendo conocimientos, habilidades o recursos.',
				url,
			},
			{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl(origin, '/') },
					{ '@type': 'ListItem', position: 2, name: 'Quiero aportar', item: url },
				],
			},
		],
	});
}

export default function QuieroAportarPage() {
	return (
		<main id="contenido">
			<PageHero
				eyebrow="QUIERO APORTAR · ETAPA INICIAL"
				title={
					<>
						Quiero
						<br />
						aportar<span className="click-dot">.</span>
					</>
				}
				intro="Lo que sabes hacer puede ser justo lo que otro proyecto necesita. Aquí descubres formas de colaborar, cómo preparar tu aporte y cómo los negocios pueden sumar."
				ctas={[
					{ label: 'Solicitar el piloto', href: '/piloto', variant: 'dark' },
					{ label: 'Tengo una idea', href: '/tengo-una-idea', variant: 'outline' },
				]}
			/>
			<StageNotice />
			<Ways />
			<Business />
			<PrepareSection kind="aporte" />
			<NextSteps
				index="05 / SIGUIENTES PASOS"
				heading="¿Y ahora"
				em="qué sigue?"
				intro="El aporte encuentra su sentido cuando hay alguien que lo necesita. Explora el otro camino o solicita acceso al piloto."
				cards={[
					{
						kicker: 'PARA QUIENES CREAN',
						title: 'Tengo una idea',
						text: 'Si tienes un proyecto en mente y buscas colaboración, descubre cómo presentarlo.',
						href: '/tengo-una-idea',
					},
					{
						kicker: 'ACCESO ANTICIPADO',
						title: 'Solicitar el piloto',
						text: 'Pide acceso al piloto de hago.click y te avisamos cuando haya novedades.',
						href: '/piloto',
						variant: 'mint',
					},
				]}
			/>
		</main>
	);
}

