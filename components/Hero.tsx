"use client";

import DashedLine from "@/components/DashedLine";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[600px] lg:min-h-[700px] flex flex-col justify-center">
      <div className="max-w-[750px] w-full mx-auto">
        <h3 className="text-xl -mt-12 px-4 lg:px-0 lg:text-3xl font-medium">
          Hi! I&apos;m
        </h3>
      </div>

      {/* <motion.div
        className="relative overflow-hidden -mt-[2rem] md:-mt-[6rem]"
        initial={{ height: 0 }} // Start from a smaller scale (or height)
        animate={{ height: "auto" }} // Animate to original size
        transition={{ duration: 1, ease: "easeInOut" }} // Duration and easing of the animation
      >
        <DashedLine position="top-[2.7rem] md:top-[7rem]" />
        <DashedLine position="top-[3.9rem] md:top-[10rem]" />
        <h1 className="text-white text-[7rem] text-center md:text-[18rem] font-bold">
          Akash
        </h1>
        <DashedLine position="top-[6.4rem] md:top-[16.7rem]" />
        <DashedLine position="top-[7.7rem] md:top-[19.9rem]" />
      </motion.div> */}
      <motion.div
        className="m-0 p-0 -mt-4 lg:mt-0  relative font-bold overflow-hidden"
        initial={{ height: 0 }} // Start from a smaller scale (or height)
        animate={{ height: "auto" }} // Animate to original size
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-center  text-[7rem] md:text-[10rem] lg:text-[15rem]  bg-clip-text  leading-[.72]">
          Akash
        </h1>
        <DashedLine position="top-0" />
        <DashedLine position="top-[1.2rem] lg:top-10" />
        <DashedLine position="bottom-[1.2rem] lg:bottom-10" />
        <DashedLine position="bottom-0" />
      </motion.div>
    </section>
  );
}
