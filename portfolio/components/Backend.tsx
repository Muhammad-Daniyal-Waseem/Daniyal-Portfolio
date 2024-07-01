"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { Button } from "./ui/MovingBorder";
import expressjs from "../public/Logos/expressjs.png";
import node from "../public/Logos/nodejs.png";
import springboot from "../public/Logos/springboot.png";

const people = [
  {
    id: 1,
    name: "ExpressJs",
    designation: "Backend Framework",
    image: expressjs.src, // Assuming these are correctly imported and available
  },
  {
    id: 2,
    name: "NodeJs",
    designation: "JavaScript Runtime",
    image: node.src,
  },
  {
    id: 3,
    name: "SpringBoot",
    designation: "Java Framework",
    image: springboot.src,
  },
];

const Technologies = () => {
  const [textSize,settextSize]=useState<string>("");
  useEffect(() => {
    if(typeof (window) !== "undefined"){
    const handleResize = () => {
      if (window.outerWidth <= 300) {
        settextSize("text-sm");
        // Handle specific behavior for smaller screens
      }
      settextSize("text-base")

    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };}
  }, []);

  return (
    <Button className="w-full" duration={3000}>
      <div className={`target-section h-fit w-11/12 py-2 rounded-2xl`}>
        <div className="h-full relative w-full px-8 py-12 mx-auto overflow-x-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <p className={`${textSize} sm:text-xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-b rounded-md from-blue-500 to-white opacity-85 ${typeof (window) !== "undefined"&& window.outerWidth <= 300 ? "text-sm" : ""} mb-7 p-2 sm:p-4 text-blue-950 relative bottom-3 sm:bottom-6`}>
            Backend Tech
          </p>
          <div className="absolute inset-0 w-full h-full bg-black z-20" style={{ maskImage: "radial-gradient(transparent,white)" }} />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mx-auto")}>
            <div className="flex flex-row items-center justify-center w-full mx-auto">
              <AnimatedTooltip items={people} />
            </div>
          </h1>
        </div>
      </div>
    </Button>
  );
};

export default Technologies;
