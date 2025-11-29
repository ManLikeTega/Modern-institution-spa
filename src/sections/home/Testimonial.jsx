import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { testimonials } from "../../data/home_data.js";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Badge from "../../components/Badge.jsx";
import MotionElement from "../../components/MotionElement.jsx";

const Testimonial = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="section bg-extra">
      {/* Header */}
      <div className="text-center mb-10 md:mb-16">
        <Badge Icon={Quote} className="text-red-700 bg-white mb-4">
          Student Success Stories
        </Badge>

        <MotionElement delay={0.2}>
          <h2 className="section_title">
            What Our <span className="text-red-700">Students Say</span>
          </h2>
        </MotionElement>

        <MotionElement delay={0.4}>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates and current students about their
            transformative learning experiences and career success at Aptech
          </p>
        </MotionElement>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          pagination={{
            clickable: true,
            el: ".testimonial-pagination",
            renderBullet: (index, className) => {
              return `<span class="${className} w-3 h-3 bg-red-500 opacity-50 hover:opacity-100 transition-opacity rounded-full"></span>`;
            },
          }}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 md:p-12 border border-gray-100">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-red-50 rounded-2xl">
                    <Quote className="w-8 h-8 text-red-500 opacity-60" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {renderStars(testimonial.rating || 5)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed text-center italic max-w-4xl mx-auto">
                  "{testimonial.text}"
                </blockquote>

                {/* Student Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-red-200 shadow-md"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-red-600 font-semibold mb-2">
                      {testimonial.course}
                    </p>
                    {testimonial.company && (
                      <p className="text-gray-500 text-sm">
                        Now at {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
