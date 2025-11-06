// app/faq/page.tsx
import React from 'react';

const faqs = [
  { q: 'What is Tutor4Study?', a: 'Tutor4Study is an online learning platform that connects students with qualified tutors for personalized, one-on-one academic support.' },
  { q: 'Is there a free trial?', a: 'Yes — we offer a free trial session for new users.' },
 { q: 'How do I enroll in a subject?', a: 'Simply contact us via email or through the contact form on our website. Our team will help you choose the right subject and guide you through the enrollment process.' },
  { q: 'What subjects are available?', a: 'Math, Science, English, Test Prep (SAT/ACT/GRE/GMAT), AP exams, and more.' },
   { q: 'How do I contact Tutor4Study?', a: 'You can reach us by emailing tutor4study24x7@gmail.com or by filling out the contact form on our website.' },
];

export default function FAQPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
