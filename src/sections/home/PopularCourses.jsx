import { useState } from "react";
import CourseCard from "../../components/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { popularCourses } from "../../data/home_data";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Badge from "../../components/Badge";

function PopularCourses() {
  const [activeTitle, setActiveTitle] = useState(null);

  return (
    <section className="section">
      <div>
        <div className="text-center mb-10 md:mb-16">
          <Badge Icon={Star} className="bg-red-100 text-red-700">
            Most Popular
          </Badge>

          <h2 className="section_title">
            Popular <span className="text-red-700">Courses</span>
          </h2>

          <p>
            Explore our most sought-after courses that are transforming careers
            and shaping the future of tech.
          </p>
        </div>

        <div className="relative">
          <Swiper
            spaceBetween={24}
            modules={[Mousewheel, FreeMode, Navigation]}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
              enabled: true,
            }}
            freeMode={true}
            resistance={true}
            resistanceRatio={0.85}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3.2,
              },
              1280: {
                slidesPerView: 3.5,
              },
            }}
            navigation={{
              nextEl: ".popular-courses-next",
              prevEl: ".popular-courses-prev",
            }}
            className="popular-courses-swiper"
          >
            {popularCourses.map((course, index) => (
              <SwiperSlide key={index} className="w-auto!">
                <CourseCard
                  image={course.image}
                  title={course.title}
                  description={course.description}
                  activeTitle={activeTitle}
                  setActiveTitle={setActiveTitle}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="popular-courses-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button className="popular-courses-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Swipe or use arrows to explore more courses</span>
            <div className="flex gap-1">
              <div
                className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCourses;
