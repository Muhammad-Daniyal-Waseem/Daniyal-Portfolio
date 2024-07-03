
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
  const [windowSize, setWindowSize] = useState(0);

  const setSize = () => {
    if (typeof window !== "undefined") {
      setWindowSize(window.outerWidth);
    }
  };

  useEffect(() => {
    setSize(); // Set the size on component mount
    window.addEventListener("resize", setSize); // Update size on window resize

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

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
      text: "far.",
      className: "text-white text-small-custom sm:text-xs md:text-sm lg:text-xl",
    },

  ];
  

  return (
    
    <div  className='target-section h-fit' id='Tech'>
 <WavyBackground className={`w-full h-full flex text-white flex-col mb-5 sm:mb-14 md:mb-7 justify-center items-center bottom-24 sm:bottom-32 md:bottom-40 xl:bottom-48 ${windowSize<360?"pt-10":""}`}>  

    <TypewriterEffect className={`w-fit text-white font-bold inter-var ${windowSize<=400?"mt-0":""}  ${windowSize>400&&windowSize<451?"mt-5":""}`} words={words1}/>      
    
    
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
