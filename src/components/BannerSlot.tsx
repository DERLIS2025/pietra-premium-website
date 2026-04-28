export function BannerSlot() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      <div className="overflow-hidden rounded-3xl border border-pietra-sand/30 bg-pietra-ivory">
        <div
          aria-label="Banner desktop"
          className="hidden h-44 w-full bg-pietra-sand/25 md:block"
          style={{
            backgroundImage: "url('/banners/banner-desktop.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div
          aria-label="Banner mobile"
          className="h-36 w-full bg-pietra-sand/25 md:hidden"
          style={{
            backgroundImage: "url('/banners/banner-mobile.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      </div>
    </section>
  );
}
