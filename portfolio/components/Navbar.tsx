"use client"
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [color, setcolor] = useState("");
  const [color2, setcolor2] = useState("");
  const [color3, setcolor3] = useState("");
  const [color4, setcolor4] = useState("");
  const [color5, setcolor5] = useState("");
  const [color6, setcolor6] = useState("");
  const [windows, setwindows] = useState(0);
  const [variants, setvariants] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('Navbar');
      const elements = document.querySelectorAll('.target-section'); // Query all elements with class 'target-section'
      const windowHeight = window.innerHeight;
      setwindows(window.outerWidth)
      const top2 = nav.getBoundingClientRect().top;
      if (top2 <= windowHeight && top2 >= 0) {
        setIsVisible(false);
        return;
      } 
  
      elements.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        const id = element.id;
      

        // Check if element is in view
        if (top <= windowHeight && top >= 0) {
          setIsVisible((prev) => ({
            ...prev,
            [id]: false // Set visibility for specific element ID to true
          }));
        } else {
          setIsVisible((prev) => ({
            ...prev,
            [id]: true // Set visibility for specific element ID to false
          }));
        }
      });
    };

    handleScroll(); // Initial check

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [isOpen, setIsOpen] = useState(false);

  return (
    <div  id='Navbar'>
      {!isOpen &&  
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: Object.values(isVisible).some(visible => visible) ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{ backgroundColor: '#54F4E3' }}
          whileTap={{ backgroundColor: '#54F4E3' }}
          disabled={!Object.values(isVisible).some(visible => visible)} // Disable button if no section is visible
          className={`${windows<650?"p-2":"p-4"}  md:p-6 rounded-full btncolor fixed right-5 top-10 z-50`}
          onClick={() => setIsOpen(true)}
          style={{ cursor: Object.values(isVisible).some(visible => visible) ? 'pointer' : 'default' }}
        >
          <motion.div className=' z-50'>
            <MenuIcon  className="text-gray-700 z-50" />
          </motion.div>
        </motion.button>
      }
      {isOpen && 
        <motion.aside
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        animate={{ opacity: 1, ...variants[isOpen ? 'open' : 'closed'] }}
          id="default-sidebar"
          className="fixed top-0 right-0 z-50 w-4/12 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-slate-900"
          aria-label="Sidebar"
        >
          <div className='flex justify-end w-full'>
            <motion.button
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className={` ${windows<650?"mr-2":'mr-8'} mt-4`}
            >
              <IconButton className={` ${window.outerWidth<650?"p-1":" "} mt-4 sm:p-4 lg:p-6`}   style={{ backgroundColor: '#455ce9' }} aria-label="close">
                <CloseIcon className='text-white' />
              </IconButton>
            </motion.button>
          </div>
          <div className={`  ${windows<650?" ":"ml-6 px-3"} h-full  py-4 overflow-y-auto`}>
            <p className={` ${windows<650?"ml-1":"ml-8"} text-xs permanent-marker-regular`} style={{ color: '#818283' }}>NAVIGATION</p>
            <hr className={` ${windows<650?"mt-3 ml-1":"ml-8  mt-4"} `} style={{ border: 'solid 1px #818283' }} />       
            <ul className={`space-y-2 font-normal ${windows>350&&windows<640?"text-lg":"text-sm "} mr-4 sm:text-xl  mt-8 md:text-3xl lg:text-4xl xl:text-5xl`} style={{ color: '#ffffff' }}>
              <li className="flex">
                <a href="#Intro" className="flex items-center pt-2 rounded-lg gap-4">
                  <span style={{backgroundColor:color}} className={`solidCircle ${windows<650?"h-2 w-2":" h-3 w-3"}`}></span>
                 <motion.span
                    onHoverStart={() => setcolor("white")}
                    onHoverEnd={() => setcolor("")}
                 >Home</motion.span> 
                </a>
              </li>
              <li className="flex">
                <a href="#About" className="flex items-center pt-2 rounded-lg gap-4">                  
                  <span style={{backgroundColor:color2}} className={`solidCircle ${windows<650?"h-2 w-2":" h-3 w-3"}`}></span>
                 <motion.span
                    onHoverStart={() => setcolor2("white")}
                    onHoverEnd={() => setcolor2("")}
                 >About</motion.span> 
                </a>
              </li>
              <li className="flex">
                <a href="#Tech" className="flex items-center pt-2 rounded-lg gap-4">
                  <span style={{backgroundColor:color3}} className={`solidCircle ${windows<650?"h-2 w-2":" h-3 w-3"}`}></span>
                 <motion.span
                    onHoverStart={() => setcolor3("white")}
                    onHoverEnd={() => setcolor3("")}
                 >Tech Stack</motion.span> 
                </a>
              </li>
              <li className="flex">
                <a href="#Project" className="flex items-center pt-2 rounded-lg gap-4">
                  <span style={{backgroundColor:color4}} className={`solidCircle ${windows<650?"h-2 w-2":" h-3 w-3"}`}></span>
                 <motion.span
                    onHoverStart={() => setcolor4("white")}
                    onHoverEnd={() => setcolor4("")}
                 >Projects</motion.span> 
                </a>
              </li>
              <li className="flex">
                <a href="#Connect" className="flex items-center pt-2 rounded-lg gap-4">
                  <span style={{backgroundColor:color5}} className={`solidCircle ${windows<650?"h-2 w-2":" h-3 w-3"}`}></span>
                 <motion.span
                    onHoverStart={() => setcolor5("white")}
                    onHoverEnd={() => setcolor5("")}
                 >Contact</motion.span>
                </a>
              </li>
              <li className="flex">
                <a href="/Personal/Resume_Muhammad_Daniyal_Waseem.docx" className="flex items-center pt-2 rounded-lg gap-4"         
                download
                >
                  <span style={{backgroundColor:color6}} className={`solidCircle ${windows<650?"h-2 w-2":" h-3 w-3"}`}></span>
                 <motion.span
                    onHoverStart={() => setcolor6("white")}
                    onHoverEnd={() => setcolor6("")}
                 >Resume</motion.span>
                </a>
              </li>
            </ul>
            <div className={`${windows<650?"ml-2 mt-8":"mt-10 ml-8"}`}>
              <p className='mb-2' style={{ color: '#818283' }}>socials</p>
              <a href='https://www.linkedin.com/in/daniyal-waseem-039352249' style={{ color: '#fdfdfd' }} >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.aside>
      }
    </div>
  );
};

export default Navbar;
