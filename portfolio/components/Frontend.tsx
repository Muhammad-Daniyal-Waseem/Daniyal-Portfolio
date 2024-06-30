"use client"
import React from "react";
import { cn } from "@/utils/cn";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { Button } from "./ui/MovingBorder";
import Image from 'next/image';
import  react  from "../public/Logos/reactjs.png";
import  bootstrap  from "../public/Logos/bootstrap.png";
import  css  from "../public/Logos/css.png";
import  html  from "../public/Logos/html.png";
import  javascript  from "../public/Logos/javascript.png";
import  tailwindcss  from "../public/Logos/tailwindcss.png";
import  thymeleaf  from "../public/Logos/thymeleaf.png";
import  ReactRedux  from "../public/Logos/ReactRedux.png";
import  RestAPI  from "../public/Logos/RestAPI.png";

const people = [
  {
    id: 1,
    name: "React",
    image:react,
  },
  {
    id: 2,
    name: "Redux",
    image:ReactRedux,
  },
  {
    id: 3,
    name: "RestAPI",
    image:RestAPI,
  },
  {
    id: 4,
    name: "Html",
    image:html,
  },
  {
    id: 5,
    name: "CSS",
    image:css,
  },
  {
    id: 6,
    name: "Javascript",
    image:javascript,
  },
  {
    id: 7,
    name: "Thymeleaf",
    image:thymeleaf,
  },
  {
    id: 8,
    name: "Tailwind Css",
    image:tailwindcss,
  },
  {
    id: 9,
    name: "Bootstrap",
    image:bootstrap,
  },

];


const Frontend = () => {
  return (
    <Button className="w-full" duration={3100}>

    <div className={` target-section h-fit w-11/12 py-2 rounded-2xl`} >
        <div className="h-full relative w-full px-8 py-12 mx-auto 300  overflow-x-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg ">
        <p className={`${window.outerWidth<=300?"text-sm":"text-base"} mb-7 p-2 sm:p-4 text-blue-950 relative bottom-3 sm:bottom-6  sm:text-xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-b rounded-md from-blue-500 to-white opacity-85`}>Frontend Tech</p>
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

export default Frontend


