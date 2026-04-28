export function HeroPromo() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-5">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/banners/hero-cocina.jpg"
        />

        <img
          src="/banners/hero-cocina.jpg"
          alt="Marmolería Pietra - Mesadas premium para cocinas, baños y quinchos"
          className="h-[230px] w-full rounded-[28px] border border-pietra-sand/30 object-cover object-center shadow-sm md:h-auto md:aspect-[16/5] md:min-h-[320px]"
        />
      </picture>
    </section>
  );
}
