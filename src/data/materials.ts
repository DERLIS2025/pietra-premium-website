export type Material = {
  name: string;
  slug: string;
  category: string;
  badge: string;
  image: string;
  gallery: string[];
  description: string;
  benefits: string[];
  uses: string[];
  maintenance: string[];
  specs: Array<{ label: string; value: string }>;
  faq: Array<{ q: string; a: string }>;
};

const baseSpecs = (category: string) => [
  { label: 'Categoría', value: category },
  { label: 'Uso recomendado', value: 'Mesadas, revestimientos y proyectos a medida' },
  { label: 'Cobertura', value: 'Asunción y Gran Asunción, Paraguay' },
];

export const highlightedMaterials: Material[] = [
  {
    name: 'Cuarzo Beige',
    slug: 'cuarzo-beige',
    category: 'Cuarzos',
    badge: 'Top venta',
    image: '/materiales/cuarzo-beige.jpg',
    gallery: ['/materiales/cuarzo-beige.jpg'],
    description:
      'Cuarzo beige para mesadas de cocina en Asunción con estética cálida, fácil limpieza y excelente comportamiento para uso diario en hogares y departamentos premium.',
    benefits: ['Baja porosidad', 'Tono cálido y versátil', 'Ideal para alto uso'],
    uses: ['Mesadas de cocina', 'Islas', 'Barra desayunador'],
    maintenance: ['Limpiar con paño húmedo', 'Evitar abrasivos', 'No apoyar calor directo extremo'],
    specs: baseSpecs('Cuarzo'),
    faq: [{ q: '¿El cuarzo beige se mancha?', a: 'Con limpieza básica diaria mantiene su apariencia y resiste muy bien manchas comunes.' }],
  },
  {
    name: 'Cuarzo Gris',
    slug: 'cuarzo-gris',
    category: 'Cuarzos',
    badge: 'Más consultado',
    image: '/materiales/cuarzo-gris.jpg',
    gallery: ['/materiales/cuarzo-gris.jpg'],
    description:
      'Cuarzo gris para cocinas modernas en Paraguay, recomendado para quienes buscan una superficie neutra, elegante y de mantenimiento simple.',
    benefits: ['Look contemporáneo', 'Fácil limpieza', 'Buena estabilidad de color'],
    uses: ['Mesadas de cocina', 'Alzadas', 'Vanitorys'],
    maintenance: ['Limpieza suave', 'Evitar químicos agresivos', 'Usar tabla para cortes'],
    specs: baseSpecs('Cuarzo'),
    faq: [{ q: '¿Sirve para cocina familiar?', a: 'Sí, es uno de los materiales más elegidos por su equilibrio entre diseño y practicidad.' }],
  },
  {
    name: 'Cuarzo Negro',
    slug: 'cuarzo-negro',
    category: 'Cuarzos',
    badge: 'Premium',
    image: '/materiales/cuarzo-negro.jpg',
    gallery: ['/materiales/cuarzo-negro.jpg'],
    description:
      'Cuarzo negro con presencia premium para mesadas de cocina y quinchos interiores, ideal para proyectos de arquitectura con alto contraste.',
    benefits: ['Acabado sobrio', 'Superficie homogénea', 'Gran presencia visual'],
    uses: ['Mesadas de cocina', 'Barras', 'Recepciones'],
    maintenance: ['Limpiar con microfibra', 'Evitar estropajos metálicos', 'Mantener seco tras limpieza'],
    specs: baseSpecs('Cuarzo'),
    faq: [{ q: '¿El cuarzo negro pierde brillo?', a: 'No, con mantenimiento correcto conserva su acabado por muchos años.' }],
  },
  {
    name: 'Cuarzo Rojo',
    slug: 'cuarzo-rojo',
    category: 'Cuarzos',
    badge: 'Edición especial',
    image: '/materiales/cuarzo-rojo.jpg',
    gallery: ['/materiales/cuarzo-rojo.jpg'],
    description:
      'Cuarzo rojo para propuestas comerciales o residenciales con personalidad, ideal en barras, detalles y acentos de diseño interior.',
    benefits: ['Color distintivo', 'Aporta identidad', 'Fácil de mantener'],
    uses: ['Barras', 'Detalles decorativos', 'Mobiliario fijo'],
    maintenance: ['Limpieza periódica', 'No usar solventes', 'Evitar impacto en cantos'],
    specs: baseSpecs('Cuarzo'),
    faq: [{ q: '¿Se puede combinar con madera?', a: 'Sí, combina muy bien con maderas claras y tonos neutros.' }],
  },
  {
    name: 'Cuarzo Verde Claro',
    slug: 'cuarzo-verde-claro',
    category: 'Cuarzos',
    badge: 'Diseño boutique',
    image: '/materiales/cuarzo-verde-claro.jpg',
    gallery: ['/materiales/cuarzo-verde-claro.jpg'],
    description:
      'Cuarzo verde claro para proyectos de interiorismo premium que buscan diferenciación con una paleta suave y elegante.',
    benefits: ['Color suave', 'Aporta originalidad', 'Superficie compacta'],
    uses: ['Vanitorys', 'Barras', 'Mesadas decorativas'],
    maintenance: ['Paño húmedo', 'Evitar cloro concentrado', 'Proteger de golpes'],
    specs: baseSpecs('Cuarzo'),
    faq: [{ q: '¿Es apto para baño?', a: 'Sí, es ideal para baños por su baja absorción y fácil higiene.' }],
  },
  {
    name: 'Granito Blanco Dallas',
    slug: 'granito-blanco-dallas',
    category: 'Granitos',
    badge: 'Top cocina',
    image: '/materiales/granito-blanco-dallas.jpg',
    gallery: ['/materiales/granito-blanco-dallas.jpg'],
    description:
      'Granito blanco dallas para mesadas de cocina en Paraguay, muy elegido por su resistencia, textura natural y versatilidad en estilos modernos y clásicos.',
    benefits: ['Alta resistencia', 'Apariencia natural', 'Durabilidad a largo plazo'],
    uses: ['Mesadas de cocina', 'Quinchos', 'Revestimientos'],
    maintenance: ['Sellado periódico recomendado', 'Limpieza no abrasiva', 'Secar derrames intensos'],
    specs: baseSpecs('Granito'),
    faq: [{ q: '¿Sirve para quincho?', a: 'Sí, su resistencia lo hace excelente para zonas de parrilla y alto tránsito.' }],
  },
  {
    name: 'Granito Blanco Di Capri',
    slug: 'granito-blanco-di-capri',
    category: 'Granitos',
    badge: 'Recomendado',
    image: '/materiales/granito-blanco-di-capri.jpg',
    gallery: ['/materiales/granito-blanco-di-capri.jpg'],
    description:
      'Granito blanco di capri con veta sutil para mesadas de cocina en Asunción, ideal para ampliar visualmente ambientes y ganar luminosidad.',
    benefits: ['Ilumina espacios', 'Gran dureza', 'Combina con múltiples estilos'],
    uses: ['Cocinas', 'Islas', 'Lavaderos premium'],
    maintenance: ['Limpieza diaria simple', 'Sellado recomendado', 'No usar productos ácidos'],
    specs: baseSpecs('Granito'),
    faq: [{ q: '¿Es buena opción para departamentos?', a: 'Sí, aporta amplitud visual y excelente resistencia para uso cotidiano.' }],
  },
  {
    name: 'Granito Blanco Itaúnas',
    slug: 'granito-blanco-itaunas',
    category: 'Granitos',
    badge: 'Alta demanda',
    image: '/materiales/granito-blanco-itaunas.jpg',
    gallery: ['/materiales/granito-blanco-itaunas.jpg'],
    description:
      'Granito blanco itaunas para mesadas de granito en Paraguay, con estética clara y comportamiento técnico confiable para hogares y proyectos comerciales.',
    benefits: ['Superficie robusta', 'Buena relación estética-resistencia', 'Material noble'],
    uses: ['Mesadas', 'Alzadas', 'Barras para quincho'],
    maintenance: ['Paño húmedo', 'Sellado anual', 'Evitar impactos de canto'],
    specs: baseSpecs('Granito'),
    faq: [{ q: '¿El itaúnas combina con muebles oscuros?', a: 'Sí, genera un contraste elegante y muy solicitado en cocinas premium.' }],
  },
  {
    name: 'Granito Café Imperial',
    slug: 'granito-cafe-imperial',
    category: 'Granitos',
    badge: 'Elegancia clásica',
    image: '/materiales/granito-cafe-imperial.jpg',
    gallery: ['/materiales/granito-cafe-imperial.jpg'],
    description:
      'Granito café imperial para mesadas y barras con tono profundo, perfecto para propuestas cálidas y sofisticadas en marmolería en Asunción.',
    benefits: ['Color intenso', 'Muy resistente', 'Aporta calidez'],
    uses: ['Mesadas de cocina', 'Barras', 'Muebles fijos'],
    maintenance: ['Limpiar sin abrasivos', 'Sellado recomendado', 'Secar superficies tras uso'],
    specs: baseSpecs('Granito'),
    faq: [{ q: '¿Sirve para cocinas de uso diario?', a: 'Sí, está preparado para alto uso y conserva muy bien su estética.' }],
  },
  {
    name: 'Granito Gris Corumbá',
    slug: 'granito-gris-corumba',
    category: 'Granitos',
    badge: 'Arquitectos eligen',
    image: '/materiales/granito-gris-corumba.jpg',
    gallery: ['/materiales/granito-gris-corumba.jpg'],
    description:
      'Granito gris corumbá con look técnico y moderno para cocinas, quinchos y trabajos en granito con enfoque arquitectónico.',
    benefits: ['Color neutro premium', 'Alta resistencia mecánica', 'Versátil para interior y exterior cubierto'],
    uses: ['Mesadas de cocina', 'Quinchos', 'Revestimientos'],
    maintenance: ['Limpieza regular', 'Sellado según uso', 'Evitar ácidos fuertes'],
    specs: baseSpecs('Granito'),
    faq: [{ q: '¿Es recomendable para quinchos?', a: 'Sí, es una alternativa muy sólida para zonas de parrilla.' }],
  },
  {
    name: 'Granito Negro San Gabriel',
    slug: 'granito-negro-san-gabriel',
    category: 'Granitos',
    badge: 'Más consultado',
    image: '/materiales/granito-negro-san-gabriel.jpg',
    gallery: ['/materiales/granito-negro-san-gabriel.jpg'],
    description:
      'Granito negro san gabriel para mesadas de cocina, quinchos y parrillas; una de las opciones más vendidas por su resistencia y estética sobria.',
    benefits: ['Alta resistencia', 'Ideal para quinchos', 'Fácil mantenimiento'],
    uses: ['Mesadas de cocina', 'Quinchos', 'Parrillas', 'Alzadas'],
    maintenance: ['Limpieza con paño húmedo', 'Evitar productos abrasivos', 'Sellado recomendado según uso'],
    specs: [
      { label: 'Categoría', value: 'Granito' },
      { label: 'Uso recomendado', value: 'Interior y exterior cubierto' },
      { label: 'Terminación', value: 'Pulido' },
    ],
    faq: [
      {
        q: '¿Sirve para cocina?',
        a: 'Sí, es uno de los materiales más usados para mesadas por su resistencia.',
      },
    ],
  },
  {
    name: 'Granito Verde Ubatuba',
    slug: 'granito-verde-ubatuba',
    category: 'Granitos',
    badge: 'Clásico durable',
    image: '/materiales/granito-verde-ubatuba.jpg',
    gallery: ['/materiales/granito-verde-ubatuba.jpg'],
    description:
      'Granito verde ubatuba para mesadas de cocina en Paraguay, reconocido por su gran vida útil y excelente desempeño en zonas húmedas.',
    benefits: ['Muy durable', 'Color profundo', 'Resiste uso intensivo'],
    uses: ['Mesadas', 'Bachas integradas', 'Quinchos'],
    maintenance: ['Limpieza suave', 'Sellado preventivo', 'Evitar golpes fuertes'],
    specs: baseSpecs('Granito'),
    faq: [{ q: '¿Funciona bien en cocinas abiertas?', a: 'Sí, su tono oscuro aporta elegancia y combina con distintos tipos de mobiliario.' }],
  },
  {
    name: 'Mármol Blanco',
    slug: 'marmol-blanco',
    category: 'Mármoles',
    badge: 'Premium clásico',
    image: '/materiales/marmol-blanco.jpg',
    gallery: ['/materiales/marmol-blanco.jpg'],
    description:
      'Mármol blanco para baños y revestimientos de mármol con estética atemporal, ideal para proyectos residenciales premium en Asunción.',
    benefits: ['Elegancia natural', 'Vetas únicas', 'Alta valoración estética'],
    uses: ['Vanitorys', 'Revestimientos', 'Detalles decorativos'],
    maintenance: ['Usar limpiador neutro', 'Sellado periódico', 'Evitar ácidos'],
    specs: baseSpecs('Mármol'),
    faq: [{ q: '¿Es apto para baño?', a: 'Sí, es una opción muy elegida para baños premium y revestimientos interiores.' }],
  },
  {
    name: 'Mármol Travertino',
    slug: 'marmol-travertino',
    category: 'Mármoles',
    badge: 'Proyecto boutique',
    image: '/materiales/marmol-travertino.jpg',
    gallery: ['/materiales/marmol-travertino.jpg'],
    description:
      'Mármol travertino para baños, recepciones y espacios de diseño con lenguaje arquitectónico cálido y sofisticado.',
    benefits: ['Textura distintiva', 'Acabado elegante', 'Gran presencia visual'],
    uses: ['Baños', 'Revestimientos', 'Mobiliario fijo'],
    maintenance: ['Limpieza delicada', 'Sellado recomendado', 'Evitar productos corrosivos'],
    specs: baseSpecs('Mármol'),
    faq: [{ q: '¿El travertino requiere cuidado especial?', a: 'Sí, se recomienda mantenimiento guiado para conservar su terminación natural.' }],
  },
  {
    name: 'Marrón Emperador',
    slug: 'marron-emperador',
    category: 'Mármoles',
    badge: 'Alta gama',
    image: '/materiales/marron-emperador.jpg',
    gallery: ['/materiales/marron-emperador.jpg'],
    description:
      'Mármol marrón emperador para ambientes premium que buscan contraste, calidez y una identidad elegante de alto nivel.',
    benefits: ['Color sofisticado', 'Veta decorativa', 'Ideal para diseños exclusivos'],
    uses: ['Vanitorys', 'Paneles decorativos', 'Cubiertas de mobiliario'],
    maintenance: ['Productos neutros', 'Sellado recomendado', 'Evitar golpes en bordes'],
    specs: baseSpecs('Mármol'),
    faq: [{ q: '¿Se recomienda para proyectos comerciales?', a: 'Sí, aporta mucha presencia en recepciones y espacios de atención al cliente.' }],
  },
  {
    name: 'Neolith Calacatta',
    slug: 'neolith-calacatta',
    category: 'Neolith',
    badge: 'Tecnología premium',
    image: '/materiales/neolith-calacatta.jpg',
    gallery: ['/materiales/neolith-calacatta.jpg'],
    description:
      'Neolith calacatta para proyectos de alta exigencia técnica, ideal para mesadas premium en Asunción con look de mármol y gran desempeño.',
    benefits: ['Alta resistencia térmica', 'Baja absorción', 'Estética contemporánea'],
    uses: ['Mesadas de cocina', 'Frentes', 'Revestimientos'],
    maintenance: ['Limpieza simple', 'No requiere encerado', 'Evitar impactos puntuales fuertes'],
    specs: baseSpecs('Neolith'),
    faq: [{ q: '¿Se puede usar en cocinas de uso intensivo?', a: 'Sí, es una superficie diseñada para exigencia técnica y mantenimiento simple.' }],
  },
  {
    name: 'Piedra Traslúcida',
    slug: 'piedra-traslucida',
    category: 'Piedra Traslúcida',
    badge: 'Diseño exclusivo',
    image: '/materiales/piedra-traslucida.jpg',
    gallery: ['/materiales/piedra-traslucida.jpg'],
    description:
      'Piedra traslúcida para barras iluminadas y revestimientos decorativos de alto impacto, perfecta para proyectos comerciales y residenciales premium.',
    benefits: ['Permite retroiluminación', 'Impacto visual', 'Acabado diferenciador'],
    uses: ['Barras', 'Paneles backlight', 'Detalles de autor'],
    maintenance: ['Limpieza no abrasiva', 'Cuidado en instalación', 'Evitar golpes de canto'],
    specs: baseSpecs('Piedra Traslúcida'),
    faq: [{ q: '¿Se puede iluminar desde atrás?', a: 'Sí, está pensada para proyectos con retroiluminación LED.' }],
  },
];

export const getMaterialBySlug = (slug: string) =>
  highlightedMaterials.find((material) => material.slug === slug);
