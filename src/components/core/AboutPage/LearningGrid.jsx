import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridData = [
  {
    title: "Accessible Learning for Everyone",
    highlight: "Globally",
    description:
      "LearnSphere collaborates with top universities and industry leaders to offer accessible, high-quality online education to learners everywhere.",
    buttonText: "Discover More",
    buttonLink: "/discover",
    background: "bg-gradient-to-r from-purple-600 to-blue-700",
  },
  {
    title: "Industry-Aligned Curriculum",
    description:
      "Our courses are designed in collaboration with industry experts to ensure relevance and applicability, helping you stay ahead in your career.",
    background: "bg-gradient-to-r from-pink-600 to-red-700",
  },
  {
    title: "Innovative Learning Methods",
    description:
      "Experience a blend of interactive content, hands-on projects, and real-world case studies, designed to provide a comprehensive learning experience.",
    background: "bg-richblue-700",
  },
  {
    title: "Recognized Certifications",
    description:
      "Earn certificates from LearnSphere and our prestigious partners, recognized by employers worldwide for their value and credibility.",
    background: "bg-yellow-600",
  },
];

const LearningGrid = () => {
  return (
    <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-12 px-6">
      {LearningGridData.map((card, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-lg ${card.background} text-white flex flex-col justify-between`}
        >
          <div>
            <h2 className="text-2xl font-bold">
              {card.title}
              {card.highlight && (
                <span className="block text-3xl">
                  <HighlightText text={card.highlight} />
                </span>
              )}
            </h2>
            <p className="mt-4 text-lg">{card.description}</p>
          </div>
          {card.buttonText && (
            <div className="mt-6">
              <CTAButton active={true} linkto={card.buttonLink}>
                {card.buttonText}
              </CTAButton>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearningGrid;
