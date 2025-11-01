import React from "react";
import { UserPlus, Book, Calendar, BarChart, UserCheck } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">How It <span className="text-Blueviolet">Works</span></h2>
        <p className="max-w-4xl mx-auto text-center mb-10">At <strong>Tutor4Study</strong>, we make getting help easy, fast, and stress-free. Our streamlined process ensures that you can start learning in no time. Here&lsquo;s how it works</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-semiblueviolet p-6 rounded-lg shadow-lg">
            <div className=" flex flex-col items-center mb-4 gap-3">
              <UserPlus className="text-indigo-600 text-3xl mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Sign Up for Free</h3>
            </div>
            <p className="text-gray-600 text-center">
              Create a free account to get started. Fill out a quick survey to tell us about your academic needs and goals.
            </p>
          </div>

          <div className="bg-semiblueviolet p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center mb-4 gap-3">
              <UserCheck className="text-indigo-600 text-3xl mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Choose Your Subject & Tutor</h3>
            </div>
            <p className="text-gray-600 text-center">
              Browse our network of expert tutors who specialize in a wide range of subjects. You can filter by subject, grade level, or tutor experience to find the best fit for your needs.
            </p>
          </div>

          <div className="bg-semiblueviolet p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center mb-4 gap-3">
              <Calendar className="text-indigo-600 text-3xl mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Schedule a Session</h3>
            </div>
            <p className="text-gray-600 text-center">
              Pick a time that works for you from our flexible scheduling options. Whether it&lsquo;s a one-off session or ongoing help, you can schedule it at your convenience—no need to leave your home.
            </p>
          </div>

          <div className="bg-semiblueviolet p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center mb-4 gap-3">
              <Book className="text-indigo-600 text-3xl mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Learn and Improve</h3>
            </div>
            <p className="text-gray-600 text-center">
              Our online platform allows you to interact with your tutor in real-time through video, shared screens, and interactive whiteboards. You&lsquo;ll receive immediate feedback, personalized tips, and explanations that make complex topics easy to understand.
            </p>
          </div>

          <div className="bg-semiblueviolet p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center mb-4 gap-3">
              <BarChart className="text-indigo-600 text-3xl mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Track Your Progress</h3>
            </div>
            <p className="text-gray-600 text-center">
              After each session, you&lsquo;ll receive a summary of what was covered, as well as recommendations for further improvement. We help you stay on track with your academic goals, one step at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
