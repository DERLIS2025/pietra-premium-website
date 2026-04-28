import { trustBadges } from '@/data/trustBadges';

export function TrustBadges() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      <div className="grid gap-3 rounded-2xl border border-pietra-sand/30 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((badge) => (
          <article key={badge.title} className="rounded-xl bg-pietra-ivory p-4">
            <h3 className="font-semibold text-pietra-black">{badge.title}</h3>
            <p className="mt-1 text-sm text-pietra-black/70">
              {badge.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}