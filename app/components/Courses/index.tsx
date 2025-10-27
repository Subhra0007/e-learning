"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

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
  tag: string; // Trending, Popular, Recommended
  description: string;
  level: string; // Beginner, Intermediate, Advanced
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
    tag: "Trending",
    description:
      "Learn modern JavaScript, Node.js, and React in a practical, project-based approach.",
    level: "Beginner",
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
    tag: "Popular",
    description:
      "Master design systems and reusable components in React for scalable projects.",
    level: "Intermediate",
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
    tag: "Recommended",
    description:
      "Learn to create stunning banners and graphics using Figma with real-world projects.",
    level: "Beginner",
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
    tag: "Trending",
    description:
      "Get started with Python for Data Science and learn how AI models work with practical demos.",
    level: "Advanced",
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
    tag: "Popular",
    description:
      "Master SEO, Google Ads, and social media strategies to grow your online presence.",
    level: "Intermediate",
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
    tag: "Recommended",
    description:
      "Learn smooth and interactive UI animations with Adobe After Effects for modern design systems.",
    level: "Advanced",
  },
];

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 800,
      cssEase: "ease-in-out" as const,
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div id="courses">
          <div className="flex justify-between items-center mb-10 mx-auto max-w-7xl">
            <h3 className="text-midnightblue text-3xl lg:text-4xl font-semibold">
              Our <span className="text-Blueviolet">Courses</span>
            </h3>
            <Link
              href="/courses"
              className="text-Blueviolet lg:text-lg text-sm font-medium hover:text-blue-600 transition-colors duration-300"
            >
              Explore courses&nbsp;&gt;
            </Link>
          </div>

          <Slider {...settings} className="-mx-4">
            {postData.map((items, i) => {
              const bgColor =
                (i + 1) % 2 !== 0 ? "bg-semiblueviolet" : "bg-paleblue";

              return (
                <div key={i} className="px-4 py-4">
                  <div className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-[500px] flex flex-col justify-between w-full">
                    {/* Main Content */}
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${bgColor} p-6 rounded-2xl flex-grow`}
                    >
                      {/* Left Side */}
                      <div className="lg:col-span-2 flex flex-col justify-between">
                        <div>
                          {/* Tag (Trending / Popular / Recommended) */}
                          <button
  
  className="text-sm  font-semibold mb-2 border border-white/10 rounded-full px-4 py-2 bg-darkgray/10 "
>
  {items.tag}
</button>
                          

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
                              <strong>Level:</strong> {items.level}
                            </p>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mt-2">
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
                    <div className="flex justify-between items-center mt-6 pt-4">
                      <h3 className="text-3xl font-bold text-gray-900">
                        ₹{items.price}
                      </h3>
                      <Link href="/contact-us">
                        <button className="bg-blue-600 hover:bg-semiblueviolet border border-lightgray text-Blueviolet font-semibold px-6 py-2 rounded-xl shadow-md transition">
                          Enroll Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
