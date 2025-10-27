"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

// ======================
// CAROUSEL DATA
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
    price: 20,
    rating: 4.7,
    duration: "6 weeks",
    level: "Beginner",
    description: "Learn modern JavaScript, Node.js, and React in a practical, project-based approach.",
    category: "Web Development",
  },
  {
    heading: "Design system",
    heading2: "with React programme",
    name: "Colt Stelle",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 130,
    classes: 12,
    price: 2034,
    rating: 4.7,
    duration: "4 weeks",
    level: "Intermediate",
    description: "Master design systems and reusable components in React for scalable projects.",
    category: "UI/UX Design",
  },
  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: "/assets/courses/coursethree.png",
    students: 120,
    classes: 12,
    price: 3300,
    rating: 4.7,
    duration: "3 weeks",
    level: "Beginner",
    description: "Learn to create stunning banners and graphics using Figma with real-world projects.",
    category: "Graphic Design",
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt Stelle",
    imgSrc: "/assets/courses/courseone.png",
    students: 150,
    classes: 12,
    price: 20000,
    rating: 4.7,
    duration: "5 weeks",
    level: "Advanced",
    description: "Build and launch websites with Webflow using professional techniques.",
    category: "Web Development",
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt Stelle",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 180,
    classes: 12,
    price: 2000,
    rating: 4.7,
    duration: "5 weeks",
    level: "Intermediate",
    description: "Learn Webflow to design and launch responsive websites without coding.",
    category: "Web Development",
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt Stelle",
    imgSrc: "/assets/courses/coursethree.png",
    students: 150,
    classes: 12,
    price: 2000,
    rating: 4.7,
    duration: "5 weeks",
    level: "Beginner",
    description: "Step-by-step Webflow course to create modern and interactive web pages.",
    category: "Web Development",
  },
];

// ======================
// CAROUSEL COMPONENT
// ======================
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
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

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-paleblue mx-2 px-4 pt-4 pb-16 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={items.imgSrc}
                      alt={items.heading}
                      width={389}
                      height={262}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute right-3 -bottom-3 bg-gradient-to-r from-ultramarine to-blue-600 rounded-2xl p-4 shadow-lg">
                      <h3 className="text-white uppercase text-xs font-bold text-center leading-tight">
                        best <br /> seller
                      </h3>
                    </div>
                  </div>

                  <div className="lg:px-6 px-3 pt-6 ">
                    <h4 className="text-xl font-bold text-black leading-tight mb-2">
                      {items.heading}
                    </h4>
                    <h4 className="text-xl font-bold text-black leading-tight mb-4">
                      {items.heading2}
                    </h4>

                   
                                 <div className="bg-semiblueviolet w-60 lg:w-80 h-60 px-6 pt-4 pb-6 shadow-md rounded-2xl flex flex-col justify-center ">
  <div>
    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{items.description}</p>
    <h3 className="text-sm font-medium text-gray-700 mb-2">
      <strong>Author:</strong> {items.name}
    </h3>

    {/* Extra Info */}
    <div className="text-sm text-gray-500 space-y-1">
      <p>
        <strong>Duration:</strong> {items.duration}
      </p>
      <p>
        <strong>Level:</strong> {items.level}
      </p>
      <p>
        <strong>Category:</strong> {items.category}
      </p>
    </div>
  </div>

                    </div>
                    <div className="flex justify-between items-center mb-6 mt-4">
                      <div className="flex items-center gap-3">
                        <h3 className=" text-2xl font-bold">{items.rating}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, index) => (
                            <StarIcon
                              key={index}
                              className={`h-5 w-5 text-gold ${
                                index < Math.floor(items.rating)
                                  ? "fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">
                          ₹{items.price}
                        </h3>
                      </div>
                    </div>

                    <hr className="border-gray-200 mb-6" />

                    <div className="flex justify-between ">
                      <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <Image
                          src={"/assets/courses/book-open.svg"}
                          alt="classes"
                          width={20}
                          height={20}
                        />
                        <span>{items.classes} classes</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <Image
                          src={"/assets/courses/users.svg"}
                          alt="students"
                          width={20}
                          height={20}
                        />
                        <span>{items.students} students</span>
                      </div>
                    </div>           
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
