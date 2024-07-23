"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { Button } from "./ui/MovingBorder";
import aceternityui from '../public/Logos/aceternityui.png';
import mui from '../public/Logos/mui.png';
import framermotion from '../public/Logos/framermotion.png';
import git from '../public/Logos/git.png';
import vercel from '../public/Logos/vercel.png';

const people = [
  {
    id: 1,
    name: "Aceternity UI",
    designation: "UI Library",
    image: aceternityui.src,
  },
  {
    id: 2,
    name: "MUI",
    designation: "UI Library",
    image: mui.src,
  },
  {
    id: 3,
    name: "Framer Motion",
    designation: "Animation Library",
    image: framermotion.src,
  },
  {
    id: 4,
    name: "Git",
    designation: "Version Control",
    image: git.src,
  },
  {
    id: 5,
    name: "Vercel",
    designation: "Deployment Platform",
    image: vercel.src,
  },
];

const ToolAndLibrary = () => {
  const [textSize,settextSize]=useState<string>("");
  const [height,setheight]=useState<string>("");

  useEffect(() => {
    if(typeof (window) !== "undefined")
      {
    const handleResize = () => {
      if(window.outerWidth<350)
        {
          setheight('h-[250px]');
        }
      else if(window.outerWidth<500)
      {
        setheight('h-[200px]');
      }
      else{
      setheight('h-[200px] ');

      }
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
    <Button className="w-full" duration={3100}>
      <div className={`target-section h-fit w-11/12 py-2 rounded-2xl`}>
        <div className={`${height} sm:h-[240px] md:h-72 relative w-full px-8 py-12 mx-auto bg-slate-900 flex flex-col items-center justify-center rounded-lg`}>
          <p className={`${textSize} mb-7 p-2 sm:p-4 text-blue-950 relative bottom-3 sm:bottom-6 sm:text-xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-b rounded-md from-blue-500 to-white opacity-85`}>
            Tool/Libs
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
};

export default ToolAndLibrary;
