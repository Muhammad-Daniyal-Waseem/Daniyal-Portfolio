"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { Button } from "./ui/MovingBorder";
import react from "../public/Logos/reactjs.png";
import bootstrap from "../public/Logos/bootstrap.png";
import css from "../public/Logos/css.png";
import html from "../public/Logos/html.png";
import javascript from "../public/Logos/javascript.png";
import tailwindcss from "../public/Logos/tailwindcss.png";
import thymeleaf from "../public/Logos/thymeleaf.png";
import ReactRedux from "../public/Logos/ReactRedux.png";
import RestAPI from "../public/Logos/RestAPI.png";

const people = [
  {
    id: 1,
    name: "React",
    designation: "Frontend Library",
    image: react.src,
  },
  {
    id: 2,
    name: "Redux",
    designation: "State Management",
    image: ReactRedux.src,
  },
  {
    id: 3,
    name: "RestAPI",
    designation: "API Design",
    image: RestAPI.src,
  },
  {
    id: 4,
    name: "Html",
    designation: "Markup Language",
    image: html.src,
  },
  {
    id: 5,
    name: "CSS",
    designation: "Style Sheet Language",
    image: css.src,
  },
  {
    id: 6,
    name: "Javascript",
    designation: "Programming Language",
    image: javascript.src,
  },
  {
    id: 7,
    name: "Thymeleaf",
    designation: "Template Engine",
    image: thymeleaf.src,
  },
  {
    id: 8,
    name: "Tailwind CSS",
    designation: "CSS Framework",
    image: tailwindcss.src,
  },
  {
    id: 9,
    name: "Bootstrap",
    designation: "CSS Framework",
    image: bootstrap.src,
  },
];

const Frontend = () => {
  


  const [textSize,settextSize]=useState<string>("");
  const [height,setheight]=useState<string>("");
  useEffect(() => {
    
    if(typeof (window) !== "undefined")
      {
    const handleResize = () => {
      if(window.outerWidth<350)
        {
          setheight('h-[340px]')
        }
      else if(window.outerWidth<500)
      {
        setheight('h-[300px]')
      }
      else{
      setheight('h-[200px] ')

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
  <div className="target-section h-fit w-11/12 py-2 rounded-2xl">
    <div className={` ${height} sm:h-[340px] md:h-96 relative w-full px-8 py-12 mx-auto bg-slate-900 flex flex-col items-center justify-center rounded-lg`}>
      <p className={`${textSize} mb-7 p-2 sm:p-4 text-blue-950 relative bottom-3 sm:bottom-6 sm:text-xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-b rounded-md from-blue-500 to-white opacity-85`}>
            Frontend Tech
          </p>
          <div className="absolute inset-0 w-full  overflow-y-auto  bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mx-auto")}>
            <div className="flex flex-row items-center justify-center w-full mx-auto ">
              <AnimatedTooltip items={people} />
            </div>
          </h1>
        </div>
      </div>
    </Button>
  );
};

export default Frontend;
