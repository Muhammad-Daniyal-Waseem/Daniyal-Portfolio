"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { Button } from "./ui/MovingBorder";
import Cplusplus from "../public/Logos/Cplusplus.png";
import Java from "../public/Logos/Java.png";
import javascript from "../public/Logos/javascript.png";

const people = [
  {
    id: 1,
    name: "C++",
    designation: "Programming Language",
    image: Cplusplus.src,
  },
  {
    id: 2,
    name: "Java",
    designation: "Programming Language",
    image: Java.src,
  },
  {
    id: 3,
    name: "JavaScript",
    designation: "Programming Language",
    image: javascript.src,
  },
];

const ProgrammingLanguages = () => {
  return (
    <Button className="w-full" duration={3000}>
      <div className={`target-section h-fit w-11/12 py-2 rounded-2xl`}>
        <div className="h-full relative w-full px-8 py-12 mx-auto 300 overflow-x-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <p className={`${window.outerWidth <= 300 ? "text-sm" : "text-base"} mb-7 p-2 sm:p-4 text-blue-950 relative bottom-3 sm:bottom-6 sm:text-xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-b rounded-md from-blue-500 to-white opacity-85`}>
            Programming Languages
          </p>
          <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mx-auto")}>
            <div className="flex flex-row items-center justify-center w-full mx-auto">
              <AnimatedTooltip items={people} />
            </div>
          </h1>
        </div>
      </div>
    </Button>
  );
}

export default ProgrammingLanguages;
