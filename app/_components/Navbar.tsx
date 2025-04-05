"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Dropdown, { DropdownItem } from "./C_Dropdown";
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

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


  const handleHover = (state : boolean) => {
          // Şimdilik bunlar genel olarak çalışıyor bunları özel olarak yapman lazım
  
          setIsOpen(state);
          const dropdownIcon = document.getElementById('dropdownIcon');
          if (dropdownIcon) {
              if (state) {
                  dropdownIcon.style.transform = 'rotate(180deg)';
              } else {
                  dropdownIcon.style.transform = 'rotate(0deg)';
              }
          }
      }

  return (
    <nav className="w-full bg-[var(--surface)] sticky flex justify-center items-center space-y-1 z-20 top-0">
      <div className="w-3/4 flex flex-col items-center justify-between">
        <div className={"w-full flex items-center px-10 " + (isUnderConstruction ? "justify-center py-3" : "justify-between")}>
          <div>
            <h1 className="text-3xl font-bold">Overfit Soft</h1>
          </div>

          {!isUnderConstruction ? (
            <ul className="hidden w-1/4 justify-between items-center h-16 text-gray-300 xl:flex">
              <li className="h-full flex items-center">
                <Link href="/" className="hover:bg-[var(--menu)] px-4 py-2 rounded-full">Home</Link>
              </li>
              <li className="h-full flex items-center" onMouseOver={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                <Dropdown DropdownItems={dropdownList} DropdownTitle={"Projects"} isOpen={isOpen} />
              </li>
              <li className="h-full flex items-center ">
                <Link href="/about" className="hover:bg-[var(--menu)] px-4 py-2 rounded-full">About</Link>
              </li>
              <li className="h-full flex items-center ">
                <Link href="/contact" className="hover:bg-[var(--menu)] px-4 py-2 rounded-full">Contact</Link>
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
      </div>
    </nav>
  );
}