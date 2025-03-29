'use client'

import React, { useState } from 'react'
import Link from 'next/link';

export interface DropdownItem {
    label: string;
    url: string;
}

interface DropdownProps {
    DropdownItems: DropdownItem[];
  }


export default function DropDown({ DropdownItems }: DropdownProps) {
    
    const [items, setItems] = useState<DropdownItem[]>(DropdownItems);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Dropdown
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {DropdownItems.map((item, index) => (
                            <Link href={item.url} key={index}>
                                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
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