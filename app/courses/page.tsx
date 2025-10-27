"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { StarIcon } from "@heroicons/react/24/solid";

// ======================
// COURSES DATA
// ======================
interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
  duration: string;
  level: string;
  description: string;
  category: string;
}

const postData: DataType[] = [
  {
    heading: "Full stack modern",
    heading2: "JavaScript",
    name: "Colt Stelle",
    imgSrc: "/assets/courses/courseone.png",
    students: 150,
    classes: 12,
    price: 2000,
    rating: 4.7,
    duration: "6 weeks",
    level: "Beginner",
    description:
      "Learn modern JavaScript, Node.js, and React in a practical, project-based approach.",
    category: "Web Development",
  },
  {
    heading: "Design system",
    heading2: "with React programme",
    name: "Sarah Jones",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 130,
    classes: 10,
    price: 1800,
    rating: 4.8,
    duration: "4 weeks",
    level: "Intermediate",
    description:
      "Master design systems and reusable components in React for scalable projects.",
    category: "UI/UX Design",
  },
  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "John Doe",
    imgSrc: "/assets/courses/coursethree.png",
    students: 120,
    classes: 9,
    price: 1500,
    rating: 4.6,
    duration: "3 weeks",
    level: "Beginner",
    description:
      "Learn to create stunning banners and graphics using Figma with real-world projects.",
    category: "Graphic Design",
  },
  {
    heading: "Python Data Science",
    heading2: "with AI Basics",
    name: "Emily Clark",
    imgSrc: "/assets/courses/learnpython.webp",
    students: 210,
    classes: 14,
    price: 2200,
    rating: 4.9,
    duration: "8 weeks",
    level: "Advanced",
    description:
      "Get started with Python for Data Science and learn how AI models work with practical demos.",
    category: "Data Science",
  },
  {
    heading: "Digital Marketing",
    heading2: "SEO & Social Media",
    name: "Alex Martin",
    imgSrc: "/assets/courses/download.jpeg",
    students: 160,
    classes: 11,
    price: 1900,
    rating: 4.5,
    duration: "5 weeks",
    level: "Intermediate",
    description:
      "Master SEO, Google Ads, and social media strategies to grow your online presence.",
    category: "Marketing",
  },
  {
    heading: "UI Animation",
    heading2: "with After Effects",
    name: "Sophia Turner",
    imgSrc: "/assets/courses/ui.png",
    students: 140,
    classes: 10,
    price: 2100,
    rating: 4.8,
    duration: "4 weeks",
    level: "Advanced",
    description:
      "Learn smooth and interactive UI animations with Adobe After Effects for modern design systems.",
    category: "Motion Design",
  },
];

// ======================
// COURSES GRID COMPONENT
// ======================
export default function CoursesGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-3">
      <div id="courses">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h3 className="text-midnightblue text-4xl lg:text-5xl font-semibold">
            Our Courses
          </h3>
          <p className="mt-4 text-gray-600">
            Explore our handpicked professional courses crafted for your growth.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {postData.map((items, i) => {
            // Odd = bg-semiblueviolet, Even = bg-paleblue
            const bgColor =
              (i + 1) % 2 !== 0 ? "bg-semiblueviolet" : "bg-paleblue";

            return (
              <div
                key={i}
                className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Main Content Row */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${bgColor} p-6 rounded-2xl`}
                >
                  {/* Left Side - Text Content */}
                  <div className="lg:col-span-2 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-blue-600 font-semibold mb-2">
                        {items.level}
                      </p>
                      <h4 className="text-2xl font-bold text-black leading-tight mb-1">
                        {items.heading}
                      </h4>
                      <h4 className="text-2xl font-bold text-black leading-tight mb-4">
                        {items.heading2}
                      </h4>
                      <p className="text-gray-700 text-sm mb-4">
                        {items.description}
                      </p>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">
                        <strong>Author:</strong> {items.name}
                      </h3>
                      <div className="text-sm text-gray-500 space-y-1">
                        <p>
                          <strong>Duration:</strong> {items.duration}
                        </p>
                        <p>
                          <strong>Category:</strong> {items.category}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mt-4">
                      <h3 className="text-xl font-bold">{items.rating}</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className={`h-5 w-5 ${
                              index < Math.floor(items.rating)
                                ? "text-gold fill-current"
                                : "text-gray-300 text-gold"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex justify-center items-center">
                    <div className="relative w-full h-52 rounded-2xl overflow-hidden">
                      <Image
                        src={items.imgSrc}
                        alt={items.heading}
                        fill
                        className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-center mt-6 border-t border-gray-200 pt-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    ₹{items.price}
                  </h3>
                  <Link href="/contact-us">
  <button className="bg-blue-600 hover:bg-semiblueviolet border border-lightgray text-Blueviolet font-semibold px-6 py-2 rounded-xl shadow-md transition">
    Buy Now
  </button>
</Link>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
