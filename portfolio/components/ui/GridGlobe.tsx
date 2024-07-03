"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import Image from 'next/image';


const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  const [windowwidth, setwindowwidth] = useState(0);
  const [iconSize, setIconSize] = useState({ fontSize: "20px" }); // Default size
  const setSize = () => {
    if (window.outerWidth>= 1024) {
      setIconSize({ fontSize: "80px" });
      return;
    } else if (window.outerWidth >= 768 && window.outerWidth < 1024) {
      setIconSize({ fontSize: "60px" });
      return;
    } else if (window.outerWidth >= 640 && window.outerWidth < 768) {
      setIconSize({ fontSize: "50px" }); // Default size for smaller screens
      return;
    } else {
      setIconSize({ fontSize: "40px" }); // Default size for smaller screens
      return;
    }
  };

  useEffect(() => {
    setwindowwidth(window.outerWidth);

    setSize(); // Set the size on component mount
    window.addEventListener("resize", setSize); // Update size on window resize

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <>
      <hr
        className={`mx-auto w-5/6 border-t-2 border-blue-950 relative  sm:top-24 md:top-40 ${
           windowwidth < 640 ? "top-16" : ""
        }`}
      />
      <GroupWorkIcon
        className={`relative md:mt-3  lg:mt-0 sm:top-16 md:top-28 mt-2 sm:left-24 md:left-40 z-20 text-white ${
          windowwidth < 640 ? "top-9 left-16" : " "
        }`}
        style={iconSize}
      />

      <div className="flex flex-row items-center justify-center pt-20 h-screen  md:h-auto  bg-transparent relative w-full">
        <div
          className={`max-w-7xl mx-auto w-full relative overflow-hidden h-full ${
            windowwidth< 640 ? "pt-4" : ""
          } md:h-[40rem] px-4`}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            className={`div flex items-center justify-center z-40  relative md:top-20  ${
              windowwidth < 640 ? " bottom-4" : ""
            }`}
          >
            <Image
              src="/Personal/Daniyal.png"
              alt=""
              height={100}
              width={100}
              className="border-2 border-white p-2 w-14 h-14 rounded-full mr-5 object-cover"
            />
         <span className="text-center sm:text-2xl md:text-5xl font-bold text-white">
  Let&apos;s work 
</span>
<span className="text-center sm:text-2xl md:text-5xl font-bold text-blue-500 ml-3">
  together
</span>

          </motion.div>
          <motion.div
            className={`text-white flex justify-center items-center relative sm:top-14 md:top-44 z-30 flex-col ${
              windowwidth< 640 ? " top-6" : ""}`}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <div className={`flex gap-28 ${windowwidth < 640 ? "" : ""}`}>
              <a
                href="https://github.com/Muhammad-Daniyal-Waseem"
                target="_blank"
                className="flex items-center md:gap-2 sm:gap-1 md:text-2xl sm:textlg"
              >
                <GitHubIcon />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/daniyal-waseem-039352249"
                target="_blank"
                className="flex items-center md:gap-2 sm:gap-1 md:text-2xl sm:text-lg"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
            <div
              className={`flex gap-28 md:mt-10 sm:mt-3 ${
                windowwidth < 640 ? " mt-4" : ""
              }`}
            >
              <a
                href="https://youtube.com/@daniyalwaseem-8s?si=yyjVn4QRQwFlbHjo"
                target="_blank"
                className="flex items-center md:gap-2 sm:gap-1 md:text-2xl sm:textlg"
              >
                <YouTubeIcon />
                Youtube
              </a>
              <a
                href="tel:+923284180056"
                target="_blank"
                className="flex items-center md:gap-2 sm:gap-1 md:text-2xl sm:textlg"
              >
                <PhoneIcon />
                Phone
              </a>
            </div>
            <div
              className={`flex justify-center w-screen flex-wrap  items-center gap-6 sm:gap-28 md:mt-10 sm:mt-5 ${
                windowwidth< 640 ? " mt-4" : ""
              }`}
            >
              <a
                href="https://wa.me/923320429421"
                target="_blank"
                className="flex items-center md:gap-2 sm:gap-1 md:text-2xl sm:textlg"
              >
                <WhatsAppIcon />
                Whatsapp
              </a>
              <a
                href="mailto:daniyalwaseem0808@gmail.com"
                className="flex items-center md:gap-2 sm:gap-1 md:text-2xl sm:text-lg"
              >
                <EmailIcon />
                Email
              </a>
              <a
                href="https://www.instagram.com/dani_yalwaseem88?igsh=MWhsNTExanhka3F6NA== "
                target="_blank"
                className="flex items-center md:gap-2 sm:gap-1 md:text-2xl sm:textlg"
              >
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </motion.div>
          <div className="absolute w-full bottom-0 inset-x-0 h-20 bg-gradient-to-b pointer-events-none select-none from-transparent to-black z-30  " />
          <div className="absolute w-full h-72 md:h-full z-10 bottom-1/3 sm:bottom-1  ">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap w-screen h-14 bg-blue-700">
        <p
          className={`text-wrap text-center tracking-wider  ${
            windowwidth < 640 ? " text-sm" : ""
          } sm:text-base md:text-xl text-white font-bold `}
        >
          &copy; MUHAMMAD DANIYAL WASEEM . All RIGHTS RESERVED.
        </p>
      </div>
    </>
  );
}
