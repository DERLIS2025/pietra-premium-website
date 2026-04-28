export type Project = {
  name: string;
  environment: string;
  material: string;
  summary: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: 'Mesada de cocina contemporánea',
    environment: 'Cocina',
    material: 'Cuarzo / Granito',
    summary: 'Trabajo de cocina con mesada a medida, terminación limpia y estética moderna.',
    image: '/proyectos/cocina/1-trabajo-cocina.jpg',
  },
  {
    name: 'Cocina con isla central',
    environment: 'Cocina',
    material: 'Superficie premium',
    summary: 'Proyecto con isla protagonista, pensado para uso diario y diseño de alto impacto.',
    image: '/proyectos/cocina/2-trabajo-cocina.jpg',
  },
  {
    name: 'Mesada clara para cocina familiar',
    environment: 'Cocina',
    material: 'Cuarzo claro',
    summary: 'Superficie clara para una cocina luminosa, práctica y fácil de mantener.',
    image: '/proyectos/cocina/3-trabajo-cocina.jpg',
  },
  {
    name: 'Cocina premium con terminación integrada',
    environment: 'Cocina',
    material: 'Granito / Cuarzo',
    summary: 'Diseño funcional con terminaciones cuidadas para un ambiente moderno.',
    image: '/proyectos/cocina/4-trabajo-cocina.jpg',
  },
  {
    name: 'Vanitory de baño en piedra natural',
    environment: 'Baño',
    material: 'Mármol / Granito',
    summary: 'Proyecto de baño con superficie elegante y terminación personalizada.',
    image: '/proyectos/banos/1-trabajo-bano.jpg',
  },
  {
    name: 'Baño moderno con revestimiento premium',
    environment: 'Baño',
    material: 'Mármol',
    summary: 'Trabajo de baño con estética limpia, detalles cuidados y material protagonista.',
    image: '/proyectos/banos/2-trabajo-bano.jpg',
  },
  {
    name: 'Vanitory suspendido a medida',
    environment: 'Baño',
    material: 'Superficie premium',
    summary: 'Solución a medida para baño con diseño elegante y uso funcional.',
    image: '/proyectos/banos/3-trabajo-bano.jpg',
  },
  {
    name: 'Baño boutique con detalle en piedra',
    environment: 'Baño',
    material: 'Mármol / Piedra natural',
    summary: 'Ambiente de baño con presencia visual y terminación de nivel premium.',
    image: '/proyectos/banos/4-trabajo-bano.jpg',
  },
  {
    name: 'Quincho con mesada de granito',
    environment: 'Quincho',
    material: 'Granito',
    summary: 'Mesada resistente para parrilla, zona húmeda y espacio social.',
    image: '/proyectos/quinchos/IMG-20260224-WA0014.jpg',
  },
  {
    name: 'Barra de quincho premium',
    environment: 'Quincho',
    material: 'Granito oscuro',
    summary: 'Superficie resistente para reuniones, parrilla y uso intensivo.',
    image: '/proyectos/quinchos/IMG-20260224-WA0055.jpg',
  },
  {
    name: 'Quincho familiar con terminación resistente',
    environment: 'Quincho',
    material: 'Granito',
    summary: 'Proyecto pensado para durabilidad, fácil limpieza y presencia estética.',
    image: '/proyectos/quinchos/IMG-20260224-WA0056.jpg',
  },
  {
    name: 'Quincho moderno con superficie a medida',
    environment: 'Quincho',
    material: 'Granito / Piedra natural',
    summary: 'Mesada funcional para espacio social con terminación sobria y elegante.',
    image: '/proyectos/quinchos/IMG-20260224-WA0089.jpg',
  },
];

export const featuredProjects = projects.slice(0, 4);
