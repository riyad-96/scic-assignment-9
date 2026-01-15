'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="mt-20 text-center">Loading items...</p>;

  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="mb-8 text-3xl font-bold text-neutral-900">Items</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/items/${item.id}`}
              className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-neutral-900">
                {item.name}
              </h2>
              <p className="mt-2 text-neutral-700">{item.description}</p>
              <p className="mt-4 font-bold">${item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
