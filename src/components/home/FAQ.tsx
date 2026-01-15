export default function FAQ() {
  const faqs = [
    {
      question: 'How long does delivery take?',
      answer:
        'Delivery usually takes 3-5 business days depending on your location.',
    },
    {
      question: 'Can I return an item?',
      answer: 'Yes, we offer a 14-day return policy for unused items.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Absolutely! Our support team is available 24/7 via email and phone.',
    },
    {
      question: 'Are prices inclusive of taxes?',
      answer: 'Yes, all prices shown include applicable taxes.',
    },
  ];

  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-neutral-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-neutral-600">
          Answers to the most common questions
        </p>

        <div className="mt-12 space-y-6 text-left sm:mx-auto sm:max-w-2xl">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-lg border border-neutral-200 bg-neutral-50 p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-neutral-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
