import React from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about-us", current: false },
  { name: "Subjects", href: "/subjects", current: false },
  { name: "Contact ", href: "/contact-us", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-full max-w-sm w-full mx-auto">
      <div className="flex space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                  'py-1 text-lg font-normal opacity-75 block'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}

            {/* Buttons in the same row */}
            <div className="mt-4 flex gap-4">
              <Link href="/contact-us" className="flex-1">
                <button className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium py-2 px-4 rounded-full">
                  Register
                </button>
              </Link>
            <a href="tel:+917073437393">
  <button className="bg-white w-full text-Blueviolet border border-semiblueviolet font-medium py-2 px-4 rounded-full">
    Call Us
  </button>
</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
