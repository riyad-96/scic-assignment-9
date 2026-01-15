'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export default function ItemDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch('/api/items')
      .then((res) => res.json())
      .then((items: Item[]) => {
        const found = items.find((i) => i.id === id);
        setItem(found || null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="mt-20 text-center">Loading item...</p>;
  if (!item)
    return (
      <div className="mt-20 text-center">
        <p className="text-red-500">Item not found.</p>
        <button
          onClick={() => router.push('/items')}
          className="mt-4 rounded bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
        >
          Back to Items
        </button>
      </div>
    );

  return (
    <div className="px-4">
      <div className="mx-auto max-w-6xl py-12">
        <Link
          href="/items"
          className="mb-6 inline-block text-neutral-600 hover:text-neutral-900"
        >
          ← Back to Items
        </Link>

        <h1 className="mb-4 text-3xl font-bold">{item.name}</h1>
        <p className="mb-6 text-neutral-700">{item.description}</p>
        <p className="text-xl font-semibold">Price: ${item.price}</p>
      </div>
    </div>
  );
}
