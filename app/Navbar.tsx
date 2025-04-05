"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Dropdown, { DropdownItem } from "./C_Dropdown";
import { usePathname } from "next/navigation";
import Link from "next/link";


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
          <h1 className="text-3xl font-bold">Overfit Soft</h1>
        </div>

        {!isUnderConstruction ? (
          <ul className="hidden w-1/3 justify-between items-center py-3 h-16 text-gray-300 xl:flex">
            <li>
              <Link href="/" className="hover:text-gray-100">Home</Link>
            </li>
            <li>
              <Dropdown DropdownItems={dropdownList} DropdownTitle={"Projects"} />
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-100">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-100">Contact</Link>
            </li>
        </ul>
        ): null}

        {!isUnderConstruction ? (
          <svg className="block xl:hidden" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        ) : ( null )}
      </div>
      <div ref={dividerRef} className="bg-gray-300 h-[1px] w-[10%]"></div>
    </nav>
  );
}