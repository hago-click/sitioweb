import type { Route } from './+types/piloto';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { PageHero } from '@/components/page-hero';
import { StageNotice } from '@/components/stage-notice';
import { PilotForm } from '@/components/piloto/pilot-form';
import { NextSteps } from '@/components/next-steps';

const SOCIAL_IMAGE =
	'https://images.hostinger.com/bba8bde2-1477-49df-aa06-3f71ce33c6ea/bba88a90-5130-4b10-a1db-0fe04f50a804.png';

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	const url = absoluteUrl(origin, location.pathname);
	return seo({ matches, location }, {
		title: 'Solicitar acceso al piloto de la comunidad · hago.click',
		description:
			'Pide acceso anticipado al piloto de hago.click. La comunidad está en etapa inicial: comparte tu interés y te avisamos cuando abramos más funcionalidades.',
		image: SOCIAL_IMAGE,
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'WebPage',
				name: 'Solicitar acceso al piloto — hago.click',
				description: 'Solicitud de acceso anticipado al piloto de hago.click.',
				url,
			},
			{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl(origin, '/') },
					{ '@type': 'ListItem', position: 2, name: 'Solicitar el piloto', item: url },
				],
			},
		],
	});
}

export default function PilotoPage() {
	return (
		<main id="contenido">
			<PageHero
				eyebrow="PILOTO · ETAPA INICIAL"
				title={
					<>
						Solicitar acceso
						<br />
						al piloto<span className="click-dot">.</span>
					</>
				}
				intro="hago.click está en una etapa inicial. Solicita acceso anticipado al piloto: comparte tu interés y te avisamos cuando abramos más funcionalidades."
				ctas={[
					{ label: 'Tengo una idea', href: '/tengo-una-idea', variant: 'outline' },
					{ label: 'Quiero aportar', href: '/quiero-aportar', variant: 'outline' },
				]}
			/>
			<StageNotice>
				hago.click está en etapa inicial. Este formulario registra tu solicitud de acceso al piloto; los perfiles,
				el directorio de proyectos y la mensajería aún no están disponibles.
			</StageNotice>
			<PilotForm />
			<NextSteps
				index="02 / SIGUIENTES PASOS"
				heading="Explora la"
				em="comunidad."
				intro="Mientras llega el piloto, descubre las dos formas de participar en hago.click."
				cards={[
					{
						kicker: 'PARA QUIENES CREAN',
						title: 'Tengo una idea',
						text: 'Aprende a presentar tu proyecto y a pedir colaboración con claridad.',
						href: '/tengo-una-idea',
					},
					{
						kicker: 'PARA QUIENES SUMAN',
						title: 'Quiero aportar',
						text: 'Descubre cómo ofrecer tus conocimientos, habilidades o recursos.',
						href: '/quiero-aportar',
						variant: 'mint',
					},
				]}
			/>
		</main>
	);
}

