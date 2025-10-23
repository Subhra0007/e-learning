"use client";
import Link from 'next/link';
import React from "react";
import Image from "next/image";
import instructorImg from "@/public/assets/1.jpg"; // <-- replace with your image path

const BecomeInstructor = () => {
  return (
      <div className="z-0  relative max-w-7xl mx-auto ">
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-12  text-black  px-6 pb-2">
      {/* ===== Left Image Section ===== */}
      <div className="relative w-full md:w-[600px]">
        {/* White background offset frame */}
        <div className="absolute top-5 left-5 bg-white w-full h-full rounded-sm"></div>

        {/* Instructor Image */}
        <div className="relative z-10">
          <Image
            src={instructorImg}
            alt="Instructor"
            className="rounded-xl object-cover w-full h-auto shadow-lg"
          />
        </div>
      </div>

      {/* ===== Right Text Section ===== */}
      <div className=" lg:text-left text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
           We Build {" "}
          <span className="text-transparent bg-clip-text bg-Blueviolet">
            Digital Success
          </span>
        </h2>
        <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
          Our mission is to empower brands through innovative digital strategies and cutting-edge technology.
        </p>
         <Link href="/about-us">
        <button className="bg-semiblueviolet hover:bg-Blueviolet text-Blueviolet hover:text-white font-medium px-5 py-3 rounded-full inline-flex items-center gap-2 transition">
          About Us
          <span className="text-lg">➜</span>
        </button>
        </Link>
      </div>
    </section>
    </div>
  );
};

export default BecomeInstructor;
