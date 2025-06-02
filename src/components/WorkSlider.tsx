"use client"; // Add this at the top to mark as client component

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

// import required modules (try one of these import paths)
// For Swiper version 9+
import { Pagination } from "swiper";

// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

export default function WorkSlider() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-full sm:h-[500px] max-w-[800px] mx-auto"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-self-center cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex 
                    items-center justify-center group"
                    key={index}
                  >
                    <div
                      className="flex items-center justify-center relative 
                      overflow-hidden group"
                    >
                      {/* image */}
                      <Image src={image.path} width={400} height={200} alt="" />

                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-tl
                        from-black via-[#b88900] to-[#816100] opacity-10
                        group-hover:opacity-70 transition-all duration-800"
                      ></div>

                      {/* title */}
                      <div
                        className="absolute bottom-0 translate-y-full 
                        group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                        transition-all duration-300"
                      >
                        <div
                          className="flex items-center gap-x-2 text-[13px] 
                          tracking-[0.2em]"
                        >
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div
                            className="translate-y-[500%] 
                            group-hover:translate-y-0 transition-all duration-300 
                            delay-150"
                          >
                            PROJECT
                          </div>
                          {/* icon */}
                          <div
                            className="text-xl translate-y-[500%] 
                            group-hover:translate-y-0 transition-all duration-300 
                            delay-200"
                          >
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
