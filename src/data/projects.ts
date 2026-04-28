export type Project = {
  name: string;
  environment: string;
  material: string;
  summary: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: 'Mesada de cocina en cuarzo beige',
    environment: 'Cocina',
    material: 'Cuarzo Beige',
    summary:
      'Mesada a medida con terminación premium para cocina familiar de alto uso.',
    image: '/proyectos/cocina/1-trabajo-cocina.jpg',
  },
  {
    name: 'Isla de cocina en granito blanco dallas',
    environment: 'Cocina',
    material: 'Granito Blanco Dallas',
    summary:
      'Proyecto con isla central y alzada continua para integrar estética y funcionalidad.',
    image: '/proyectos/cocina/2-trabajo-cocina.jpg',
  },
  {
    name: 'Cocina lineal en granito negro san gabriel',
    environment: 'Cocina',
    material: 'Granito Negro San Gabriel',
    summary:
      'Superficie sobria y resistente para cocinas contemporáneas en Asunción.',
    image: '/proyectos/cocina/3-trabajo-cocina.jpg',
  },
  {
    name: 'Mesada de cocina en neolith calacatta',
    environment: 'Cocina',
    material: 'Neolith Calacatta',
    summary: 'Diseño minimalista con look marmolado y alta exigencia técnica.',
    image: '/proyectos/cocina/4-trabajo-cocina.jpg',
  },
  {
    name: 'Vanitory de baño en mármol blanco',
    environment: 'Baño',
    material: 'Mármol Blanco',
    summary: 'Trabajo de baño con terminación elegante y composición limpia.',
    image: '/proyectos/banos/1-trabajo-bano.jpg',
  },
  {
    name: 'Baño premium en mármol travertino',
    environment: 'Baño',
    material: 'Mármol Travertino',
    summary: 'Revestimiento y mesada coordinados para un resultado boutique.',
    image: '/proyectos/banos/2-trabajo-bano.jpg',
  },
  {
    name: 'Vanitory suspendido en cuarzo gris',
    environment: 'Baño',
    material: 'Cuarzo Gris',
    summary:
      'Proyecto moderno con superficie de fácil limpieza para uso diario.',
    image: '/proyectos/banos/3-trabajo-bano.jpg',
  },
  {
    name: 'Mesada de baño en marrón emperador',
    environment: 'Baño',
    material: 'Marrón Emperador',
    summary: 'Acabado cálido y sofisticado para ambientes de alta gama.',
    image: '/proyectos/banos/4-trabajo-bano.jpg',
  },
  {
    name: 'Quincho con mesada de granito negro',
    environment: 'Quincho',
    material: 'Granito Negro San Gabriel',
    summary: 'Mesada resistente para sector parrilla y barra social.',
    image: '/proyectos/quinchos/IMG-20260224-WA0014.jpg',
  },
  {
    name: 'Barra de quincho en granito verde ubatuba',
    environment: 'Quincho',
    material: 'Granito Verde Ubatuba',
    summary:
      'Superficie durable para uso intensivo en espacios exteriores cubiertos.',
    image: '/proyectos/quinchos/IMG-20260224-WA0055.jpg',
  },
  {
    name: 'Mesada de parrilla en granito gris corumbá',
    environment: 'Quincho',
    material: 'Granito Gris Corumbá',
    summary: 'Proyecto técnico para quincho con excelente resistencia térmica.',
    image: '/proyectos/quinchos/IMG-20260224-WA0056.jpg',
  },
  {
    name: 'Quincho social con cubierta de granito',
    environment: 'Quincho',
    material: 'Granito Blanco Itaúnas',
    summary: 'Solución a medida para ampliar superficie de trabajo y reunión.',
    image: '/proyectos/quinchos/IMG-20260224-WA0089.jpg',
  },
];

export const featuredProjects = projects.slice(0, 4);