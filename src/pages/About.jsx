import React from "react";
import Footer from "../components/Common/Footer";
import ReviewSlider from "../components/Common/ReviewSlider";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponent from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Introduction Section with Animation */}
      <section className="bg-richblack-700 animate-fade-in-up">
        <div className="container mx-auto flex flex-col items-center py-20 text-center text-white">
          <header className="text-4xl font-semibold lg:w-3/4">
            Pioneering Innovations in Online Learning for a
            <HighlightText text="Brighter Tomorrow" />
            <p className="mt-4 text-base font-medium text-richblack-300 lg:w-11/12">
              At LearnSphere, we strive to lead in online education innovation, crafting a brighter future through advanced courses, cutting-edge technologies, and a thriving learning community.
            </p>
          </header>
        </div>
      </section>
    
    
      <div className="w-8/12 mx-auto">


      {/* Quote Section */}
      <section className="border-b border-richblack-700 animate-fade-in">
        <div className="container mx-auto py-8">
          <Quote />
        </div>
      </section>

      {/* Vision and Mission with Extended Text */}
      <section className="py-16">
        <div className="container mx-auto grid gap-20 text-richblack-500">
          <div className="space-y-10">
            <h1 className="text-4xl font-semibold bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-transparent">
              Our Vision
            </h1>
            <p className="text-base font-medium text-richblack-300">
              At LearnSphere, we aim to revolutionize learning through a platform that merges cutting-edge technology with engaging content, fostering a dynamic and interactive educational experience. We envision a world where education is not just a privilege for the few but a right accessible to all. Our platform is designed to break down barriers and bring high-quality education to learners regardless of their geographical location or socioeconomic status.
            </p>
            <p className="text-base font-medium text-richblack-300">
              By leveraging the power of technology, we provide a rich learning experience that is engaging and immersive. Our vision includes not just teaching academic content but also equipping learners with critical thinking skills, creativity, and the ability to adapt to an ever-changing world. We believe that education is a lifelong journey, and we are here to support learners every step of the way.
            </p>
          </div>
          <div className="space-y-10">
            <h1 className="text-4xl font-semibold bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
              Our Mission
            </h1>
            <p className="text-base font-medium text-richblack-300">
              Beyond delivering online courses, our mission is to create a vibrant community where learners connect, collaborate, and share knowledge, fostering a rich learning environment. We are committed to providing a platform that not only delivers high-quality educational content but also encourages interaction and collaboration among learners.
            </p>
            <p className="text-base font-medium text-richblack-300">
              We believe that learning is a social experience, and our platform is designed to facilitate connections among learners, educators, and experts from around the world. Through forums, live sessions, and collaborative projects, we provide opportunities for learners to engage with each other, share insights, and learn from diverse perspectives.
            </p>
            <p className="text-base font-medium text-richblack-300">
              Our mission extends to fostering a culture of continuous improvement and innovation in education. We are constantly exploring new ways to enhance the learning experience, whether through the use of advanced technologies like artificial intelligence and virtual reality or through innovative teaching methods. We are dedicated to making learning not just effective but also enjoyable and inspiring.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics and Learning Grid Component */}
      <LearningGrid />
      <StatsComponent />
      {/* Learning Grid and Contact Section */}
      <section className="py-20">
        <div className="flex justify-center mt-10">
          <Link to="/contact">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

    </div>
    
    <Footer />
    </div>
  );
};

export default About;
