"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export default function Greeting() {

    useGSAP(() => {
        gsap.fromTo(
          ".animated-text",
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: "power1.out"},
        );
    
        gsap.fromTo(
          "#secondAnimatedText",
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: "power1.out", delay: 2 },
        )
      })


    return (
        <div className="h-[90vh] w-full flex flex-col items-center justify-center">
            <p className="animated-text text-6xl font-bold">Welcome to Overfit Soft</p>
            <p id="secondAnimatedText" className="text-6xl font-bold pt-2">Let's work together</p>
        </div>
    );
};