"use client"
import { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { ContainerScroll } from "./ui/ContainerScroll";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";
import PersonIcon from '@mui/icons-material/Person';
import { motion } from "framer-motion";

import Image from "next/image";

const About = () => {
  const [iconSize, setIconSize] = useState({ fontSize: "20px" }); // Default size
  const setSize = () => {
    if (window.outerWidth >= 1024) {
      setIconSize({ fontSize: "60px" });
    } else if (window.outerWidth >= 768 && window.outerWidth < 1024) {
      setIconSize({ fontSize: "48px" });
    } else if (window.outerWidth >= 640 && window.outerWidth < 768){
      setIconSize({ fontSize: "30px" }); // Default size for smaller screens
    }
    else{
        setIconSize({ fontSize: "28px" }); // Default size for smaller screens

    }
  };

  useEffect(() => {
    setSize(); // Set the size on component mount
    window.addEventListener('resize', setSize); // Update size on window resize

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', setSize);
    };
  }, []);

  // const downloadDocument = () => {
  //   // Replace 'path_to_your_document.pdf' with the actual path or URL of your document
  //   // const documentUrl = 'path_to_your_document.pdf';
  //   // const anchorElement = document.createElement('a');
  //   // anchorElement.href = documentUrl;
  //   // anchorElement.download = 'document.pdf';
  //   // anchorElement.click();
  // };

  return (
    <div id="About" className="h-fit w-full sm:w-3/4 mx-auto">
      <div className=" mx-auto w-full h-full ">
        <ContainerScroll>
        <div className={`flex justify-center items-center gap-2 text-white h-fit mb-2`}>
            <PersonIcon style={iconSize}></PersonIcon>
              <h1 className=" text-xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold  ">About Me</h1>
            </div>
          <div className="flex gap-4 w-full">
          <span className={`text-wrap text-justify sm:text-base ${window.outerWidth<640?"text-sm":""} ${window.outerWidth<350?"text-xs":""}`}>
          I am an undergraduate student of Software Engineering. Initially, I started coding in C++ and completed <span className="text-blue-500 font-bold">PF (Programming Fundamentals)</span>, <span className="text-blue-500 font-bold">OOP (Object-Oriented Programming)</span>, and <span className="text-blue-500 font-bold"> DSA (Data Structures and Algorithms)</span> concepts in <span className="text-blue-500 font-bold">C++</span>. I have also built many basic projects using C++ Windows forms. Now, I am interested in <span className="text-blue-500 font-bold">web development</span>,<span className="text-blue-500 font-bold">artificial intelligence</span> , and other emerging technologies. I am always passionate about improving my problem-solving skills and gaining knowledge to gain more experience. I have more than a year of experience in web development and have completed 10+ projects using my technical knowledge.</span>
          </div>
          <span className=" flex justify-end items-center mt-4">
            <BackgroundGradientAnimation>
              <a href="/Personal/Resume_Muhammad_Daniyal_Waseem.docx" download>
          <motion.button 
             type="button" className="target-section h-24 w-24 m-4  bg-gradient-to-br hover:from-pink-800 hover:via-blue-800 hover:to-white from-white via-blue-800 to-pink-800 text-white font-bold rounded-full shadow-2xl hover:shadow-xl ">
  Download CV
</motion.button>
</a>
</BackgroundGradientAnimation>

          </span>
        </ContainerScroll>
      </div>
    </div>
  );
};

export default About;
