export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$50',
      description: 'Essential items to get started',
    },
    {
      name: 'Standard',
      price: '$120',
      description: 'Most popular plan with extra features',
      popular: true,
    },
    {
      name: 'Premium',
      price: '$250',
      description: 'All-inclusive plan for enthusiasts',
    },
  ];

  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-neutral-900">Pricing Plans</h2>
        <p className="mt-4 text-neutral-600">
          Choose a plan that suits your needs
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border border-neutral-200 p-6 shadow-sm transition hover:shadow-md ${
                plan.popular ? 'border-neutral-300 bg-neutral-100' : 'bg-white'
              }`}
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-3xl font-bold text-neutral-900">
                {plan.price}
              </p>
              <p className="mt-4 text-neutral-600">{plan.description}</p>
              <button className="mt-6 w-full rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
