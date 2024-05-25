import React from "react";
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    icon: <IoLocationSharp className="text-5xl text-white" />,
    text: "#92, 3rd main Virgo Nagar Post, Seegehalli, Bengaluru, Karnataka 56049"
  },
  {
    icon: <MdEmail className="text-5xl text-white" />,
    text: "contact@company.com"
  },
  {
    icon: <IoCallSharp className="text-5xl text-white" />,
    text: "+91 98765 43210"
  }
];

const Footer = () => {
  return (
    <div className="container bg-gradient-to-b from-primary to-primary rounded-xl mt-20">
      <div>
        <h1 className="py-10 text-3xl font-bold text-yellow text-center text-white">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="text-center space-y-4 text-white bg-pink rounded-2xl p-6"
            >
              <div className="flex justify-center">
                {detail.icon}
              </div>
              <p  className=" text-2xl">{detail.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
