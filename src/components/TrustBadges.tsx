import { trustBadges } from '@/data/trustBadges';

export function TrustBadges() {
  return (
    <section className="mx-auto mt-8 grid max-w-7xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4">
      {trustBadges.map((badge) => (
        <article key={badge.title} className="rounded-2xl border border-pietra-sand/40 bg-white p-4">
          <h3 className="font-semibold text-pietra-black">{badge.title}</h3>
          <p className="mt-1 text-sm text-pietra-black/70">{badge.description}</p>
        </article>
      ))}
    </section>
  );
}
