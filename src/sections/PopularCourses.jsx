import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function PopularCourses() {
  const [activeTitle, setActiveTitle] = useState(null);

  const courses = [
    {
      image:
        "https://images.unsplash.com/photo-1737396091040-4d3c49d9c4e7?q=80&w=1887&auto=format&fit=crop",
      title: "Artificial Intelligence",
      description:
        "Understand the concepts of machine learning, deep learning, and how AI is transforming industries.",
      rating: 4.9,
      students: 1247,
    },
    {
      image:
        "https://images.unsplash.com/photo-1639472628910-ef02c5404b9c?q=80&w=1770&auto=format&fit=crop",
      title: "Data Science",
      description:
        "Learn how to extract insights from data using Python, R, and statistical models.",
      rating: 4.8,
      students: 987,
    },
    {
      image:
        "https://images.unsplash.com/photo-1740042501963-7d064df65a3f?q=80&w=1770&auto=format&fit=crop",
      title: "Building Modern Websites",
      description:
        "Master HTML, CSS, JavaScript and modern tools to build stunning websites.",
      rating: 4.7,
      students: 1563,
    },
    {
      image:
        "https://images.unsplash.com/photo-1646300291345-e7f3f97986ed?q=80&w=1834&auto=format&fit=crop",
      title: "Web Development",
      description:
        "From front-end to back-end, learn full-stack development with real-world projects.",
      rating: 4.9,
      students: 2034,
    },
    {
      image:
        "https://images.unsplash.com/photo-1583225358814-4094d1a8aef2?q=80&w=1770&auto=format&fit=crop",
      title: "ReactJS for Responsive Web",
      description:
        "Build powerful single-page apps and interactive UI with ReactJS.",
      rating: 4.8,
      students: 1789,
    },
  ];

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
          <h2 className="section_title">
            Popular <span className="text-red-700">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our most sought-after courses that are transforming careers
            and shaping the future of tech.
          </p>
        </div>

        {/* Swiper with Navigation */}
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
            {courses.map((course, index) => (
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

          {/* Custom Navigation Buttons */}
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
