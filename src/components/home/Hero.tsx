import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white px-4">
      <div className="mx-auto max-w-6xl py-20 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Discover Quality Items,
          <span className="block text-neutral-700">Built for Everyday Use</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
          Browse a curated collection of products with clear pricing, detailed
          descriptions, and a smooth browsing experience.
        </p>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/items"
            className="rounded-md bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800"
          >
            View Items
          </Link>
        </div>
      </div>
    </section>
  );
}
