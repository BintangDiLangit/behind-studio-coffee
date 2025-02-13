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

interface OfferProps {
  className?: string;
}

const Offer: React.FC<OfferProps> = ({ className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className={`relative max-w-full mx-auto font-helvetica-neue min-h-screen pt-24 ${className}`}
    >
      {/* Description */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-medium space-y-2">
          <span className="italic text-gray-900 font-light block">
            ( What )
          </span>
          <span className="block">
            WE DO BEST <span className="text-gray-400 text-lg">[02]</span>
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          We offer a full range of creative services designed to meet your
          brand&apos;s unique needs and goals.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="w-full">
        {services.map((service, index) => (
          <div key={service.id} className="border-b border-gray-200">
            <motion.button
              className="w-full flex justify-between items-center py-8 text-left group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              initial={false}
            >
              <div className="flex items-center gap-6">
                <motion.span
                  className="text-gray-900 text-2xl font-light"
                  animate={{
                    y: openIndex === index ? 120 : 0,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  {String(index + 1).padStart(2, "0")}.
                </motion.span>
                <span className="ml-20 text-2xl md:text-3xl font-light group-hover:text-gray-600 transition-colors font-medium">
                  {service.title}
                </span>
              </div>
              <motion.div
                animate={{ rotate: openIndex === index ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400 group-hover:text-gray-600"
              >
                <ArrowOutward />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden ml-14"
                >
                  <div className="text-gray-700 ml-20">
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
      </div>
    </section>
  );
};

export default Offer;
