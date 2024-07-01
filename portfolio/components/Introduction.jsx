"use client";
import React from 'react';
import Image from 'next/image';
import { SparklesCore } from "./ui/SparklesCore";
import { FlipWords } from "./ui/FlipWords";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Introduction = () => {
  const testimonials = [
    {
      name: " -  Daniyal Waseem -  Daniyal Waseem -  Daniyal Waseem -  Daniyal Waseem -  Daniyal Waseem   ",
    },]
  const words = ["Software Engineer.", "MERN Stack Web Developer.", "Spring Boot Developer."];

  return (
    <div id='Intro' className='h-fit target-section text-white flex  mb-5  '>
      <div className='w-full h-full'>
        <div className="h-fit w-5/6 mx-auto bg-slate-700 mt-7 rounded-lg  flex flex-col pt-6 sm:pt-16 items-center justify-center overflow-hidden shadow-white">
          <BackgroundGradient className="rounded-full p-2 bg-slate-950 ">
            <div className="relative w-28 h-28 sm:w-48 sm:h-48">
              <Image
                src="/Personal/Daniyal.png"
                alt="Experience"
                layout="fill" // Ensures the image fills the parent container
                objectFit="cover" // Ensures the image covers the container without stretching
                className="rounded-full bg-slate-950"
              />
            </div>
          </BackgroundGradient>
          <h1 className="md:text-4xl sm:text-2xl lg:text-5xl font-bold text-center text-slate-950 dark:text-neutral-400 relative z-20">
            <div className=" font-bold text-white mt-5">
              <InfiniteMovingCards
               items={testimonials}
               direction="right"
               speed="slow"
               className='text-center'>
            </InfiniteMovingCards>
            </div>
            <span className='sm:text-xl  md:text-3xl lg:text-4xl'>I am a passionate </span><br /><FlipWords words={words} /> 
          </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.5}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
