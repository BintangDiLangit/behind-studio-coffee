"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({ className }: { className: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch(() => {
        console.log("Autoplay blocked, requiring user interaction");

        const handleInteraction = () => {
          video.play();
          document.removeEventListener("click", handleInteraction);
          document.removeEventListener("touchstart", handleInteraction);
        };

        document.addEventListener("click", handleInteraction);
        document.addEventListener("touchstart", handleInteraction);
      });
    }
  }, []);

  return (
    <div className={`${className} bg-gray-50 pb-5`}>
      <section
        className={`relative w-full overflow-hidden mt-16 font-helvetica-neue`}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-[80vh] max-h-[80vh] object-cover brightness-[0.85]"
        >
          <source src="/hero_ambience_converted.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[40%] w-full flex justify-center text-center hidden md:block"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white relative">
            more <span className="text-[#ff4d00] italic font-light">than</span>{" "}
            a studio
            {/* Tambahkan gambar di sudut tulisan "studio" */}
            <Image
              src="/orange-effect.svg"
              alt="Orange Glow"
              width={120}
              height={120}
              className="absolute right-[530px] top-[-40px] w-32 h-32 scale-150 opacity-80"
            />
          </h1>
        </motion.div>

        {/* Text Below Video */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="relative mx-auto pt-[85vh] text-black"
        >
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-center md:text-left w-full">
            <p className="text-sm md:text-sm max-w-md w-full md:w-auto">
              We create engaging social media content that drives growth and
              connects brands.
            </p>
            <p className="text-sm md:text-sm font-light w-full md:text-right">
              Based in,
              <br />
              <span className="font-normal">Yogyakarta</span>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
