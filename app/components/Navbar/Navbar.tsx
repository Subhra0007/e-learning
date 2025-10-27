"use client";
import { Disclosure } from '@headlessui/react';
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo.png"
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Courses", href: "/courses" },
  { name: "Contact ", href: "/contact-us" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ This tracks the current URL path

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 py-4 ">
          <div className="relative flex h-12 md:h-15 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="flex items-center">
                          <Image
                            src={Logo}
                            alt="Logo"
                            width={60}
                            height={60}
                            className="h-10 w-auto block lg:hidden"
                            priority
                          />
                        </Link>
                        <Link href="/" className="flex items-center">
                         <Image
                            src={Logo}
                            alt="Logo"
                            width={60}
                            height={60}
                            className="h-10 w-auto hidden  lg:block"
                            priority
                          />
                        </Link>
                
              </div>

              {/* LINKS */}
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span
                        className={classNames(
                          pathname === item.href
                            ? 'underline-links'
                            : 'text-slategray',
                          'px-3 py-4 text-lg  opacity-75 hover:opacity-100 cursor-pointer font-semibold'
                        )}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* REGISTER & CALL US BUTTONS */}
            <div className="hidden lg:flex space-x-4">
              <Link href="/contact-us">
                <button className="text-Blueviolet text-lg font-medium py-4 px-6 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet">
                  Register
                </button>
              </Link>
             <a href="tel:+917073437393">
  <button className="text-lg text-Blueviolet px-6 py-4 rounded-full font-medium shadow hover:brightness-110 transition border border-lightgray hover:bg-semiblueviolet">
    Call Us
  </button>
</a>

            </div>

            {/* DRAWER ICON (MOBILE) */}
            <div className='block lg:hidden'>
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
