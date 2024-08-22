import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Import other components
import Course_Card from "./Course_Card";

function Course_Slider({ Courses }) {
  return (
    <div className="px-4 py-8 bg-gray-50">
      <div className="container mx-auto">
        {Courses?.length ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            modules={[FreeMode, Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="relative"
          >
            {Courses?.map((course, i) => (
              <SwiperSlide key={i}>
                <Course_Card course={course} Height={"h-[250px]"} />
              </SwiperSlide>
            ))}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between">
              <button className="swiper-button-prev bg-gray-800 text-white p-2 rounded-full shadow-md">
                &lt;
              </button>
              <button className="swiper-button-next bg-gray-800 text-white p-2 rounded-full shadow-md">
                &gt;
              </button>
            </div>
          </Swiper>
        ) : (
          <p className="text-xl text-gray-500 text-center">No Courses Found</p>
        )}
      </div>
    </div>
  );
}

export default Course_Slider;
