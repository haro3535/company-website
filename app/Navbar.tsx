"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Dropdown, { DropdownItem } from "./C_Dropdown";
import { usePathname } from "next/navigation";


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

    const dropdownList: DropdownItem[] = [
        { label: "Services", url: "/services" },
        { label: "Portfolio", url: "/portfolio" },
        { label: "Blog", url: "/blog" },
    ];

  const pathname = usePathname(); // Get current route

  // Check if the current page is "Under Construction"
  const isUnderConstruction = pathname === "/under-construction";

  return (
    <nav className="w-full flex flex-col justify-between items-center space-y-1">
      <div className={"w-full flex items-center px-10 " + (isUnderConstruction ? "justify-center py-3" : "justify-between")}>
        <div>
          <h1 className="text-3xl font-bold text-gray-300">Overfit Soft</h1>
        </div>

        {!isUnderConstruction ? (
          <ul className="flex w-1/3 justify-between items-center py-3 h-16 text-gray-300">
          <li>
            <a href="/" className="hover:text-gray-100">Home</a>
          </li>
          <li>
            <Dropdown DropdownItems={dropdownList} />
          </li>
          <li>
            <a href="/about" className="hover:text-gray-100">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-100">Contact</a>
          </li>
        </ul>
        ): null}
      </div>
      <div ref={dividerRef} className="bg-gray-300 h-[1px] w-[10%]"></div>
    </nav>
  );
}