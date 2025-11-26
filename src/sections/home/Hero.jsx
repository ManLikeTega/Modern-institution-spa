/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { hero_slides as slides } from "../../data/home_data.js";
import { Star, Users, Award } from "lucide-react";
import { Link } from "react-router";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

function Hero() {
  const stats = [
    { icon: Users, value: "1000+", label: "Students Trained" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Star, value: "4.9/5", label: "Rating" },
  ];

  const MotionElement = ({ children, delay, className = "" }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="h-[calc(100vh-65px)] lg:h-screen w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-9xl mx-auto px-6 w-full">
                <div className="max-w-2xl ml-0 lg:ml-6 xl:ml-12">
                  {/* Title */}
                  <MotionElement delay={0.4}>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
                      {slide.title}
                    </h1>
                  </MotionElement>

                  {/* Description */}
                  <MotionElement delay={0.6}>
                    <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
                      {slide.description}
                    </p>
                  </MotionElement>

                  {/* CTA Buttons */}
                  <MotionElement delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
                      <a
                        href={`/#${slide.href || "courses"}`}
                        className="bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        {slide.cta}
                      </a>

                      <Link
                        to="/about"
                        className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </MotionElement>

                  {/* Stats */}
                  <MotionElement delay={1.0}>
                    <div className="flex flex-wrap gap-6 sm:gap-8">
                      {stats.map((stat, statIndex) => {
                        const IconComponent = stat.icon;
                        return (
                          <div key={statIndex} className="text-white">
                            <div className="flex items-center gap-2 mb-1">
                              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                              <span className="text-xl sm:text-2xl font-bold">
                                {stat.value}
                              </span>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-300">
                              {stat.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </MotionElement>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <div className="hidden lg:block lg:absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-sm opacity-80">Scroll to explore</span>

          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
