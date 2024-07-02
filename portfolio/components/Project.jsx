"use client";
import { CardBody, CardContainer, CardItem } from "./ui/CardContainer";
import React, { useEffect, useRef } from "react";
import CodeIcon from '@mui/icons-material/Code';
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { WavyBackground2 } from "./ui/WavyBackground2";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import Image from 'next/image';
import reactLogo from "../public/Logos/reactjs.png";
import reduxLogo from "../public/Logos/ReactRedux.png";
import htmlLogo from "../public/Logos/html.png";
import cssLogo from "../public/Logos/css.png";
import javascriptLogo from "../public/Logos/javascript.png";
import thymeleafLogo from "../public/Logos/thymeleaf.png";
import tailwindcssLogo from "../public/Logos/tailwindcss.png";
import bootstrapLogo from "../public/Logos/bootstrap.png";
import springboot from "../public/Logos/springboot.png";
import mui from "../public/Logos/mui.png";
import git from "../public/Logos/git.png";
import nodejs from "../public/Logos/nodejs.png";
import expressjs from "../public/Logos/expressjs.png";
import mysql from "../public/Logos/mysql.png";
import Java from "../public/Logos/Java.png";
import RestAPI from "../public/Logos/RestAPI.png";
import Umar from "../public/Personal/Umar.jpg";
import Khizar from "../public/Personal/Khizar.jpg";
import Huzaifa from "../public/Personal/Huzaifa.png.jpg";
import { AnimatedTooltip2 } from "./ui/AnimatedTooltip2";
import { AnimatedTooltip3 } from "./ui/AnimatedTooltip3";

const Project = () => {
  const videoRefs = useRef([]);
  const umar = "https://github.com/MuhammadUmar7831";
  const khizar = "https://github.com/muhammadkhizar89";
  const huzaifa = "https://github.com/HuzaifaRizwan1231";

  const project = [
    {
      title: "BakeNest",
      dec: "BakeNest, built with React.js, Tailwind CSS, Node.js, and MySQL, is a full-stack website with both admin and customer sides. Customers can check the menu, buy products, place orders, add items to the cart, and access more useful features.",
      video: "/videos/islam786.mp4",
      tec: [
        { id: 1, name: "React", image: reactLogo },
        { id: 2, name: "NodeJs", image: nodejs },
        { id: 3, name: "MySQL", image: mysql },
        { id: 4, name: "ExpressJs", image: expressjs },
        { id: 5, name: "Javascript", image: javascriptLogo },
        { id: 6, name: "HTML", image: htmlLogo },
        { id: 7, name: "CSS", image: cssLogo },
        { id: 8, name: "Tailwind CSS", image: tailwindcssLogo },
        { id: 9, name: "Mui", image: mui },
        { id: 10, name: "Git", image: git },
      ],
      contributors: [
        { id: 1, name: "Muhammad Khizar", image: Khizar, git: khizar },
        { id: 2, name: "Muhammad Umar", image: Umar, git: umar },
      ],
      code: "https://github.com/Muhammad-Daniyal-Waseem/BakeNest",
    },
    {
      title: "eCafé",
      dec: "Online store to order eatables for a local café. Integrated with admin panel. There are different roles in the app like Customer, Admin, Manager, and Clerk with different powers.",
      video: "/videos/islam786.mp4",
      tec: [
        { id: 1, name: "springboot", image: springboot },
        { id: 2, name: "Java", image: Java },
        { id: 3, name: "Javascript", image: javascriptLogo },
        { id: 4, name: "HTML", image: htmlLogo },
        { id: 5, name: "CSS", image: cssLogo },
        { id: 6, name: "Thymeleaf", image: thymeleafLogo },
        { id: 7, name: "Tailwind CSS", image: tailwindcssLogo },
        { id: 8, name: "Bootstrap", image: bootstrapLogo },
        { id: 9, name: "Git", image: git },
      ],
      contributors: [
        { id: 1, name: "Huzaifa Rizwan", image: Huzaifa, git: huzaifa },
        { id: 2, name: "Muhammad Umar", image: Umar, git: umar },
      ],
      code: "https://github.com/Muhammad-Daniyal-Waseem/Ecafe",
    },
    {
      title: "Islam786",
      dec: "Islam 786 is a fully responsive website created using React.js and Tailwind CSS. This website integrates various APIs to enhance its functionality.List of 114 Surahs with their text Audio recitation of the Quran Hadith from more than 7 books Prayer times functionality Islamic calendar Compilation of Allah's names.",
      video: "/videos/islam786.mp4",
      tec: [
        { id: 1, name: "React", image: reactLogo },
        { id: 2, name: "RestAPI", image: RestAPI },
        { id: 3, name: "Javascript", image: javascriptLogo },
        { id: 4, name: "HTML", image: htmlLogo },
        { id: 5, name: "CSS", image: cssLogo },
        { id: 6, name: "Tailwind CSS", image: tailwindcssLogo },
        { id: 7, name: "Git", image: git },
      ],
      contributors: [{ id: 1, name: "Muhammad Khizar", image: Khizar, git: khizar }],
      code: "https://github.com/Muhammad-Daniyal-Waseem/Islam786",
    },
  ];

  const words1 = [
    {
      text: "Recent",
      className: "text-white dark:text-blue-500 text-xl md:text-2xl lg:text-5xl ",
    },
    {
      text: "Projects",
      className: "text-white dark:text-blue-500 text-xl md:text-2xl lg:text-5xl ",
    },
  ];

  return (
    <div id="Project" className="h-fit target-section">
      <WavyBackground2
        className={` relative w-full h-full flex flex-col mb-5 sm:mb-14 md:mb-10 justify-center items-center bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 xl:bottom-36 ${
          typeof window !== 'undefined' && window.outerWidth < 360 ? "pt-10" : ""
        }`}
      >
        <TypewriterEffect
          className={` ${
            typeof (window) !== "undefined"&& window.outerWidth > 450 && window.outerWidth < 640 ? "mb-8" : ""
          } w-fit text-white font-bold inter-var ${
            typeof window !== 'undefined' && window.outerWidth <= 370 ? "mt-0" : ""
          } ${
            typeof window !== 'undefined' && window.outerWidth > 370 && window.outerWidth < 451 ? "mt-5" : ""
          }`}
          words={words1}
        />
      </WavyBackground2>
      <div className="flex flex-wrap relative bottom-20 justify-evenly">
      {project.map((proj, index) => (
  <CardContainer key={index} className="inter-var w-11/12 mx-auto sm:w-fit bg-slate-200 shadow-white ">
    <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black  text-white text-xs font-bold"
      >
        <div key={index} className="h-fit w-11/12 px-2 mx-auto rounded-lg shadow-white p-2">
          <section
            className="h-fit relative p-2"
            style={{
              backgroundSize: "400% 400%",
              backgroundPosition: "99.9995% 50%",
            }}
          >
            <video
              className="w-full object-fill h-full rounded-md"
            >
              <source src={proj.video} type="video/mp4" />
            </video>
          </section>
          <hr />
          <div className="h-fit text-white space-y-6">
            <div className="w-full h-fit text-2xl sm:text-4xl mt-3 font-bold playwrite">
              {proj.title}
            </div>
            <div className="w-full h-fit text-lg sm:text-lg text-wrap text-justify">
              {proj.dec}
            </div>
            <div className="w-full h-fit flex">
              <AnimatedTooltip2 items={proj.tec} />
            </div>
            <div className="w-full h-fit flex">
              <AnimatedTooltip3 items={proj.contributors} />
            </div>
          </div>
          <div className="w-full h-fit flex justify-center items-center gap-12 py-3 mt-2 bg-slate-300/85 text-black">
            <a href={proj.code} target="_blank" className="font-semibold">
              <CodeIcon className="mr-2" />
              Code
            </a>
            <a href="" target="_blank" className="font-semibold">
              <YouTubeIcon className="mr-2" />
              Demo Video
            </a>
          </div>
        </div>
      </CardItem>
    </CardBody>
  </CardContainer>
))}

      </div>
      <div className="flex flex-col items-center  text-white text-xl w-full h-60 ">
        <p className="font-semibold text-xl sm:text-3xl w-fit mt-8 h-fit p-3 bg-blue-500/85 rounded-md">
          View More
        </p>
        <div className="flex gap-8 p-4 mt-3">
          <a
            href="https://github.com/Muhammad-Daniyal-Waseem"
            target="_blank"
            className="flex items-center md:gap-2 sm:gap-1 md:text-2xl sm:text-lg"
          >
            <GitHubIcon />
            Github
          </a>
          <a
            href="https://youtube.com/@daniyalwaseem-8s?si=yyjVn4QRQwFlbHjo"
            target="_blank"
            className="flex items-center md:gap-2 sm:gap-1 md:text-2xl sm:text-lg"
          >
            <YouTubeIcon />
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
