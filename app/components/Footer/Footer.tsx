"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import footerlogo from "@/public/logo.png";
import React from "react";
const FacebookF = FaFacebookF as React.FC<React.SVGProps<SVGSVGElement>>;
const Instagram = FaInstagram as React.FC<React.SVGProps<SVGSVGElement>>;
const Linkedin = FaLinkedinIn as React.FC<React.SVGProps<SVGSVGElement>>;
const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 text-white py-10 px-6 lg:px-0">
      <div className="max-w-7xl mx-auto bg-slate-900 text-black rounded-3xl p-8 md:p-10">
        {/* Footer Flex Container */}
        <div className="flex flex-col md:flex-row justify-around gap-10">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center flex-1">
            <Image
              src={footerlogo}
              alt="Logo"
              width={180}
              height={70}
              className="h-14 w-auto mb-3"
              priority
            />
            <p className="text-base sm:text-lg font-semibold leading-relaxed text-center text-black">
              It&apos;s Time To Pull In A <br />
              <span className="text-Blueviolet">Professional</span>
            </p>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-xl font-bold mb-3 text-Blueviolet">Menu</h3>
            <ul className="space-y-2 text-slate-50 text-sm sm:text-base text-center">
              <li>
                <Link href="/" className="hover:font-semibold transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:font-semibold transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:font-semibold transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:font-semibold transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-xl font-bold mb-3 text-Blueviolet">Connect Us</h3>
            <ul className="space-y-2 text-black text-sm sm:text-base">
              <li>
                {/* <a href="mailto:xyz@gmail.com" className="hover:text-gray-400 transition">
                  xyz@gmail.com
                </a> */}
              </li>
              <li>
                <a href="mailto:tutor4study24x7@gmail.com" className="hover:text-gray-400 transition">
                  tutor4study24x7@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+91 7073437393" className="hover:text-gray-400 transition flex justify-center">
                  +91 7073437393
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-5 mt-4 text-Blueviolet text-xl">
              <a
                href="https://www.facebook.com"
                className="hover:text-emerald-700 transition"
                aria-label="Facebook"
              >
                <FacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                className="hover:text-emerald-700 transition"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com"
                className="hover:text-emerald-700 transition"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-slate-300 mt-10">
          © {currentYear} abc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
