import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Component Imports
import Footer from "../components/Common/Footer";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import HighlightText from "../components/core/HomePage/HighlightText";

function Home() {
  return (
    <div className=" z-[1]">
      {/* Section 1 */}
      <div className="firstpart bg-custom-imagge mt-0 relative mx-auto flex   flex-col items-center justify-between gap-8 text-white">

        {/* Heading */}
        <div className="mt-8 text-white text-center text-4xl font-semibold">
          
          <HighlightText text={"Unlock Your Potential with Our Expert-Led Courses"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-5 w-[80%] text-center text-lg font-bold text-white">
          Explore New Subjects with Interactive Resources, Real-World Projects, and Customized Feedback from Experts
        </div>

        {/* CTA Buttons */}
        <div className="mt-3 flex flex-row gap-20">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Code Section 1 */}
        <div>
          <CodeBlocks
            heading={
              <div className="-mt-16 text-3xl font-semibold text-white">
                <HighlightText text={"Discover"} /> New Learning Opportunities
                with our courses
              </div>
            }
            subheading={
              "Our programs are crafted by seasoned professionals who are dedicated to helping you succeed. Dive into interactive learning and gain valuable skills at your own pace. Discover more about how our courses can empower you."
            }
            codeColor={"text-yellow-25"}
            codeblock={`Learn from experienced industry professionals with hands-on expertise.
            Gain practical skills through real-world projects and exercises.
            Receive personalized feedback to enhance your learning experience.
            Access to a wide range of resources and tools to support your growth.
            Flexible learning schedules to fit your personal needs and pace.
            Join a community of learners and experts for networking and support.
            `}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-100 text-richblack-700">
        <div className="homepage_bg">
          <div className=" mx-auto flex max-w-maxContent flex-col items-center justify-between">
             
            <div className="flex flex-row gap-7 text-white mt-8 mb-8 gap-x-32">
               <CTAButton active={true} linkto={"/signup"}>
                 <div className="flex items-center gap-2">
                    Join as Educator
                   <FaArrowRight />
                 </div>
               </CTAButton>
               <CTAButton active={false} linkto={"/login"}>
                   Explore Courses
               </CTAButton>
               <CTAButton active={false} linkto={"/about"}>
                   Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
<div className="mb-12 mt-[-80px] flex flex-col lg:flex-row lg:justify-between lg:gap-16 lg:mt-24 p-6 bg-gray-100 rounded-lg shadow-lg">
  <div className="text-3xl font-bold text-gray-800 lg:w-[50%] lg:text-4xl lg:leading-tight">
    Unlock the Skills for Tomorrow's Careers
  </div>
  <div className="flex flex-col items-start gap-8 lg:w-[45%]">
    <p className="text-base text-gray-600 lg:text-lg">
      In today's fast-evolving job market, staying ahead means mastering new skills and adapting to changing demands. Embrace the future with LearnSphere cutting-edge resources and expert guidance.
    </p>
    <CTAButton active={true} linkto={"/signup"} className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 py-2 px-6 rounded-lg">
      <div className="text-base">Discover More</div>
    </CTAButton>
  </div>
</div>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
