"use client";

import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slower playback for better ambiance
    }
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden mt-16 font-helvetica-neue">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full max-h-[60vh] object-cover brightness-[0.85]"
        poster="/video-poster.jpg"
      >
        <source src="/hero_ambience.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Title in Center */}
      <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
          more <span className="text-[#ff4d00] italic font-light">than</span> a
          studio
        </h1>
      </div>

      {/* Text Below Video */}

      <div className="relative mx-auto pt-[65vh] text-black">
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
      </div>
    </section>
  );
};

export default Hero;
