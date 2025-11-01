// components/TermsCards.tsx
import React from 'react';

export default function TermsCards() {
  const cards = [
    {
      heading: "1. Introduction",
      paragraph:
        "By accessing or using Tutor4Study’s website and services, you agree to these Terms & Conditions. If you do not agree, please do not use our services.",
    },
    {
      heading: "2. Services",
      paragraph:
        "Tutor4Study provides online tutoring via verified tutors. We may modify or discontinue services at any time.",
    },
    {
      heading: "3. Eligibility",
      paragraph:
        "Users must be at least 13 years old. Parents/guardians should authorize minors.",
    },
    {
      heading: "4. Payments & Refunds",
      paragraph:
        "Fees are charged per selected plan. Refunds are handled per our refund policy; completed sessions generally are non-refundable.",
    },
    {
      heading: "5. Conduct",
      paragraph:
        "Users must behave respectfully. Academic dishonesty or misuse of platform can lead to suspension.",
    },
    {
      heading: "6. Liability",
      paragraph:
        "Tutor4Study provides educational support and is not responsible for specific academic results.",
    },
    {
      heading: "7. Changes",
      paragraph:
        "We may update these terms. Continued use indicates acceptance.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white  rounded-xl p-8 0">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms & Conditions</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-paleblue rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                {card.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed">{card.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}