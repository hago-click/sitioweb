import { Link } from 'react-router';
import { ArrowUpRight, Asterisk } from 'lucide-react';

export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="footer-invite">
				<p>
					Una idea puede empezar contigo.
					<br />
					<em>Lo que sigue puede ser juntos.</em>
				</p>
				<Link to="/piloto" aria-label="Solicitar acceso al piloto">
					<ArrowUpRight size={40} />
				</Link>
			</div>
			<div className="footer-main">
				<Link to="/" className="wordmark" aria-label="hago.click, inicio">
					hago<span>.</span>click<Asterisk className="brand-spark" aria-hidden="true" />
				</Link>
				<p>
					Las ideas hacen click.
					<br />
					Juntos las hacemos realidad.
				</p>
				<nav aria-label="Navegación del pie de página">
					<Link to="/tengo-una-idea">Tengo una idea</Link>
					<Link to="/quiero-aportar">Quiero aportar</Link>
					<Link to="/#explorar">Temas</Link>
					<Link to="/piloto">Solicitar piloto</Link>
					<Link to="/#preguntas">Preguntas frecuentes</Link>
				</nav>
			</div>
			<section id="contacto" aria-labelledby="contact-heading" style={{padding:"28px 0",borderTop:"1px solid #3a4840",display:"grid",gap:"12px",fontSize:"16px",lineHeight:1.6}}><h2 id="contact-heading" style={{fontSize:"20px"}}>Quién está detrás de hago.click</h2><p>Responsable: Luis Carlos Olivares Trinidad.</p><p>Contacto: <a href="mailto:contacto@hago.click" style={{textDecoration:"underline",overflowWrap:"anywhere"}}>contacto@hago.click</a></p><p>El acceso al piloto es sin costo. Cada colaboración acuerda sus propias condiciones.</p><p style={{fontSize:"13px"}}>Información actualizada el 15 de noviembre de 2026.</p></section><div className="footer-bottom">
				<span>© 2026 hago.click</span>
				<span>UN PUNTO DE ENCUENTRO PARA LATINOAMÉRICA</span>
				<a href="#contenido">Volver arriba ↑</a>
			</div>
		</footer>
	);
}
