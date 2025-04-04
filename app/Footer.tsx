"use client";

import { usePathname } from "next/navigation";

export default function Footer() {

    const pathname = usePathname(); // Get current route

    // Check if the current page is "Under Construction"
    const isUnderConstruction = pathname === "/under-construction";

    return (
        <footer className={"w-full bg-[var(--foreground-secondary)] flex flex-col space-y-20 items-center justify-center "
            + (isUnderConstruction ? "pt-2" : "pt-10")}>
            {!isUnderConstruction ? (
                <div className="w-3/4 flex items-center justify-between">
                <div className="w-1/4 h-full py-3 px-2 space-y-2">
                    <h1 className="text-3xl font-bold text-gray-300">Overfit Soft</h1>
                    <p className="text-[13px]">
                        We provide cutting-edge software solutions to help your business thrive in the digital age.
                    </p>
                </div>
                <div className="w-5/8 flex h-full">
                    <div className="w-1/3 h-full flex flex-col items-start justify-center ">
                        <h2 className="underline underline-offset-4 ">Quick Links</h2>
                        <ul className="text-[13px] mt-2">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-1/3 h-full flex flex-col items-start justify-center  ">
                        <h2 className="underline underline-offset-4 ">Services</h2>
                        <ul className="text-[13px] mt-2">
                            <li>Web Development</li>
                            <li>Mobile Development</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                    <div className="w-1/3 h-full flex flex-col items-start justify-center">
                        <h2 className="underline underline-offset-4 ">Contact</h2>
                    </div>
                </div>
            </div>) : <></>}
            <div className="w-3/4 pb-2 text-center text-xs">&copy; Overfit Soft all rights reserved.</div>
        </footer>
    )
}