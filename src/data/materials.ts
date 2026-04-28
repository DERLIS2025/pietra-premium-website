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

export const highlightedMaterials: Material[] = [
  {
    name: 'Cuarzo Calacatta Supreme',
    slug: 'cuarzo-calacatta-supreme',
    category: 'Cuarzos',
    badge: 'Top venta',
    image: '/materiales/cuarzo-calacatta.jpg',
    gallery: [
      '/materiales/cuarzo-calacatta.jpg',
      '/materiales/cuarzo-calacatta-2.jpg',
      '/materiales/cuarzo-calacatta-3.jpg',
    ],
    description:
      'Acabado de veta sofisticada para cocinas y baños contemporáneos que buscan presencia y practicidad.',
    benefits: ['No poroso', 'Fácil limpieza', 'Look italiano'],
    uses: ['Mesadas de cocina', 'Islas', 'Vanitorys premium'],
    maintenance: [
      'Limpieza con paño suave',
      'Evitar abrasivos extremos',
      'Sellado profesional recomendado',
    ],
    specs: [
      { label: 'Espesor recomendado', value: '20 mm / 30 mm' },
      { label: 'Terminación', value: 'Pulido premium' },
      { label: 'Aplicación', value: 'Interior residencial/comercial' },
    ],
    faq: [
      {
        q: '¿Se mancha fácilmente?',
        a: 'No, su baja porosidad ayuda a evitar manchas de uso diario.',
      },
      {
        q: '¿Sirve para isla completa?',
        a: 'Sí, evaluamos medidas y uniones para un resultado estético.',
      },
    ],
  },
  {
    name: 'Granito Negro Absoluto',
    slug: 'granito-negro-absoluto',
    category: 'Granitos',
    badge: 'Alta demanda',
    image: '/materiales/granito-negro.jpg',
    gallery: [
      '/materiales/granito-negro.jpg',
      '/materiales/granito-negro-2.jpg',
      '/materiales/granito-negro-3.jpg',
    ],
    description:
      'Superficie de alta resistencia para quinchos y cocinas de alto tránsito con estética sobria.',
    benefits: ['Máxima dureza', 'Ideal quinchos', 'Durabilidad premium'],
    uses: ['Mesadas de quincho', 'Parrillas', 'Alzadas resistentes'],
    maintenance: [
      'Limpieza simple',
      'Recomendación de sellado anual',
      'Evitar golpes de canto',
    ],
    specs: [
      { label: 'Espesor recomendado', value: '20 mm / 30 mm' },
      { label: 'Resistencia térmica', value: 'Alta' },
      { label: 'Aplicación', value: 'Interior y exterior cubierto' },
    ],
    faq: [
      {
        q: '¿Resiste calor de cocina?',
        a: 'Sí, ofrece muy buen desempeño térmico para uso habitual.',
      },
      {
        q: '¿Pierde brillo?',
        a: 'Con mantenimiento adecuado conserva su estética por años.',
      },
    ],
  },
  {
    name: 'Mármol Travertino Ivory',
    slug: 'marmol-travertino-ivory',
    category: 'Mármoles',
    badge: 'Edición premium',
    image: '/materiales/travertino-ivory.jpg',
    gallery: [
      '/materiales/travertino-ivory.jpg',
      '/materiales/travertino-ivory-2.jpg',
      '/materiales/travertino-ivory-3.jpg',
    ],
    description:
      'Textura cálida y elegante para proyectos con carácter boutique y diseño atemporal.',
    benefits: ['Tono cálido', 'Acabado elegante', 'Diseño atemporal'],
    uses: ['Baños master', 'Revestimientos decorativos', 'Mobiliario fijo'],
    maintenance: [
      'Limpieza delicada',
      'Sellado recomendado',
      'Evitar productos ácidos',
    ],
    specs: [
      { label: 'Espesor recomendado', value: '20 mm' },
      { label: 'Terminación', value: 'Pulido / apomazado' },
      { label: 'Aplicación', value: 'Interior' },
    ],
    faq: [
      {
        q: '¿Es apto para cocina?',
        a: 'Sí, con uso y mantenimiento guiado por nuestro equipo.',
      },
      {
        q: '¿Tiene variaciones?',
        a: 'Sí, cada placa tiene vetas únicas que realzan el diseño.',
      },
    ],
  },
  {
    name: 'Neolith Estatuario',
    slug: 'neolith-estatuario',
    category: 'Neolith',
    badge: 'Arquitectos eligen',
    image: '/materiales/neolith-estatuario.jpg',
    gallery: [
      '/materiales/neolith-estatuario.jpg',
      '/materiales/neolith-estatuario-2.jpg',
      '/materiales/neolith-estatuario-3.jpg',
    ],
    description:
      'Superficie ultracompacta para proyectos de alta exigencia técnica y estética internacional.',
    benefits: ['Ultra compacto', 'Resiste calor', 'Bajo mantenimiento'],
    uses: ['Mesadas premium', 'Frentes de cocina', 'Revestimientos de diseño'],
    maintenance: ['Limpieza no abrasiva', 'Sin encerados', 'Mínima absorción'],
    specs: [
      { label: 'Espesor recomendado', value: '12 mm / 20 mm' },
      { label: 'Resistencia UV', value: 'Alta' },
      { label: 'Aplicación', value: 'Interior y exterior' },
    ],
    faq: [
      {
        q: '¿Se puede usar en exterior?',
        a: 'Sí, es apto para fachadas y sectores expuestos.',
      },
      {
        q: '¿Sirve para grandes formatos?',
        a: 'Sí, definimos juntas y modulación según el proyecto.',
      },
    ],
  },
];

export const getMaterialBySlug = (slug: string) =>
  highlightedMaterials.find((material) => material.slug === slug);