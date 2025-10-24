'use client';

import React, { useEffect, useState, useRef, FC } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import studyImg from '@/public/assets/3.jpg';
import { GraduationCap, Gem, Medal, Code } from 'lucide-react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const Bullseye = FaBullseye as React.FC<React.SVGProps<SVGSVGElement>>;
const Eye = FaEye as React.FC<React.SVGProps<SVGSVGElement>>;

// Dynamic import of Team component (carousel) client-side only
const Team = dynamic(() => import('@/app/components/Mentor/index'), { ssr: false });
// Dynamic import of Testimonial component (carousel) client-side only
const Testimonial = dynamic(() => import('@/app/components/Testimonials/index'), { ssr: false });
// Dynamic import of Intaerested component (carousel) client-side only
const Intaerested = dynamic(() => import('@/app/components/Newsletter/index'), { ssr: false });
// Dynamic import of Intaerested component (carousel) client-side only
const Partners = dynamic(() => import('@/app/components/Companies/index'), { ssr: false });

// -----------------------------------
// Values Section Icons & Data
// -----------------------------------
interface ValueItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  { icon: Medal, title: 'Leadership', description: 'Fully committed to the success company' },
  { icon: GraduationCap, title: 'Responsibility', description: 'Students will always be our top priority' },
  { icon: Gem, title: 'Flexibility', description: 'The ability to switch is an important skills' },
  { icon: Code, title: 'Solve the problem', description: 'Code your way to a solution' },
];

// -----------------------------------
// Counter Component (hydration-safe)
// -----------------------------------
function Counter({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let animationFrame: number;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(target * progress));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [start, target]);

  // Render placeholder on server to match SSR
  if (count === null) return <span>0+</span>;

  return <span>{count}+</span>;
}

// -----------------------------------
// Main Component
// -----------------------------------
const SkillsSection: FC = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  const statsData = [
    { target: 3000, label: 'Total Students' },
    { target: 100, label: 'Total Teachers' },
    { target: 8, label: 'Years Experience' },
    { target: 15, label: 'Total Courses' },
  ];

  return (
    <section className="max-w-7xl mx-auto pt-5">
      <div className="bg-white px-6">
        <div className="grid md:grid-cols-2 gap-10 items-top">
          {/* Left Content */}
          <div className="bg-paleblue p-6 rounded-xl shadow-md lg:text-left text-center lg:h-[665px] h-full">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Get the skills you need for a{' '}
                <span className="text-blue-500">job that is in demand.</span>
              </h2>
              <p className="text-gray-600">
                The modern StudyNotion dictates its own terms. Today, to be a
                competitive specialist requires more than professional skills.
              </p>
            </div>

            {/* Skills List */}
            <div className="mt-8">
              <div className="relative pl-10 space-y-10">
                {values.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="relative flex items-start gap-4">
                      <div className="absolute -left-[35px] flex flex-col items-center">
                        <div className="bg-white border border-gray-200 rounded-full p-3 shadow-sm">
                          <Icon className="w-6 h-6 text-sky-500" />
                        </div>
                        {index < values.length - 1 && (
                          <div className="h-10 border-l border-dashed border-gray-300 mt-2"></div>
                        )}
                      </div>
                      <div className="pl-10">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="space-y-6">
              <div className="w-full h-100 rounded-xl overflow-hidden flex shadow-md">
                <Image
                  src={studyImg}
                  alt="studyImg"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full opacity-90"
                />
              </div>
            </div>

            {/* Counter Section */}
            <div ref={triggerRef} className="w-full mb-12 pt-10">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 text-center max-w-5xl mx-auto">
                {statsData.map((item, i) => (
                  <div
                    key={i}
                    className="bg-semiblueviolet shadow-md rounded-xl py-6 hover:shadow-lg transition"
                  >
                    <h3 className="text-3xl font-bold text-teal-400">
                      <Counter target={item.target} start={inView} />
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* mission and vision Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center pb-10 ">
          <div className="bg-paleblue rounded-xl p-6 transition-all hover:scale-105 hover:shadow-lg">
            <Bullseye className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3 text-slate-900">Our Mission</h2>
            <p className="text-slate-600">
              Empower educators and learners through intelligent tools and personalized education systems.
            </p>
          </div>

          <div className="bg-paleblue rounded-xl p-6 transition-all hover:scale-105 hover:shadow-lg">
            <Eye className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3 text-slate-900">Our Vision</h2>
            <p className="text-slate-600">
              To create a globally connected education ecosystem powered by automation, innovation, and human touch.
            </p>
          </div>
        </div>

       

        {/* Why Choose Us */}
        <div className="max-w-7xl mx-auto pt-10">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">
              Why <span className="text-Blueviolet">Choose </span>Us
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl text-sm md:text-base text-center mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries but also the
              leap into electronic typesetting.
            </p>

           {/* Cards Section */}
<div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14">

  {/* Card 1 */}
  <div className="bg-semiblueviolet w-[280px] h-[280px] rounded-2xl shadow-xl border border-white/40 transform rotate-[-6deg] hover:rotate-[-3deg] transition-all duration-300">
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="bg-blue-100 p-3 rounded-full mb-3">
        <Code className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Know Your Progress</h3>
      <p className="text-gray-500 text-sm">
        Track your learning journey and see your achievements in real-time.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-semiblueviolet w-[280px] h-[280px] rounded-2xl shadow-xl border border-white/40 transform rotate-[3deg] hover:rotate-0 transition-all duration-300">
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="bg-purple-100 p-3 rounded-full mb-3">
        <Medal className="w-8 h-8 text-purple-600" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Compare with Others</h3>
      <p className="text-gray-500 text-sm">
        Benchmark your progress and stay motivated alongside your peers.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-semiblueviolet w-[280px] h-[280px] rounded-2xl shadow-xl border border-white/40 transform rotate-[-3deg] hover:rotate-0 transition-all duration-300">
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="bg-yellow-100 p-3 rounded-full mb-3">
        <GraduationCap className="w-8 h-8 text-yellow-600" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Plan Your Lessons</h3>
      <p className="text-gray-500 text-sm">
        Organize your learning schedule and reach your goals efficiently.
      </p>
    </div>
  </div>

</div>

          </div>
        </div>
         {/* Carousel / Mentors */}
        <div className="pt-20">
          <Team />
        </div>
         {/* Testimonials */}
        <div className="">
          < Testimonial/>
        </div>
        {/* Newsletter */}
        <div className="pt-2">
          < Intaerested/>
        </div>
         {/* Partners */}
        <div className="">
          < Partners/>
        </div>
      </div>
      
    </section>
  );
};

export default SkillsSection;
