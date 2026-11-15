/**
 * Seis ámbitos temáticos para descubrir formas de colaboración en hago.click.
 * El contenido es original y orientativo: los ejemplos están marcados como
 * hipotéticos y no representan proyectos reales aprobados.
 */
export type CategoryFaq = { question: string; answer: string };
export type CategoryItem = { title: string; text: string };

export type Category = {
	slug: string;
	/** Etiqueta corta para tarjetas y navegación. */
	label: string;
	/** Eyebrow monoespaciado en la cabecera de la página. */
	eyebrow: string;
	/** H1 de la página (puede incluir HTML para el acento). */
	title: string;
	/** Título plano para metadatos y breadcrumbs. */
	plainTitle: string;
	/** Descripción para meta description (120–160 caracteres). */
	description: string;
	/** Introducción de utilidad real. */
	intro: string;
	/** Tres necesidades frecuentes de colaboración. */
	needs: CategoryItem[];
	/** Tres ejemplos de aportaciones posibles. */
	contributions: CategoryItem[];
	/** Preguntas frecuentes del ámbito. */
	faqs: CategoryFaq[];
	/** Slugs de categorías relacionadas. */
	related: string[];
};

export const categories: Category[] = [
	{
		slug: 'tecnologia-y-software',
		label: 'Tecnología y software',
		eyebrow: 'TEMA 01 · TECNOLOGÍA Y SOFTWARE',
		title: 'Tecnología y software',
		plainTitle: 'Tecnología y software',
		description:
			'Ideas de tecnología y software en hago.click: qué desarrollar, qué conocimientos y recursos se necesitan y cómo colaborar desde Latinoamérica.',
		intro:
			'Aplicaciones, herramientas, automatizaciones y plataformas digitales. En este ámbito se reúnen ideas que necesitan programación, datos, infraestructura o validación técnica. No hace falta un equipo completo para empezar: una funcionalidad bien definida y una primera versión usable ya son un avance real.',
		needs: [
			{
				title: 'Desarrollo y programación',
				text: 'Construir una aplicación web o móvil, integrar una API o automatizar un proceso repetitivo. Suele necesitarse frontend, backend o alguien que sepa elegir el stack adecuado.',
			},
			{
				title: 'Validación técnica y arquitectura',
				text: 'Definir cómo se estructura una solución antes de programarla: qué base de datos conviene, cómo escalar o qué riesgos de seguridad considerar en una primera versión.',
			},
			{
				title: 'Infraestructura y despliegue',
				text: 'Publicar una aplicación para que otras personas la usen: hosting, dominio, certificados y monitoreo básico. Muchas ideas se quedan en la computadora de quien las imagina.',
			},
		],
		contributions: [
			{
				title: 'Programar una funcionalidad concreta',
				text: 'Ejemplo hipotético: alguien que sabe React podría construir la pantalla de registro de una herramienta educativa a cambio de feedback sobre su propio portafolio.',
			},
			{
				title: 'Asesorar en arquitectura o seguridad',
				text: 'Ejemplo hipotético: una persona con experiencia en backend podría revisar el diseño de una API y sugerir mejoras antes de que se escriba una sola línea de código.',
			},
			{
				title: 'Configurar despliegue y monitoreo',
				text: 'Ejemplo hipotético: quien domina DevOps podría dejar una aplicación publicada con un dominio y alertas básicas, documentando el proceso para quien continúe el proyecto.',
			},
		],
		faqs: [
			{
				question: '¿Necesito saber programar para participar?',
				answer: 'No. Una idea tecnológica también necesita validación, diseño, pruebas, documentación y usuarios dispuestos a dar feedback. Lo técnico es una parte del proyecto, no la única forma de colaborar.',
			},
			{
				question: '¿Qué pasa si mi idea ya usa una tecnología específica?',
				answer: 'Explica qué stack elegiste y por qué. Eso ayuda a que se acerquen personas con el conocimiento adecuado y a recibir sugerencias realistas en lugar de opiniones genéricas.',
			},
			{
				question: '¿Cómo protegemos el código o la propiedad de la idea?',
				answer: 'Acuerda por escrito antes de empezar quién conserva los derechos sobre el código, cómo se usa lo producido y bajo qué licencia se publica. Evita compartir información sensible sin un acuerdo claro.',
			},
		],
		related: ['diseno-y-productos', 'emprendimientos-y-negocios', 'fabricacion-y-prototipos'],
	},
	{
		slug: 'diseno-y-productos',
		label: 'Diseño y desarrollo de productos',
		eyebrow: 'TEMA 02 · DISEÑO Y DESARROLLO DE PRODUCTOS',
		title: 'Diseño y desarrollo de productos',
		plainTitle: 'Diseño de productos',
		description:
			'Diseño de productos en hago.click: investigación, prototipado y experiencia de usuario. Descubre qué se necesita y cómo colaborar en cada etapa del proyecto.',
		intro:
			'Productos físicos y digitales que alguien va a usar. Aquí caben desde una interfaz hasta un objeto cotidiano rediseñado. Lo central no es el dibujo, sino entender a quién va dirigido, qué problema resuelve y cómo se valida antes de invertir en producirlo.',
		needs: [
			{
				title: 'Investigación de usuarios',
				text: 'Entender a quién va dirigido el producto: qué necesita, qué le frustra y qué ya probó. Sin esto, se diseñan soluciones para un problema que nadie tiene.',
			},
			{
				title: 'Prototipado y diseño visual',
				text: 'Convertir una idea en algo que se puede ver y tocar: wireframes, maquetas o un render. Un prototipo comunica mejor que mil palabras y permite corregir temprano.',
			},
			{
				title: 'Validación y pruebas',
				text: 'Poner el prototipo frente a personas reales y observar dónde falla. La iteración a partir de pruebas honestas es lo que separa un producto de un ejercicio de estilo.',
			},
		],
		contributions: [
			{
				title: 'Diseñar una interfaz o maqueta',
				text: 'Ejemplo hipotético: un diseñador podría armar los wireframes de una aplicación de salud a cambio de un caso de estudio documentado para su portafolio.',
			},
			{
				title: 'Realizar entrevistas a usuarios',
				text: 'Ejemplo hipotético: alguien con formación en investigación podría entrevistar a cinco personas del público objetivo y entregar un resumen de hallazgos accionables.',
			},
			{
				title: 'Probar y documentar problemas',
				text: 'Ejemplo hipotético: una persona podría usar un prototipo durante una semana y registrar con detalle qué le confundió, qué le sirvió y qué abandonó.',
			},
		],
		faqs: [
			{
				question: '¿Diseño de productos es solo para cosas digitales?',
				answer: 'No. Un producto puede ser una app, un objeto físico, un servicio o una combinación. Lo que comparten es la intención de resolver una necesidad real para alguien concreto.',
			},
			{
				question: '¿Qué debo tener listo antes de pedir colaboración?',
				answer: 'Una descripción del problema, una idea de quién lo sufre y, si es posible, un boceto. No hace falta un diseño terminado: la colaboración puede empezar justamente por definirlo.',
			},
			{
				question: '¿Cómo evito diseñar algo que nadie quiere?',
				answer: 'Valida temprano y con honestidad. Muestra el prototipo a personas del público objetivo, escucha lo que no funciona y ajusta antes de invertir en desarrollo o producción.',
			},
		],
		related: ['tecnologia-y-software', 'fabricacion-y-prototipos', 'emprendimientos-y-negocios'],
	},
	{
		slug: 'fabricacion-y-prototipos',
		label: 'Fabricación y prototipos',
		eyebrow: 'TEMA 03 · FABRICACIÓN Y PROTOTIPOS',
		title: 'Fabricación y prototipos',
		plainTitle: 'Fabricación y prototipos',
		description:
			'Fabricación y prototipos en hago.click: modelado, materiales, impresión 3D y ensamble. Qué ideas se desarrollan, qué recursos se necesitan y cómo colaborar.',
		intro:
			'Objetos físicos que se pueden tocar: desde una pieza a medida hasta un dispositivo funcional. Este ámbito conecta ideas con talleres, materiales y manos que saben transformar un plano en algo real. Un primer prototipo físico cambia por completo la conversación.',
		needs: [
			{
				title: 'Modelado y planos técnicos',
				text: 'Pasar de una idea a un modelo que se pueda fabricar: diseño 3D, planos con medidas o esquemas de ensamble. Sin esto, fabricar es adivinar.',
			},
			{
				title: 'Materiales y procesos',
				text: 'Elegir qué material conviene y cómo trabajarlo: impresión 3D, corte láser, carpintería o mecanizado. Cada proceso tiene costos, tolerancias y limitaciones propias.',
			},
			{
				title: 'Acceso a taller y equipos',
				text: 'Contar con el espacio y las herramientas para fabricar: fresadora, impresora, soldador o simplemente una mesa adecuada. El acceso físico suele ser el cuello de botella.',
			},
		],
		contributions: [
			{
				title: 'Modelar una pieza en 3D',
				text: 'Ejemplo hipotético: alguien que usa software CAD podría modelar una pieza de repuesto para un dispositivo agrícola a cambio de créditos o reconocimiento en el proyecto.',
			},
			{
				title: 'Fabricar un primer prototipo',
				text: 'Ejemplo hipotético: un taller con impresora 3D podría producir tres iteraciones de una funda protectora y entregar las piezas para que quien tenga la idea las pruebe.',
			},
			{
				title: 'Asesorar en materiales y costos',
				text: 'Ejemplo hipotético: una persona con experiencia en manufactura podría revisar un diseño y señalar qué material abarata la producción sin perder resistencia.',
			},
		],
		faqs: [
			{
				question: '¿Necesito un diseño técnico profesional para empezar?',
				answer: 'No, pero sí una descripción clara con medidas aproximadas y el uso previsto. Con eso, quien sabe modelar puede traducir tu idea en un plano fabricable.',
			},
			{
				question: '¿Qué pasa si no tengo acceso a un taller?',
				answer: 'Eso es justo lo que la colaboración puede resolver: alguien con taller o equipos puede fabricar tu prototipo. Sé claro sobre qué necesitas y qué puedes ofrecer a cambio.',
			},
			{
				question: '¿Quién se queda con los prototipos físicos?',
				answer: 'Acuerda antes de fabricar quién recibe las piezas, quién cubre los materiales y qué uso se les dará. La claridad sobre lo físico evita malentendidos costosos.',
			},
		],
		related: ['diseno-y-productos', 'agricultura-y-sostenibilidad', 'proyectos-sociales'],
	},
	{
		slug: 'emprendimientos-y-negocios',
		label: 'Emprendimientos y pequeños negocios',
		eyebrow: 'TEMA 04 · EMPRENDIMIENTOS Y PEQUEÑOS NEGOCIOS',
		title: 'Emprendimientos y pequeños negocios',
		plainTitle: 'Emprendimientos',
		description:
			'Emprendimientos y pequeños negocios en hago.click: modelo, finanzas, marketing y operaciones. Qué ideas se desarrollan, qué se necesita y cómo colaborar.',
		intro:
			'Iniciativas que buscan sostenerse económicamente: un emprendimiento, un comercio pequeño o un servicio independiente. Aquí lo importante no es la idea brillante, sino el modelo que la hace viable, los clientes que la validan y la disciplina para ejecutar paso a paso.',
		needs: [
			{
				title: 'Modelo de negocio y propuesta de valor',
				text: 'Definir a quién se vende, qué se cobra y por qué alguien elegiría esto. Un modelo claro responde esas preguntas antes de gastar en lo que no se necesita.',
			},
			{
				title: 'Finanzas y precios',
				text: 'Calcular costos, márgenes y punto de equilibrio. Muchos emprendimientos fallan no por la idea, sino por no saber cuánto les cuesta vender.',
			},
			{
				title: 'Marketing y primeros clientes',
				text: 'Llegar a las primeras personas dispuestas a pagar y aprender de ellas. La validación comercial con clientes reales vale más que cualquier plan teórico.',
			},
		],
		contributions: [
			{
				title: 'Acompañar la estrategia comercial',
				text: 'Ejemplo hipotético: alguien con experiencia en ventas podría revisar la propuesta de un emprendimiento y sugerir cómo presentarla a sus primeros clientes.',
			},
			{
				title: 'Ordenar finanzas básicas',
				text: 'Ejemplo hipotético: una persona con formación contable podría armar una planilla de costos y márgenes que muestre si el negocio es viable hoy.',
			},
			{
				title: 'Crear identidad y comunicación',
				text: 'Ejemplo hipotético: un diseñador podría definir un nombre, un logo y un mensaje claro a cambio de mostrar el caso en su portafolio.',
			},
		],
		faqs: [
			{
				question: '¿hago.click es para negocios ya constituidos?',
				answer: 'No necesariamente. Sirve tanto para una idea que todavía no tiene clientes como para un pequeño negocio que busca crecer o resolver un reto concreto. Lo importante es tener un objetivo claro.',
			},
			{
				question: '¿Se garantizan clientes o inversionistas?',
				answer: 'No. hago.click conecta personas y conocimientos, pero no garantiza resultados comerciales. Lo que sí puede ofrecer es orientación para validar y dar pasos más firmes.',
			},
			{
				question: '¿Una colaboración puede ser remunerada?',
				answer: 'Sí. Puede ser voluntaria, un intercambio o un servicio pagado. Lo esencial es acordar alcance, tiempos y condiciones económicas antes de empezar.',
			},
		],
		related: ['tecnologia-y-software', 'diseno-y-productos', 'proyectos-sociales'],
	},
	{
		slug: 'proyectos-sociales',
		label: 'Proyectos sociales y comunitarios',
		eyebrow: 'TEMA 05 · PROYECTOS SOCIALES Y COMUNITARIOS',
		title: 'Proyectos sociales y comunitarios',
		plainTitle: 'Proyectos comunitarios',
		description:
			'Proyectos sociales y comunitarios en hago.click: educación, salud, ambiente y comunidad. Qué ideas se desarrollan, qué se necesita y cómo colaborar.',
		intro:
			'Iniciativas que buscan un impacto colectivo: educación, salud comunitaria, cultura, ambiente o inclusión. No siempre buscan lucro, pero sí claridad: a quién ayudan, qué cambio persiguen y cómo medir si están funcionando. La intención no basta; la estructura la hace sostenible.',
		needs: [
			{
				title: 'Diagnóstico y definición del impacto',
				text: 'Identificar qué problema comunitario se aborda y para quién. Un buen diagnóstico evita diseñar soluciones que no responden a una necesidad real del grupo.',
			},
			{
				title: 'Organización y voluntarios',
				text: 'Coordinar personas, repartir tareas y sostener el compromiso en el tiempo. Muchos proyectos sociales se detienen no por falta de intención, sino de coordinación.',
			},
			{
				title: 'Comunicación y gestión de recursos',
				text: 'Explicar el proyecto a la comunidad y a posibles aliados, y gestionar donaciones, espacios o apoyos. La visibilidad y la transparencia atraen colaboración.',
			},
		],
		contributions: [
			{
				title: 'Acompañar el diseño del proyecto',
				text: 'Ejemplo hipotético: alguien con experiencia en gestión social podría ayudar a definir objetivos medibles y un cronograma realista para una iniciativa educativa.',
			},
			{
				title: 'Diseñar materiales de comunicación',
				text: 'Ejemplo hipotético: una persona podría crear una presentación clara del proyecto para compartir con una organización aliada o posibles voluntarios.',
			},
			{
				title: 'Coordinar voluntarios o actividades',
				text: 'Ejemplo hipotético: alguien con habilidades de organización podría liderar una jornada de trabajo comunitario y documentar lo aprendido para la siguiente.',
			},
		],
		faqs: [
			{
				question: '¿Los proyectos sociales tienen que ser sin fines de lucro?',
				answer: 'No necesariamente. Un proyecto puede tener impacto social y sostenerse económicamente. Lo que define el ámbito es la intención de generar un beneficio colectivo, no la estructura legal.',
			},
			{
				question: '¿Cómo sé si mi proyecto realmente ayuda?',
				answer: 'Define desde el inicio qué cambio esperas y cómo lo medirás. Habla con las personas a quienes va dirigido antes de diseñar la solución y revisa los resultados con honestidad.',
			},
			{
				question: '¿Puedo colaborar si no tengo experiencia social?',
				answer: 'Sí. Los proyectos necesitan comunicación, diseño, tecnología, organización y muchas otras habilidades. La voluntad de escuchar a la comunidad es tan importante como la experiencia.',
			},
		],
		related: ['agricultura-y-sostenibilidad', 'emprendimientos-y-negocios', 'diseno-y-productos'],
	},
	{
		slug: 'agricultura-y-sostenibilidad',
		label: 'Agricultura y sostenibilidad',
		eyebrow: 'TEMA 06 · AGRICULTURA Y SOSTENIBILIDAD',
		title: 'Agricultura y sostenibilidad',
		plainTitle: 'Agricultura sostenible',
		description:
			'Agricultura y sostenibilidad en hago.click: cultivo, riego, energía y residuos. Qué ideas se desarrollan, qué recursos se necesitan y cómo colaborar.',
		intro:
			'Producción de alimentos, cuidado del entorno y uso responsable de recursos. Aquí caben desde un sistema de riego hasta una iniciativa de compostaje o energía solar. Lo central es el equilibrio entre lo viable hoy y lo sostenible en el tiempo, considerando el contexto local.',
		needs: [
			{
				title: 'Conocimiento técnico del cultivo',
				text: 'Saber qué sembrar, cuándo y cómo, según el suelo y el clima. El conocimiento agrícola local es insustituible y suele ser el punto de partida de cualquier mejora.',
			},
			{
				title: 'Tecnología y herramientas apropiadas',
				text: 'Riego, sensores, herramientas manuales o energía. La tecnología útil no es la más avanzada, sino la que funciona con los recursos y el contexto disponibles.',
			},
			{
				title: 'Gestión de recursos y residuos',
				text: 'Optimizar agua, energía y materiales, y reducir desperdicios. La sostenibilidad también es eficiencia: hacer más con menos sin agotar lo disponible.',
			},
		],
		contributions: [
			{
				title: 'Asesorar en técnicas de cultivo',
				text: 'Ejemplo hipotético: una persona con experiencia agrícola podría orientar a un proyecto de huerta comunitaria sobre qué variedades convienen en su clima.',
			},
			{
				title: 'Diseñar un sistema de riego o energía',
				text: 'Ejemplo hipotético: alguien con formación técnica podría dimensionar un sistema de riego por goteo de bajo costo para una pequeña parcela.',
			},
			{
				title: 'Acompañar la gestión ambiental',
				text: 'Ejemplo hipotético: una persona podría ayudar a medir el consumo de agua o a diseñar un plan de compostaje para un espacio compartido.',
			},
		],
		faqs: [
			{
				question: '¿Necesito terreno o equipo para participar?',
				answer: 'No. Una idea de sostenibilidad puede empezar con conocimiento, planificación o gestión. Quien tiene terreno puede no saber cómo optimizarlo, y ahí entra la colaboración.',
			},
			{
				question: '¿Las soluciones tienen que ser tecnológicas?',
				answer: 'No. A veces la mejor solución es una práctica tradicional bien aplicada o un cambio simple en el manejo de recursos. La tecnología es un medio, no un fin.',
			},
			{
				question: '¿Cómo sé si una práctica es realmente sostenible?',
				answer: 'Mide el uso de recursos antes y después, y observa el impacto en el tiempo. Lo sostenible se sostiene: económica, social y ambientalmente, no solo en el discurso.',
			},
		],
		related: ['proyectos-sociales', 'fabricacion-y-prototipos', 'emprendimientos-y-negocios'],
	},
];

export const categoryMap: Record<string, Category> = Object.fromEntries(
	categories.map(category => [category.slug, category]),
);

export function getCategory(slug: string): Category | undefined {
	return categoryMap[slug];
}

