export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alice Johnson',
      comment: 'Great selection of items and super fast delivery!',
      avatar: '👩‍💼',
    },
    {
      name: 'Bob Smith',
      comment: 'Affordable prices and excellent customer support.',
      avatar: '👨‍💻',
    },
    {
      name: 'Clara Lee',
      comment: 'I love the quality of the products. Highly recommend!',
      avatar: '🧑‍🎤',
    },
  ];

  return (
    <section className="bg-neutral-50 px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-neutral-900">Testimonials</h2>
        <p className="mt-4 text-neutral-600">Hear from our happy customers</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-4xl">{t.avatar}</div>
              <p className="mt-4 text-neutral-700">{t.comment}</p>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                {t.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
