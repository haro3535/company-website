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
    isOpen?: boolean;
    setIsOpen?: (state: boolean) => void;
  }


export default function DropDown({ DropdownItems, DropdownTitle, isOpen, setIsOpen }: DropdownProps) {
    
    const [items, setItems] = useState<DropdownItem[]>(DropdownItems);

    return(
        <div className="inline-block text-left dropdownBox z-10">
            <div>
                <button
                    type="button"
                    className={"cursor-pointer inline-flex justify-center w-full shadow-sm pl-4 pr-3 py-2 rounded-full font-medium text-gray-300" 
                            + (isOpen ? " bg-[var(--menu)]" : " bg-[var(--surface)]")
                    }
                    onClick={() => setIsOpen?(!isOpen): undefined}
                >
                    {DropdownTitle}
                    <span id='dropdownIcon' className="ml-1 transition-transform duration-200 ease-in-out">
                        <svg className="w-6 h-5 pb-0" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -3 29 19" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                </button>
            </div>

            {isOpen && (
                <div className="absolute flex justify-center mt-3 right-0 -z-10 w-full rounded-b-md shadow-lg bg-[var(--menu)] ">
                    <div className='w-3/4'>
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
                </div>
            )}
        </div>
    )
}