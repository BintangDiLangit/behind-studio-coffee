import React from "react";

const About = () => {
  return (
    <section className="relative max-w-full mx-auto font-helvetica-neue h-[80vh] min-h-screen">
      {/* Title */}
      <h2 className="text-5xl font-medium mb-4">
        <span className="italic text-gray-900 font-light font-libre-baskerville">
          ( Behind )
        </span>{" "}
        <br />
        EVERY GREAT BRAND <span className="text-gray-400 text-lg">[01]</span>
      </h2>

      {/* Description */}
      <div className="max-w-5xl ml-auto pr-12 mt-20">
        <p className="text-lg md:text-xl text-gray-700 text-left">
          Behind Studio is a Yogyakarta-based creative studio specializing in
          strategic content and stunning visuals. We help brands reach their
          target audience, grow their presence, and stand out in the digital
          world. With a focus on creativity, strategy, and innovation, we’re
          here to bring your brand’s story to life and deliver measurable
          results.
        </p>
        {/* Stats */}
        <div className="flex flex-row mt-12">
          <div className="border-gray-300 border-solid border-gray-300 border-l-[1px] border-solid box-border flex flex-col items-center justify-start pt-9 px-[113px] pb-[502px] gap-1 max-w-full">
            <div className="relative text-6xl font-bold">2+</div>
            <div className="relative">
              <p className="m-0">Years of</p>
              <p className="m-0">Experience</p>
            </div>
          </div>
          <div className="flex-1 border-gray-300 border-solid border-gray-300 border-l-[1px] border-solid box-border flex flex-col items-center justify-center py-[269px] px-5 min-w-[220px] max-w-full">
            <div className="flex flex-col items-start justify-center gap-1">
              <div className="relative text-6xl font-bold">40+</div>
              <div className="relative">
                <p className="m-0">Project</p>
                <p className="m-0">Completed</p>
              </div>
            </div>
          </div>
          <div className="flex-[0.5574] border-gray-300 border-r-[1px] border-solid border-gray-300 border-l-[1px] border-solid box-border flex flex-col items-center justify-end pt-[502px] pb-9 pl-[85px] pr-[86px] min-w-[220px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-center gap-1">
              <div className="relative text-6xl font-bold">15+</div>
              <div className="relative">
                <p className="m-0">Satisfied</p>
                <p className="m-0">Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
