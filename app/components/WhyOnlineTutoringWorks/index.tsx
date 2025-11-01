import React from "react";
import { Clock, UserCheck, Home, BookOpen, Cast } from "lucide-react";

const WhyOnlineTutoringWorks = () => {
  return (
    <section className="pt-10 mt-7 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
          Why <span className="text-Blueviolet">Online Tutoring Works</span>
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-600 mb-12">
          The convenience of online tutoring offers so many benefits. Here&apos;s why
          students like you choose Tutor4Study
        </p>

        {/* Unified responsive grid */}
        <div className="grid lg:grid-cols-3 gap-6 ">
          {/* Card 1 */}
          <div className="bg-semiblueviolet p-6 rounded-lg shadow-lg flex flex-col h-full">
            <div className="flex items-start mb-4">
              <Clock className="text-indigo-600 text-3xl mr-4 flex-shrink-0" />
              <h3 className="text-xl font-bold text-gray-800">
                Flexibility to Fit Your <br className="lg:block hidden"/>Schedule
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              Our tutors are available 24/7, so you can get the help you need
              when it fits your schedule—whether that&apos;s late at night before a
              big exam or on weekends.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-semiblueviolet p-6 rounded-lg shadow-lg flex flex-col h-full">
            <div className="flex items-start mb-4">
              <UserCheck className="text-indigo-600 text-3xl mr-4 flex-shrink-0" />
              <h3 className="text-xl font-bold text-gray-800">
                Personalized Learning <br className="lg:block hidden"/>Experience
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              We understand that every student learns differently. That&apos;s why we
              match you with tutors who tailor their approach to your unique
              needs. Whether you need a quick refresher or ongoing support,
              we&apos;ve got you covered.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-semiblueviolet p-6 rounded-lg shadow-lg flex flex-col h-full">
            <div className="flex items-start mb-4">
              <Home className="text-indigo-600 text-3xl mr-4 flex-shrink-0" />
              <h3 className="text-xl font-bold text-gray-800">
                Learn from the Comfort of<br className="lg:block hidden"/> Home
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              No need to commute or deal with the hassle of finding a tutor
              nearby. With Tutor4Study, you can learn from the comfort of your
              home, on your own terms. It&apos;s the ultimate convenience!
            </p>
          </div>
        
          {/* Card 4 – centered on lg */}
          <div className="bg-semiblueviolet p-6 rounded-lg shadow-lg flex flex-col h-full ">
            <div className="flex items-start mb-4">
              <BookOpen className="text-indigo-600 text-3xl mr-4 flex-shrink-0" />
              <h3 className="text-xl font-bold text-gray-800">
                Access to Expert <br className="lg:block hidden"/>Tutors
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              All of our tutors are highly qualified professionals with
              experience in their fields. Whether it&apos;s advanced calculus or
              creative writing, you&apos;ll be learning from experts who can explain
              even the most complex concepts in an easy-to-understand way.
            </p>
          </div>

          {/* Card 5 – centered on lg */}
          <div className="bg-semiblueviolet p-6 rounded-lg shadow-lg flex flex-col h-full ">
            <div className="flex items-start mb-4">
              <Cast className="text-indigo-600 text-3xl mr-4 flex-shrink-0" />
              <h3 className="text-xl font-bold text-gray-800">
                Engaging, Interactive<br className="lg:block hidden"/> Learning
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              Our platform is designed to make online learning interactive and
              engaging. You can share your screen, use a virtual whiteboard, and
              receive real-time feedback. Learning has never been more dynamic.
            </p>
          </div>
     
        </div>
      </div>
    </section>
  );
};

export default WhyOnlineTutoringWorks;