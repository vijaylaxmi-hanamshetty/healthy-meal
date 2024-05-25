import React from "react";
import { FaBus } from "react-icons/fa";
const cardDetails = [
  {
    text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    rotateClass: "text-primary",
    iconClass: "text-primary"
  },
  {
    text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    rotateClass: "text-secondary",
    iconClass: "text-secondary"
  },
  {
    text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    rotateClass: "text-primary",
    iconClass: "text-primary"
  },
  {
    text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    rotateClass: "text-secondary",
    iconClass: "text-secondary"
  }
];

const WhyChoose = () => {
  return (
    <>
      <div className="py-14 md:py-20 bg-gray-50">
        <div className="container">
          {/* heading section */}

          <h1 className="py-8 tracking-wider text-2xl font-semibold  text-dark text-center">
            {" "}
            why Choose us
          </h1>
          {/* card section */}
          <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
      {cardDetails.map((detail, index) => (
        <div key={index} className="text-center flex justify-center items-center flex-col gap-1 px-2">
          <p className="text-dark/70 font-semibold">
            {detail.text}
          </p>
          <p className={`text-5xl rotate-90 ${detail.rotateClass} text-center translate-x-5`}>
            ....
          </p>
          <FaBus className={`text-5xl ${detail.iconClass}`} />
        </div>
      ))}
    </div>
    </div>
    </div> 
      </div>
    </>
  );
};

export default WhyChoose;
