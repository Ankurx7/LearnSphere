import React from "react";
import { Link } from "react-router-dom";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Terms of Service", "Contact"];
const Resources = [
  "Blog",
  "Guides",
  "Case Studies",
  "Tutorials",
  "E-books",
  "Webinars",
  "Newsletters",
];
const Services = ["Consulting", "Workshops", "Training", "Custom Solutions"];
const Community = ["Events", "Networking", "Mentorship", "Collaborations"];

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:gap-12 border-b border-gray-700 pb-8 mb-8">
          {/* Section 1 */}
          <div className="flex flex-col lg:w-1/4 mb-8 lg:mb-0 border-r border-white">
            <h1 className="text-white text-2xl font-semibold mb-4">About Us</h1>
            <p className="text-gray-400 text-opacity-10 mb-6">
              At LearnSphere, we are 
              dedicated to helping you grow by offering a wide range of resources 
              and services tailored to your needs. Join us in exploring new 
              opportunities for learning and 
              development.
            </p>
            <div className="flex gap-4 mt-4">
              <FaFacebook className="text-xl cursor-pointer hover:text-red-300 transition-colors duration-200" />
              <FaGoogle className="text-xl cursor-pointer hover:text-red-300 transition-colors duration-200" />
              <FaTwitter className="text-xl cursor-pointer hover:text-red-300 transition-colors duration-200" />
              <FaInstagram className="text-xl cursor-pointer hover:text-red-300 transition-colors duration-200" />
            </div>
          </div>

          <div className="flex flex-col lg:w-1/4 ml-20 mb-8 lg:mb-0">
            <h1 className="text-white text-2xl font-semibold mb-4">Resources</h1>
            <div className="flex flex-col gap-2 mb-4">
              {Resources.map((item, index) => (
                <Link
                  key={index}
                  to={item.split(" ").join("-").toLowerCase()}
                  className="hover:text-red-300 transition-colors duration-100"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:w-1/4 mb-8 lg:mb-0">
            <h1 className="text-white text-2xl font-semibold mb-4">Services</h1>
            <div className="flex flex-col gap-2 mb-4">
              {Services.map((item, index) => (
                <Link
                  key={index}
                  to={item.split(" ").join("-").toLowerCase()}
                  className="hover:text-red-300 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:w-1/4 mb-8 lg:mb-0">
            <h1 className="text-white text-2xl font-semibold mb-4">Community</h1>
            <div className="flex flex-col gap-2 mb-4">
              {Community.map((item, index) => (
                <Link
                  key={index}
                  to={item.split(" ").join("-").toLowerCase()}
                  className="hover:text-red-300 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center text-sm">
          <div className="flex gap-4 mb-4 lg:mb-0">
            {BottomFooter.map((item, i) => (
              <Link
                key={i}
                to={item.split(" ").join("-").toLowerCase()}
                className={`hover:text-red-300 transition-colors duration-200 ${
                  i < BottomFooter.length - 1 ? "border-r border-white pr-4" : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="text-center">
            © 2024 LearnSphere. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
