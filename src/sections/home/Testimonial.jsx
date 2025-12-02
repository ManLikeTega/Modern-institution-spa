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
          spaceBetween={20}
          slidesPerView={3}
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
              <div className="flex flex-col justify-between bg-bacground rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 p-6 md:p-12 border h-100 border-gray-100">
                {/* Testimonial Text */}
                <blockquote className="text-md mb-8 leading-relaxed text-center italic max-w-4xl mx-auto">
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
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-red-600 font-semibold mb-2 text-sm">
                      {testimonial.course}
                    </p>
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
