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
  {
    label: 'Uso recomendado',
    value: 'Mesadas, revestimientos y proyectos a medida',
  },
  { label: 'Cobertura', value: 'Asunción y Gran Asunción, Paraguay' },
];