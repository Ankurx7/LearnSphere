import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span className="bg-gradient-to-r from-[#FF7E5F] via-[#FFBF00] to-[#FF7E5F] text-transparent bg-clip-text font-extrabold">
      {" "} 
      {text}
    </span>
  );
};

export default HighlightText;
