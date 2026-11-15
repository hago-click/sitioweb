import { Link } from 'react-router';
import { PageHero } from '@/components/page-hero';
import { ArrowUpRight, Check, HelpCircle, Lightbulb } from 'lucide-react';
import type { Category } from '@/data/categories';
import { categoryMap } from '@/data/categories';

/**
 * Plantilla visual compartida por las seis páginas temáticas. Reutiliza los
 * tokens y la tipografía de hago.click (eyebrow monoespaciado, título con
 * acento en cursiva, secciones con borde superior) sin inventar actividad.
 */
export function CategoryPage({ category }: { category: Category }) {
	const related = category.related
		.map(slug => categoryMap[slug])
		.filter((c): c is Category => Boolean(c));

	return (
		<main id="contenido">
            <PageHero eyebrow={category.eyebrow} title={<>{category.title}<span className="click-dot">.</span></>} intro={category.intro} ctas={[{ label: 'Tengo una idea', href: '/tengo-una-idea', variant: 'dark' }, { label: 'Quiero aportar', href: '/quiero-aportar', variant: 'outline' }]} />

			<section className="section-rail category-needs" aria-labelledby="needs-heading">
				<div className="section-label">
					<span>01 / NECESIDADES FRECUENTES</span>
					<span>LO QUE UN PROYECTO DE ESTE ÁMBITO SUELE NECESITAR</span>
				</div>
				<div className="section-heading-row">
					<h2 id="needs-heading">
						Qué se necesita
						<br />
						<em>para avanzar.</em>
					</h2>
					<p>
						No todas las ideas requieren lo mismo. Estas son tres necesidades comunes en este ámbito,
						para que sepas qué tipo de colaboración pedir o ofrecer.
					</p>
				</div>
				<ol className="steps-list">
					{category.needs.map((need, index) => (
						<li key={need.title}>
							<div className="step-marker">
								<span>{String(index + 1).padStart(2, '0')}</span>
								<Lightbulb size={24} />
							</div>
							<h3>{need.title}</h3>
							<p>{need.text}</p>
						</li>
					))}
				</ol>
			</section>

			<section className="section-rail category-contributions" aria-labelledby="contributions-heading">
				<div className="section-label">
					<span>02 / APORTACIONES POSIBLES</span>
					<span>EJEMPLOS HIPOTÉTICOS, NO PROYECTOS REALES</span>
				</div>
				<div className="section-heading-row">
					<h2 id="contributions-heading">
						Cómo puedes
						<br />
						<em>sumar aquí.</em>
					</h2>
					<p>
						Tres formas concretas de aportar a un proyecto de este ámbito. Los ejemplos son
						hipotéticos e ilustran el tipo de colaboración, no resultados garantizados.
					</p>
				</div>
				<ul className="contribution-grid">
					{category.contributions.map(contribution => (
						<li key={contribution.title} className="contribution-card">
							<Check size={22} />
							<h3>{contribution.title}</h3>
							<p>{contribution.text}</p>
						</li>
					))}
				</ul>
			</section>

			<section className="section-rail category-faq" aria-labelledby="faq-heading">
				<div className="section-label">
					<span>03 / PREGUNTAS FRECUENTES</span>
					<span>DUDAS COMUNES DE ESTE ÁMBITO</span>
				</div>
				<div className="faq-layout">
					<div>
						<h2 id="faq-heading">
							Antes de
							<br />
							<em>empezar.</em>
						</h2>
						<p>
							Respuestas a las preguntas que surgen al colaborar en este tipo de proyectos. Si tienes
							una duda distinta, prepárala antes de pedir colaboración.
						</p>
					</div>
					<div className="faq-list">
						{category.faqs.map(faq => (
							<details key={faq.question}>
								<summary>
									{faq.question}
									<HelpCircle size={18} />
								</summary>
								<p>{faq.answer}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			<section className="section-rail category-related" aria-labelledby="related-heading">
				<div className="section-label">
					<span>04 / TEMAS RELACIONADOS</span>
					<span>OTROS ÁMBITOS PARA COLABORAR</span>
				</div>
				<div className="section-heading-row">
					<h2 id="related-heading">
						Sigue
						<br />
						<em>explorando.</em>
					</h2>
					<p>Las ideas no siempre encajan en un solo ámbito. Explora temas relacionados donde tu aporte también puede ser útil.</p>
				</div>
				<div className="related-grid">
					{related.map(relatedCategory => (
						<Link
							key={relatedCategory.slug}
							to={`/tema/${relatedCategory.slug}`}
							className="related-card"
						>
							<span>{relatedCategory.eyebrow.split('·')[0].trim()}</span>
							<h3>
								{relatedCategory.label} <ArrowUpRight size={22} />
							</h3>
							<p>{relatedCategory.description}</p>
						</Link>
					))}
				</div>
				<div className="category-stage-note">
					<span className="status-dot" />
					<p>
						hago.click está comenzando. Esta página presenta el ámbito y cómo colaborar en él; todavía no
						existe un directorio de proyectos aprobados ni perfiles públicos. Puedes{' '}
						<Link to="/piloto">solicitar acceso al piloto</Link> para ser de los primeros.
					</p>
				</div>
			</section>
		</main>
	);
}

