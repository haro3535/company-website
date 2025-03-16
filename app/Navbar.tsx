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
    <nav className="w-full flex flex-col items-center space-y-1">
      <ul className="flex w-1/2 justify-between items-center py-3 h-20">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div ref={dividerRef} className="bg-gray-300 h-[1px] w-[10%]"></div>
    </nav>
  );
}