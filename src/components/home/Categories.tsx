import Image from 'next/image';

export default function Categories() {
  const categories = [
    {
      name: 'Electronics',
      image: '/electronic.png',
    },
    {
      name: 'Books',
      image: '/book.png',
    },
    {
      name: 'Clothing',
      image: '/clothing.png',
    },
    {
      name: 'Home & Kitchen',
      image: '/home-kitchen.png',
    },
    {
      name: 'Sports',
      image: '/sports.png',
    },
    {
      name: 'Toys',
      image: '/toys.png',
    },
  ];

  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-neutral-900">
          Shop by Category
        </h2>
        <p className="mt-4 text-neutral-600">
          Explore our wide range of product categories
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="overflow-hidden rounded-lg border border-neutral-200 shadow-sm transition hover:shadow-md"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={'700'}
                height={'300'}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
