import React from "react";
import CTAButton from "./Button";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

const CodeBlocks = ({
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  textColor,
  backgroundGradient,
}) => {
  return (
    <div className="flex font-black ml-10 text-white my-20 justify-center items-center flex-row lg:gap-10 gap-10">
      {/* Section 1 (40%) */}
       <div className="w-[44%] -mt-5 lg:w-2/5 flex flex-col gap-8">
         <h1 className="text-3xl font-semibold">{heading}</h1>

         {/* Sub Heading */}
        <div className="text-neutral-500 text-base font-semibold w-[85%] -mt-3">
           <i>{subheading}</i>
        </div>

      </div>

      {/* Section 2 (60%) */}
      <div className="w-[56%] -mt-4 lg:w-3/5 flex flex-row py-3 text-sm leading-6 relative">
        {backgroundGradient}

        {/* Indexing */}
        <div className= "text-red-200 text-center flex flex-col w-[10%] select-none text-neutral-500 font-inter font-bold">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>

        {/* Codes */}
        <div className="w-[90%]  flex flex-col gap-2 font-edu-sa font-extrabold text-white">
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              background: "none",
              border: "none",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
