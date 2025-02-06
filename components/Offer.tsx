"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowOutward from "./ui/arrow-outward";

const services = [
  {
    id: 1,
    title: "Social Media Optimization",
    description:
      "Naoto Studio crafts compelling brand identities that resonate. Distinctive logos, typography, and visual narratives capture essence and fuel connection.",
    images: ["/services/image-0.png", "/services/image-1.png"],
  },
  {
    id: 2,
    title: "Branding & Campaign",
    description:
      "Naoto Studio crafts compelling brand identities that resonate. Distinctive logos, typography, and visual narratives capture essence and fuel connection.",
    images: ["/services/image-0.png", "/services/image-1.png"],
  },
  {
    id: 3,
    title: "Visual Identity",
    description:
      "Naoto Studio crafts compelling brand identities that resonate. Distinctive logos, typography, and visual narratives capture essence and fuel connection.",
    images: ["/services/image-0.png", "/services/image-1.png"],
  },
  {
    id: 4,
    title: "Digital Content",
    description:
      "Naoto Studio crafts compelling brand identities that resonate. Distinctive logos, typography, and visual narratives capture essence and fuel connection.",
    images: ["/services/image-0.png", "/services/image-1.png"],
  },
  {
    id: 5,
    title: "Video Photo Production",
    description:
      "Naoto Studio crafts compelling brand identities that resonate. Distinctive logos, typography, and visual narratives capture essence and fuel connection.",
    images: ["/services/image-0.png", "/services/image-1.png"],
  },
  {
    id: 6,
    title: "Digital ADS Management",
    description:
      "Naoto Studio crafts compelling brand identities that resonate. Distinctive logos, typography, and visual narratives capture essence and fuel connection.",
    images: ["/services/image-0.png", "/services/image-1.png"],
  },
];

const Offer = ({ className }: { className: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      id="services"
      className={`relative max-w-full mx-auto font-helvetica-neue min-h-screen pt-24 ${className}`}
    >
      {/* Description */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-medium mb-4 md:mb-8 max-w-sm">
          <span className="italic text-gray-900 font-light font-libre-baskerville">
            ( What )
          </span>{" "}
          <br />
          WE DO BEST <span className="text-gray-400 text-lg">[02]</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          We offer a full range of creative services designed to meet your
          brand&rsquo;s unique needs and goals.
        </p>
      </div>
      {services.map((service, index) => (
        <div key={service.id} className="border-b border-gray-300">
          {/* Header (Clickable) */}
          <button
            className="w-full flex justify-between items-center py-4 text-left text-lg font-medium"
            onClick={() => toggleAccordion(index)}
          >
            <span className="flex items-center gap-4">
              <span className="text-gray-600">
                {String(index + 1).padStart(2, "0")}.
              </span>
              <span className="hover:text-gray-900 transition">
                {service.title}
              </span>
            </span>

            {/* Arrow Icon (Rotates when open) */}
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowOutward />
            </motion.span>
          </button>

          {/* Expandable Content with Framer Motion */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-4 text-gray-700">
                  {service.description && (
                    <p className="mb-4">{service.description}</p>
                  )}

                  {/* Display images if available */}
                  {service.images && (
                    <div className="flex gap-4">
                      {service.images.map((img, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={img}
                          alt={service.title}
                          width={200}
                          height={150}
                          className="rounded-md shadow-md"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default Offer;
