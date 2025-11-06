// app/faq/page.tsx
import React from 'react';

const faqs = [
  { q: 'What is Tutor4Study?', a: 'Tutor4Study is an online educational platform that helps students learn various subjects through expert tutors and personalized learning sessions.' },
  { q: 'How do I enroll in a subject?', a: 'Simply contact us via email or through the contact form on our website. Our team will help you choose the right subject and guide you through the enrollment process.' },
  { q: 'What subjects do you offer?', a: 'We offer a wide range of subjects including Math, Science, English & Language Arts,Test Preparation. Contact us for the complete subject list.' },
  { q: 'Can I take more than one subject?', a: 'Yes, you can enroll in multiple subjects based on your learning goals and schedule.' },
  { q: 'Do you offer one-on-one tutoring?', a: 'Yes — we provide personalized, one-on-one sessions so each student receives focused attention and support.' },
  { q: 'Who are the tutors?', a: 'Our tutors are qualified educators with verified academic backgrounds and strong teaching experience in their respective subjects.' },
  { q: 'What age groups do you teach?', a: 'We teach students of all grade levels — from primary and secondary school to college and adult learners.' },
  { q: 'Do you provide learning materials?', a: 'Yes — tutors provide digital notes, practice worksheets, and assignments to help students learn effectively.' },
  { q: 'Can I reschedule a class?', a: 'Yes — classes can be rescheduled by contacting our support team at least 24 hours before your session.' },
  { q: 'Is there group learning available?', a: 'Yes — we also offer small group sessions for certain subjects if you prefer a collaborative learning environment.' },
  { q: 'Do you offer exam preparation?', a: 'Absolutely — we provide tutoring for school exams, board exams, and competitive tests like SAT, ACT, GRE, and more.' },
  { q: 'Do you provide progress updates?', a: 'Yes — tutors regularly share feedback and progress reports to help parents and students track learning outcomes.' },
  { q: 'How do I contact Tutor4Study?', a: 'You can reach us by emailing tutor4study24x7@gmail.com or by filling out the contact form on our website.' },
  { q: 'What happens after I contact you for enrollment?', a: 'After you reach out, our team will discuss your learning needs, suggest suitable subjects or tutors, and help you get started with your first class.' },
];

export default function FAQPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 mt-10">
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
