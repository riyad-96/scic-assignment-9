export default function Features() {
  const features = [
    {
      title: 'High Quality',
      description:
        'All items are carefully selected for durability and performance.',
      icon: '🛠️',
    },
    {
      title: 'Affordable Prices',
      description: 'Clear pricing and great deals for everyone.',
      icon: '💰',
    },
    {
      title: 'Fast Delivery',
      description: 'Get your items delivered quickly and safely.',
      icon: '🚚',
    },
    {
      title: '24/7 Support',
      description: 'We are here to help whenever you need it.',
      icon: '📞',
    },
  ];

  return (
    <section className="bg-neutral-50 px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-neutral-900">Our Features</h2>
        <p className="mt-4 text-neutral-600">
          What makes our items and service special
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
