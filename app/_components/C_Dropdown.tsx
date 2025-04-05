'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export interface DropdownItem {
    label: string;
    url: string;
}

interface DropdownProps {
    DropdownItems: DropdownItem[];
    DropdownTitle: string;
  }


export default function DropDown({ DropdownItems, DropdownTitle }: DropdownProps) {
    
    const [items, setItems] = useState<DropdownItem[]>(DropdownItems);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleHover = (state : boolean) => {
        setIsOpen(state);
        const dropdownIcon = document.getElementById('dropdownIcon');
        if (dropdownIcon) {
            if (state) {
                dropdownIcon.classList.add('rotate-180');
            } else {
                dropdownIcon.classList.remove('rotate-180');
            }
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.relative')) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }
    , []);

    return(
        <div className="relative inline-block text-left dropdownBox" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
            <div>
                <button
                    type="button"
                    className="cursor-pointer inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 hover:text-gray-100 font-medium text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {DropdownTitle}
                    <span id='dropdownIcon' className="ml-2 hover:rotate-180 transition-transform duration-200 ease-in-out">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 w-56 rounded-md shadow-lg bg-[var(--menu)]  ring-1 ring-gray ring-opacity-5">
                    <div className="py-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {DropdownItems.map((item, index) => (
                            <Link href={item.url} key={index}>
                                <span className="block px-4 py-2 text-sm hover:bg-white hover:text-black" role="menuitem">
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}