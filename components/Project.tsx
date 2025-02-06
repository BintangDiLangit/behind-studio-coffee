"use client";

import React, { useState } from "react";
import ArrowOutward from "./ui/arrow-outward";
import Image from "next/image";

const projects = [
  {
    id: 1,
    category: "Visual Identity",
    title: "Tjahaja Brewhouse",
    image: "/projects/Image Item Project-0.png", // Replace with actual image path
  },
  {
    id: 2,
    category: "Visual Identity",
    title: "Sorea",
    image: "/projects/Image Item Project-1.png",
  },
  {
    id: 3,
    category: "Branding",
    title: "Kaktus Meeting Room",
    image: "/projects/Image Item Project-2.png",
  },
  {
    id: 4,
    category: "Advertising",
    title: "Set Back & Roast",
    image: "/projects/Image Item Project-3.png",
  },
];

const Project = ({ className }: { className: string }) => {
  return (
    <section
      id="project"
      className={`relative max-w-full mx-auto font-helvetica-neue min-h-screen pt-24 ${className}`}
    >
      {/* Description */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-medium mb-4 md:mb-8 max-w-sm">
          <span className="italic text-gray-900 font-light font-libre-baskerville">
            ( Selected )
          </span>{" "}
          <br />
          Project <span className="text-gray-400 text-lg">[03]</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          Our portfolio features diverse projects that showcase our creativity
          and innovation, transforming ideas into impactful visual stories for
          brands.
        </p>
        <div>
          <button className="border border-gray-800 text-sm px-4 py-2 rounded-full flex items-center gap-2 text-gray-900 hover:bg-gray-100 transition">
            VIEW ALL{" "}
            <span>
              {" "}
              <ArrowOutward width={10} height={10} />
            </span>
          </button>
        </div>
      </div>
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        {projects.map((project) => (
          <div key={project.id} className="relative group">
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />

            {/* Project Info */}
            <div className="mt-4">
              <p className="text-gray-500 italic text-sm">
                / {project.category}
              </p>
              <h3 className="text-xl font-medium">{project.title}</h3>
              <button className="border border-gray-800 text-xs px-3 py-1 mt-2 rounded-full flex items-center gap-2 text-gray-900 hover:bg-gray-100 transition">
                VIEW <ArrowOutward width={8} height={8} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
