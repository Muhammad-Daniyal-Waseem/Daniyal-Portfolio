
"use client";
import React, { useEffect, useState } from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import Database from './Database'
import ProgrammingLanguages from './ProgrammingLanguages'
import ToolAndLibrary from './ToolAndLibrary'
import { WavyBackground } from "./ui/WavyBackground";
import {   TypewriterEffect } from "./ui/TypewriterEffect";



const Technology = () => {
  const [textSizeClass, setTextSizeClass] = useState("");

  useEffect(() => {
    // Check window.outerWidth on the client side
    if(typeof (window) !== "undefined")
      {
    const updateTextSizeClass = () => {
      if (window.outerWidth < 450) {
        setTextSizeClass("text-small-custom");
      } else {
        setTextSizeClass("text-base text-center");
      }
    
    };
   updateTextSizeClass();

    // Update on resize
    window.addEventListener("resize", updateTextSizeClass);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateTextSizeClass);
    };}
  }, []);


  const words1 = [
    {
      text: "Tech",
      className: "text-white text-2xl md:text-3xl lg:text-5xl",
    },
    {
      text: "Stack",
      className: "text-white text-2xl md:text-3xl lg:text-5xl",
    },

  ];
 
  const words2 = [
    {
      text: "Technical",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "knowledge",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "I",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "have",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "covered",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "so",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "far",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "and",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "have",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "built",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "projects",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "on",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "to",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "improve",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "my",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "practical",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
    {
      text: "knowledge.",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },
  ];
  

  return (
    
    <div  className='target-section' id='Tech'>
 <WavyBackground className={`w-full h-full flex text-white flex-col mb-5 sm:mb-14 md:mb-7 justify-center items-center bottom-24 sm:bottom-32 md:bottom-40 xl:bottom-48 ${typeof (window) !== "undefined"&&window.outerWidth<360?"pt-10":""}`}>  

    <TypewriterEffect className={`w-fit text-white font-bold inter-var ${typeof (window) !== "undefined"&&window.outerWidth<=370?"mt-0":""}  ${typeof (window) !== "undefined"&&window.outerWidth>370&&window.outerWidth<451?"mt-5":""}`} words={words1}/>      
    
    
    <TypewriterEffect className=" w-fit  text-white font-normal inter-var" words={words2}/>      
    </WavyBackground>
    
      <Frontend></Frontend>
      <Backend></Backend>
      <Database></Database>
      <ProgrammingLanguages></ProgrammingLanguages>
      <ToolAndLibrary></ToolAndLibrary>
    </div>
  
  )
}

export default Technology
