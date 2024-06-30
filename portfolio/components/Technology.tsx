
"use client";
import React, { useEffect, useState } from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import Database from './Database'
import ProgrammingLanguages from './ProgrammingLanguages'
import ToolAndLibrary from './ToolAndLibrary'
import { WavyBackground } from "./ui/WavyBackground";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";



const Technology = () => {
  const [textSizeClass, setTextSizeClass] = useState("");

  useEffect(() => {
    // Check window.outerWidth on the client side
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
    };
  }, []);


  const words1 = [
    {
      text: "Tech Stack",
      className: "text-white dark:text-blue-500 text-2xl md:text-3xl lg:text-5xl",
      

    },

  ];
 
  const words2 = [
    {
      text: "Technical knowledge I have covered so far and have built projects on to improve my practical knowledge.",
      className: "text-white dark:text-blue-500 text-small-custom sm:text-xs md:text-sm lg:text-xl",

    },
  ];

  return (
    
    <div  className='target-section' id='Tech'>
 <WavyBackground className={`w-full h-full flex flex-col mb-5 sm:mb-14 md:mb-7 justify-center items-center bottom-24 sm:bottom-32 md:bottom-40 xl:bottom-48 ${window.outerWidth<360?"pt-10":""}`}>  

    <TypewriterEffectSmooth className={`w-fit text-white font-bold inter-var ${window.outerWidth<=370?"mt-0":""}  ${window.outerWidth>370&&window.outerWidth<451?"mt-5":""}`} words={words1}/>      
    
    
    <TypewriterEffectSmooth className=" w-fit  text-white font-normal inter-var" words={words2}/>      
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
