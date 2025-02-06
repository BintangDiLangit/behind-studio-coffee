import React from "react";

const Marquee = () => {
  return (
    <div className="w-full bg-[#11141A] py-3 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap gap-6">
        {/* Marquee Content (Repeated for Smooth Effect) */}
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className="text-white text-6xl md:text-8xl font-semibold flex items-center gap-4 font-helvetica-neue"
          >
            <span className="text-[#ff4d00] font-light">✱</span>{" "}
            {/* Asterisk */}
            <span className="font-bold">
              Be
              <span className="italic font-libre-baskerville font-light">
                hind
              </span>
            </span>
            <span className="font-bold">Studio</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
