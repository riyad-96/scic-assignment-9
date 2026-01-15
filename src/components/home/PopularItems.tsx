import Image from 'next/image';

export default function PopularItems() {
  const items = [
    {
      id: '1',
      name: 'Laptop',
      price: 1200,
      image: '/laptop.png',
    },
    {
      id: '2',
      name: 'Smartphone',
      price: 600,
      image: '/smartphone.png',
    },
    {
      id: '3',
      name: 'Headphones',
      price: 150,
      image: '/headphone.png',
    },
    {
      id: '4',
      name: 'Backpack',
      price: 80,
      image: '/backpack.png',
    },
  ];

  return (
    <section className="bg-neutral-50 px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-neutral-900">Popular Items</h2>
        <p className="mt-4 text-neutral-600">
          Check out some of our most loved products
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <Image
                src={item.image}
                alt={item.name}
                width="700"
                height="300"
                className="h-48 w-full rounded object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                {item.name}
              </h3>
              <p className="mt-2 text-neutral-700">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
