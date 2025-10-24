"use client";

import React, { useEffect, useState, useRef } from "react";
import WhyChooseUs from "@/app/components/WhyChooseUs/index"
// Counter component (auto counting when in view)
function Counter({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0);

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

  return <span>{count}+</span>;
}
const Home: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  // Intersection Observer to trigger counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter stats
  const statsData = [
    { target: 3000, label: "Total Students" },
    { target: 100, label: "Total Teachers" },
    { target: 8, label: "Years Experience" },
    { target: 15, label: "Total Courses" },
  ];

  return (
    <div className="max-w-7xl mx-auto ">
    <div className="  flex flex-col items-center justify-center  pt-6">
    

      {/* Counter Cards Section */}
      <div ref={triggerRef} className="w-full   bg-semiblueviolet  shadow-md rounded-xl py-6 hover:shadow-lg transition">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center max-w-5xl mx-auto">
          {statsData.map((item, i) => (
            <div
              key={i}
              className=""
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
  );
};

export default Home;
