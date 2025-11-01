// components/PrivacyCards.tsx
import React from 'react';
import { Shield, Lock, Users, Share2, Baby, Mail } from 'lucide-react';

export default function PrivacyCards() {
  return (
    <section className="max-w-5xl mx-auto px-6 ">
      <div className="p-8 md:p-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-black">
          Privacy Policy
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-paleblue rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-semiblueviolet shadow-sm mr-3">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Information We Collect</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We collect personal info (name, email), academic details, usage data, and payment data processed by third parties.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-paleblue rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-semiblueviolet shadow-sm mr-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Why We Collect It</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              To provide services, match students with tutors, process payments, and improve user experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-paleblue rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-semiblueviolet shadow-sm mr-3">
                <Lock className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Data Security</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We use industry-standard security measures. No online system is 100% secure.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-paleblue rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-semiblueviolet shadow-sm mr-3">
                <Share2 className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Third Parties</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We may share data with trusted providers (payment, analytics). We do not sell personal data.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-paleblue rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-semiblueviolet shadow-sm mr-3">
                <Baby className="w-6 h-6 text-rose-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Children</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Users under 13 must have parental consent.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-paleblue rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-semiblueviolet shadow-sm mr-3">
                <Mail className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Contact</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
             <a className="text-Blueviolet hover:underline font-medium "href='mailto:tutor4study24x7@gmail.com'> tutor4study24x7@gmail.com</a>  for data access, corrections, or deletion.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
