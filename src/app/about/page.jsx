"use client";
import { motion, useAnimation, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";


const AboutPage = () => {
  const containerRef = useRef(null); // Ref for the scrolling container
  const nextSectionRef = useRef(null); // Reference to the next section for scrolling
  const controls = useAnimation(); // Animation controls for skills section
  const { scrollYProgress } = useScroll({ container: containerRef }); // Track scroll progress

  // Scroll to the next section function
  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Listen to scroll progress and trigger animations based on scroll position
  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (value > 0.2) { // Assuming the next section becomes visible after 20% scroll progress
        controls.start({ x: 0, opacity: 1 });
      } else {
        controls.start({ x: '-100vw', opacity: 0 });
      }
    });
  }, [controls, scrollYProgress]);
  return (
    <motion.div
      className="h-full overflow-auto" // Ensure this container can scroll
      style={{ maxHeight: "100vh" }} // Example of restricting height to enable internal scrolling
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      ref={containerRef}
    >
      <div className="flex flex-row justify-center items-center w-full h-full pt-4 px-4 gap-4">
        <div className="w-1/2 flex flex-col gap-12 items-center">
          <h1 className="font-bold text-2xl">Ole Dybedokken</h1>
            <p className="text-lg px-10">
            I am a Data Science Master&apos;s graduate from the University of Stavanger, now a startup entrepreneur and founder of Dybedokken AS. My passion lies in data science, AI, chatbots, and machine learning. With my startups, I&apos;ve generated over 4 million NOK in Q1 2024 alone, demonstrating my ability to turn innovative ideas into profitable realities. Speed and efficiency drive my work; I leverage cutting-edge tools like ChatGPT to accelerate production, ensuring my ventures stay ahead in today&apos;s fast-paced world.
            </p>
            <span className="italic">
              Done is better than perfect.            
            </span>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              onClick={scrollToNextSection} // Step 4: Attach the scroll function as an onClick handler
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
        </div>
        <div className="w-1/2 h-full flex justify-end items-end">
          <div className="w-full">
          <Image alt="Image of Ole Dybedokken" width={750} height={750} src="/profile_picture.png"></Image>
          </div>
        </div>
      </div>
        <div className="flex flex-col gap-12 justify-center px-10" ref={nextSectionRef}>
              {/* SKILL TITLE */}
              <motion.h1
                initial={{ x: '-100vw', opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                className="font-bold text-2xl "
              >
                SKILLS
              </motion.h1>
              {/* SKILL LIST */}
              <motion.div
                initial={{ x: '-100vw', opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                className="flex gap-4 flex-wrap w-1/2"
              >
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JavaScript
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  TypeScript
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  React.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Next.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  SCSS
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Tailwind CSS
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MongoDB
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  PostgreSQL
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Node.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Express.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Redux
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Langchain
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Python
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Framer Motion
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  WebGL
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Webpack
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Vite
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Docker
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  AWS
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Firebase
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Git
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Figma
                </div>
              </motion.div>
              {/* SKILL SCROLL SVG */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
    </motion.div>
  );
};

export default AboutPage;