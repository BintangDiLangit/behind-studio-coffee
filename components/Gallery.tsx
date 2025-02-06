"use client";

import galleries from "@/galleries.json";
import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="relative max-w-full mx-auto overflow-hidden pt-32">
      <div className="flex w-[80%] space-x-2 animate-marquee flex-nowrap">
        {galleries.concat(galleries).map((gallery, index) => (
          <div
            key={index}
            className="flex-shrink-0 md:w-[20%] w-[50%] min-w-[200px]"
          >
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
