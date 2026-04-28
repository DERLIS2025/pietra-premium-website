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
    name: 'Cuarzo Beige',
    slug: 'cuarzo-beige',
    category: 'Cuarzos',
    badge: 'Elegante',
    image: '/materiales/cuarzo-beige.jpg',
    gallery: ['/materiales/cuarzo-beige.jpg'],
    description:
      'Cuarzo de tono beige, ideal para cocinas, baños y espacios que buscan una estética cálida, limpia y moderna.',
    benefits: ['Tono cálido', 'Fácil limpieza', 'Ideal para interiores'],
    uses: ['Mesadas de cocina', 'Vanitorys', 'Islas', 'Revestimientos interiores'],
    maintenance: ['Limpiar con paño suave', 'Evitar abrasivos', 'No usar productos ácidos fuertes'],
    specs: [
      { label: 'Categoría', value: 'Cuarzo' },
      { label: 'Uso recomendado', value: 'Interior' },
      { label: 'Terminación', value: 'Pulido' },
    ],
    faq: [
      {
        q: '¿Sirve para cocina?',
        a: 'Sí, es una opción moderna y práctica para mesadas de cocina.',
      },
    ],
  },
  {
    name: 'Cuarzo Gris',
    slug: 'cuarzo-gris',
    category: 'Cuarzos',
    badge: 'Moderno',
    image: '/materiales/cuarzo-gris.jpg',
    gallery: ['/materiales/cuarzo-gris.jpg'],
    description:
      'Cuarzo gris de estética sobria y contemporánea, recomendado para proyectos modernos y ambientes minimalistas.',
    benefits: ['Look moderno', 'Bajo mantenimiento', 'Versátil'],
    uses: ['Cocinas modernas', 'Baños', 'Mesadas corporativas'],
    maintenance: ['Limpieza diaria simple', 'Evitar esponjas metálicas', 'Secar luego de limpiar'],
    specs: [
      { label: 'Categoría', value: 'Cuarzo' },
      { label: 'Uso recomendado', value: 'Interior residencial/comercial' },
      { label: 'Terminación', value: 'Pulido' },
    ],
    faq: [
      {
        q: '¿Combina con muebles oscuros?',
        a: 'Sí, funciona muy bien con muebles negros, madera y tonos neutros.',
      },
    ],
  },
  {
    name: 'Cuarzo Negro',
    slug: 'cuarzo-negro',
    category: 'Cuarzos',
    badge: 'Premium',
    image: '/materiales/cuarzo-negro.jpg',
    gallery: ['/materiales/cuarzo-negro.jpg'],
    description:
      'Cuarzo negro para espacios sofisticados que buscan alto contraste, elegancia y presencia visual.',
    benefits: ['Alto contraste', 'Estética premium', 'Fácil limpieza'],
    uses: ['Islas de cocina', 'Mesadas modernas', 'Barras', 'Baños premium'],
    maintenance: ['Limpiar con paño húmedo', 'Evitar químicos agresivos', 'Usar productos neutros'],
    specs: [
      { label: 'Categoría', value: 'Cuarzo' },
      { label: 'Uso recomendado', value: 'Interior' },
      { label: 'Estilo', value: 'Moderno / Premium' },
    ],
    faq: [
      {
        q: '¿Se nota mucho la suciedad?',
        a: 'Como todo tono oscuro, requiere limpieza frecuente para mantener su presencia visual.',
      },
    ],
  },
  {
    name: 'Cuarzo Rojo',
    slug: 'cuarzo-rojo',
    category: 'Cuarzos',
    badge: 'Diseño especial',
    image: '/materiales/cuarzo-rojo.jpg',
    gallery: ['/materiales/cuarzo-rojo.jpg'],
    description:
      'Cuarzo rojo para proyectos con personalidad, ideal para barras, detalles decorativos y espacios comerciales.',
    benefits: ['Color distintivo', 'Alto impacto visual', 'Ideal para detalles'],
    uses: ['Barras', 'Locales comerciales', 'Detalles decorativos', 'Mesadas especiales'],
    maintenance: ['Limpieza suave', 'Evitar abrasivos', 'No exponer a químicos fuertes'],
    specs: [
      { label: 'Categoría', value: 'Cuarzo' },
      { label: 'Uso recomendado', value: 'Interior' },
      { label: 'Estilo', value: 'Decorativo / Comercial' },
    ],
    faq: [
      {
        q: '¿Es recomendable para toda una cocina?',
        a: 'Puede usarse, aunque suele funcionar mejor como acento o pieza protagonista.',
      },
    ],
  },
  {
    name: 'Cuarzo Verde Claro',
    slug: 'cuarzo-verde-claro',
    category: 'Cuarzos',
    badge: 'Diseño suave',
    image: '/materiales/cuarzo-verde-claro.jpg',
    gallery: ['/materiales/cuarzo-verde-claro.jpg'],
    description:
      'Cuarzo verde claro para ambientes frescos, luminosos y con una estética diferente sin perder elegancia.',
    benefits: ['Tono fresco', 'Diseño diferenciado', 'Fácil mantenimiento'],
    uses: ['Baños', 'Cocinas claras', 'Vanitorys', 'Detalles interiores'],
    maintenance: ['Limpieza con productos neutros', 'Evitar ácidos', 'Secar con paño suave'],
    specs: [
      { label: 'Categoría', value: 'Cuarzo' },
      { label: 'Uso recomendado', value: 'Interior' },
      { label: 'Estilo', value: 'Suave / Contemporáneo' },
    ],
    faq: [
      {
        q: '¿Funciona en baños?',
        a: 'Sí, es una alternativa interesante para baños luminosos y modernos.',
      },
    ],
  },
  {
    name: 'Granito Blanco Dallas',
    slug: 'granito-blanco-dallas',
    category: 'Granitos',
    badge: 'Más buscado',
    image: '/materiales/granito-blanco-dallas.jpg',
    gallery: ['/materiales/granito-blanco-dallas.jpg'],
    description:
      'Granito claro con movimiento natural, muy utilizado en mesadas de cocina por su equilibrio entre estética y resistencia.',
    benefits: ['Alta resistencia', 'Tono claro', 'Uso versátil'],
    uses: ['Mesadas de cocina', 'Islas', 'Baños', 'Alzadas'],
    maintenance: ['Limpieza con paño húmedo', 'Sellado recomendado', 'Evitar golpes en cantos'],
    specs: [
      { label: 'Categoría', value: 'Granito' },
      { label: 'Uso recomendado', value: 'Interior y exterior cubierto' },
      { label: 'Terminación', value: 'Pulido' },
    ],
    faq: [
      {
        q: '¿Es resistente para cocina?',
        a: 'Sí, es una de las opciones más usadas por su resistencia y estética.',
      },
    ],
  },
  {
    name: 'Granito Blanco Di Capri',
    slug: 'granito-blanco-di-capri',
    category: 'Granitos',
    badge: 'Elegante',
    image: '/materiales/granito-blanco-di-capri.jpg',
    gallery: ['/materiales/granito-blanco-di-capri.jpg'],
    description:
      'Granito blanco de apariencia elegante, ideal para proyectos que buscan luminosidad y durabilidad.',
    benefits: ['Luminoso', 'Durable', 'Atemporal'],
    uses: ['Cocinas', 'Baños', 'Mesadas residenciales'],
    maintenance: ['Limpieza diaria simple', 'Sellado según uso', 'Evitar abrasivos fuertes'],
    specs: [
      { label: 'Categoría', value: 'Granito' },
      { label: 'Uso recomendado', value: 'Mesadas y revestimientos' },
      { label: 'Terminación', value: 'Pulido' },
    ],
    faq: [
      {
        q: '¿Tiene variación natural?',
        a: 'Sí, como todo granito, cada placa puede tener variaciones de veta y tono.',
      },
    ],
  },
  {
    name: 'Granito Blanco Itaúnas',
    slug: 'granito-blanco-itaunas',
    category: 'Granitos',
    badge: 'Clásico',
    image: '/materiales/granito-blanco-itaunas.jpg',
    gallery: ['/materiales/granito-blanco-itaunas.jpg'],
    description:
      'Granito blanco clásico, resistente y funcional para cocinas, baños y superficies de uso diario.',
    benefits: ['Resistente', 'Clásico', 'Versátil'],
    uses: ['Mesadas de cocina', 'Baños', 'Revestimientos'],
    maintenance: ['Paño húmedo', 'Producto neutro', 'Sellado recomendado'],
    specs: [
      { label: 'Categoría', value: 'Granito' },
      { label: 'Uso recomendado', value: 'Interior / Exterior cubierto' },
      { label: 'Terminación', value: 'Pulido' },
    ],
    faq: [
      {
        q: '¿Es buena opción para presupuestos equilibrados?',
        a: 'Sí, suele ser una alternativa práctica y resistente.',
      },
    ],
  },
  {
    name: 'Granito Café Imperial',
    slug: 'granito-cafe-imperial',
    category: 'Granitos',
    badge: 'Cálido',
    image: '/materiales/granito-cafe-imperial.jpg',
    gallery: ['/materiales/granito-cafe-imperial.jpg'],
    description:
      'Granito de tono café, ideal para ambientes cálidos, quinchos y cocinas con madera o tonos tierra.',
    benefits: ['Tono cálido', 'Alta resistencia', 'Ideal quinchos'],
    uses: ['Quinchos', 'Cocinas', 'Barras', 'Parrillas'],
    maintenance: ['Limpieza simple', 'Sellado recomendado', 'Evitar impactos fuertes'],
    specs: [
      { label: 'Categoría', value: 'Granito' },
      { label: 'Uso recomendado', value: 'Quinchos y cocinas' },
      { label: 'Resistencia', value: 'Alta' },
    ],
    faq: [
      {
        q: '¿Sirve para quincho?',
        a: 'Sí, es una opción resistente y visualmente cálida para quinchos.',
      },
    ],
  },
  {
    name: 'Granito Gris Corumbá',
    slug: 'granito-gris-corumba',
    category: 'Granitos',
    badge: 'Funcional',
    image: '/materiales/granito-gris-corumba.jpg',
    gallery: ['/materiales/granito-gris-corumba.jpg'],
    description:
      'Granito gris resistente y práctico para superficies de alto uso, ideal para proyectos funcionales.',
    benefits: ['Muy resistente', 'Práctico', 'Fácil combinación'],
    uses: ['Mesadas', 'Lavaderos', 'Cocinas', 'Áreas de trabajo'],
    maintenance: ['Limpieza regular', 'Evitar ácidos fuertes', 'Sellado según necesidad'],
    specs: [
      { label: 'Categoría', value: 'Granito' },
      { label: 'Uso recomendado', value: 'Alto tránsito' },
      { label: 'Terminación', value: 'Pulido' },
    ],
    faq: [
      {
        q: '¿Es fácil de mantener?',
        a: 'Sí, es una opción práctica para uso diario.',
      },
    ],
  },
  {
    name: 'Granito Negro San Gabriel',
    slug: 'granito-negro-san-gabriel',
    category: 'Granitos',
    badge: 'Más consultado',
    image: '/materiales/granito-negro-san-gabriel.jpg',
    gallery: ['/materiales/granito-negro-san-gabriel.jpg'],
    description:
      'Granito de alta resistencia y estética sobria, ideal para mesadas de cocina, quinchos y superficies de alto uso.',
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
    badge: 'Premium natural',
    image: '/materiales/granito-verde-ubatuba.jpg',
    gallery: ['/materiales/granito-verde-ubatuba.jpg'],
    description:
      'Granito verde oscuro de gran presencia, recomendado para proyectos elegantes y superficies resistentes.',
    benefits: ['Tono profundo', 'Alta resistencia', 'Estética natural'],
    uses: ['Cocinas', 'Quinchos', 'Barras', 'Mesadas premium'],
    maintenance: ['Limpieza con producto neutro', 'Sellado recomendado', 'Evitar golpes de canto'],
    specs: [
      { label: 'Categoría', value: 'Granito' },
      { label: 'Uso recomendado', value: 'Interior y exterior cubierto' },
      { label: 'Estilo', value: 'Natural premium' },
    ],
    faq: [
      {
        q: '¿Combina con madera?',
        a: 'Sí, funciona muy bien con madera, negro, blanco y tonos arena.',
      },
    ],
  },
  {
    name: 'Mármol Blanco',
    slug: 'marmol-blanco',
    category: 'Mármoles',
    badge: 'Elegancia clásica',
    image: '/materiales/marmol-blanco.jpg',
    gallery: ['/materiales/marmol-blanco.jpg'],
    description:
      'Mármol blanco de estética elegante y luminosa, ideal para interiores, baños y revestimientos premium.',
    benefits: ['Elegante', 'Luminoso', 'Atemporal'],
    uses: ['Baños', 'Revestimientos', 'Vanitorys', 'Detalles decorativos'],
    maintenance: ['Evitar productos ácidos', 'Limpieza delicada', 'Sellado recomendado'],
    specs: [
      { label: 'Categoría', value: 'Mármol' },
      { label: 'Uso recomendado', value: 'Interior' },
      { label: 'Terminación', value: 'Pulido / apomazado' },
    ],
    faq: [
      {
        q: '¿Es delicado?',
        a: 'El mármol requiere más cuidado que el granito, especialmente ante ácidos y manchas.',
      },
    ],
  },
  {
    name: 'Mármol Travertino',
    slug: 'marmol-travertino',
    category: 'Mármoles',
    badge: 'Atemporal',
    image: '/materiales/marmol-travertino.jpg',
    gallery: ['/materiales/marmol-travertino.jpg'],
    description:
      'Mármol travertino de textura cálida y natural, ideal para baños, revestimientos y proyectos con carácter boutique.',
    benefits: ['Tono cálido', 'Textura natural', 'Diseño atemporal'],
    uses: ['Baños', 'Revestimientos', 'Vanitorys', 'Interiores premium'],
    maintenance: ['Limpieza suave', 'Evitar ácidos', 'Sellado profesional recomendado'],
    specs: [
      { label: 'Categoría', value: 'Mármol' },
      { label: 'Uso recomendado', value: 'Interior' },
      { label: 'Estilo', value: 'Natural / Boutique' },
    ],
    faq: [
      {
        q: '¿Es apto para baños?',
        a: 'Sí, es muy utilizado en baños y revestimientos interiores.',
      },
    ],
  },
  {
    name: 'Marrón Emperador',
    slug: 'marron-emperador',
    category: 'Mármoles',
    badge: 'Sofisticado',
    image: '/materiales/marron-emperador.jpg',
    gallery: ['/materiales/marron-emperador.jpg'],
    description:
      'Material de tono marrón intenso y elegante, recomendado para interiores con personalidad y acabados de alto impacto.',
    benefits: ['Color profundo', 'Estética sofisticada', 'Ideal interiores'],
    uses: ['Baños', 'Revestimientos', 'Mesadas decorativas', 'Detalles premium'],
    maintenance: ['Limpieza delicada', 'Evitar ácidos', 'Sellado recomendado'],
    specs: [
      { label: 'Categoría', value: 'Mármol' },
      { label: 'Uso recomendado', value: 'Interior' },
      { label: 'Estilo', value: 'Clásico premium' },
    ],
    faq: [
      {
        q: '¿Dónde luce mejor?',
        a: 'Funciona muy bien en baños, revestimientos y ambientes con iluminación cálida.',
      },
    ],
  },
  {
    name: 'Neolith Calacatta',
    slug: 'neolith-calacatta',
    category: 'Neolith',
    badge: 'Arquitectos eligen',
    image: '/materiales/neolith-calacatta.jpg',
    gallery: ['/materiales/neolith-calacatta.jpg'],
    description:
      'Superficie ultracompacta con estética Calacatta, ideal para proyectos modernos de alta exigencia técnica.',
    benefits: ['Ultracompacto', 'Alta resistencia', 'Bajo mantenimiento'],
    uses: ['Mesadas premium', 'Frentes de cocina', 'Revestimientos', 'Grandes formatos'],
    maintenance: ['Limpieza no abrasiva', 'No requiere encerado', 'Mínima absorción'],
    specs: [
      { label: 'Categoría', value: 'Neolith' },
      { label: 'Uso recomendado', value: 'Interior y exterior' },
      { label: 'Resistencia', value: 'Alta' },
    ],
    faq: [
      {
        q: '¿Sirve para proyectos modernos?',
        a: 'Sí, es una excelente opción para diseños contemporáneos y de alto rendimiento.',
      },
    ],
  },
  {
    name: 'Piedra Traslúcida',
    slug: 'piedra-traslucida',
    category: 'Especiales',
    badge: 'Diseño exclusivo',
    image: '/materiales/piedra-traslucida.jpg',
    gallery: ['/materiales/piedra-traslucida.jpg'],
    description:
      'Piedra traslúcida para proyectos exclusivos con iluminación, barras, revestimientos decorativos y detalles de alto impacto.',
    benefits: ['Efecto iluminado', 'Diseño exclusivo', 'Alto impacto visual'],
    uses: ['Barras iluminadas', 'Revestimientos decorativos', 'Recepciones', 'Detalles premium'],
    maintenance: ['Limpieza suave', 'Evitar abrasivos', 'Instalación técnica especializada'],
    specs: [
      { label: 'Categoría', value: 'Piedra especial' },
      { label: 'Uso recomendado', value: 'Interior decorativo' },
      { label: 'Aplicación', value: 'Con iluminación posterior' },
    ],
    faq: [
      {
        q: '¿Se puede iluminar?',
        a: 'Sí, está pensada para aplicaciones decorativas con luz posterior.',
      },
    ],
  },
];

export const getMaterialBySlug = (slug: string) =>
  highlightedMaterials.find((material) => material.slug === slug);
