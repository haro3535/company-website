"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function NavBar() {
    const dividerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (dividerRef.current) {
          gsap.fromTo(
            dividerRef.current,
            { width: "10%" },
            { width: "100%", duration: 1, ease: "power1.out", delay: 1 }
          );
        }
    }, []); 

  return (
    <nav className="w-full flex flex-col justify-between items-center space-y-1">
      <div className="w-full flex justify-between items-center px-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-300">Overfit Soft</h1>
        </div>

        <ul className="flex w-1/3 justify-between items-center py-3 h-16 text-gray-300">
          <li>
            <a href="/" className="hover:text-gray-100">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-100">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-100">Contact</a>
          </li>
        </ul>
      </div>
      <div ref={dividerRef} className="bg-gray-300 h-[1px] w-[10%]"></div>
    </nav>
  );
}