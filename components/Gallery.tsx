"use client";

import galleries from "@/galleries.json";
import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="relative max-w-full mx-auto h-[80vh] overflow-hidden pt-32">
      {/* <div className="h-50"></div> */}
      {/* Marquee Wrapper */}
      <div className="flex w-[80%] space-x-2 animate-marquee">
        {galleries.concat(galleries).map((gallery, index) => (
          <div key={index} className="flex-shrink-0 w-[20%]">
            <Image
              src={gallery.image}
              alt={`Gallery Image ${index}`}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
