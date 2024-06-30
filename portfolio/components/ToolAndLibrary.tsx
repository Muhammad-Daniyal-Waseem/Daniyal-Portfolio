"use client"
import React from "react";
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
    image:aceternityui,
  },
  {
    id: 2,
    name: "MUI",
    image:mui,
  },
  {
    id: 3,
    name: "Framer Motion",
    image:framermotion,
  },
  {
    id: 4,
    name: "Git",
    image:git,
  },
  {
    id: 5,
    name: "Vercel",
    image:vercel,
  },

];


const ToolAndLibrary = () => {
  return (
    <Button className="w-full" duration={3100}>

    <div className={` target-section h-fit w-11/12 py-2 rounded-2xl`} >
        <div className="h-full relative w-full px-8 py-12 mx-auto overflow-x-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg ">
        <p className={`${window.outerWidth<=300?"text-sm":"text-base"} mb-7 p-2 sm:p-4 text-blue-950 relative bottom-3 sm:bottom-6  sm:text-xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-b rounded-md from-blue-500 to-white opacity-85`}>Tool/Libs</p>
        <div className="absolute inset-0 w-full h-full  bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />

  <h1 className={cn("md:text-4xl text-xl text-white  relative z-20  mx-auto ")}>
  <div className="flex flex-row items-center justify-center w-full mx-auto ">

  <AnimatedTooltip items={people} />
</div>      </h1>
</div>
</div>
</Button>
  )
}

export default ToolAndLibrary
