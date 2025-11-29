import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Award } from "lucide-react";
import { progressStats } from "../../data/home_data";
import Badge from "../../components/Badge";
import MotionElement from "../../components/MotionElement";

function Progress() {
  const [counted, setCounted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !counted) {
      setCounted(true);
    }
  }, [inView, counted]);

  const Counter = ({ value, suffix, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!counted) return;

      let start = 0;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value, duration]);

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {value === 4.9 ? value : count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className="section bg-primary relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary to-[#8a1a1f] opacity-90"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <Badge Icon={Award} className="bg-white/20 text-white ">
            Trusted by Thousands
          </Badge>

          <MotionElement delay={0.2}>
            <h2 className="section_title text-white">Our Impact in Numbers</h2>
          </MotionElement>

          <MotionElement delay={0.4}>
            <p className=" text-white">
              Decades of excellence in IT education, transforming lives and
              careers through quality training and industry partnerships.
            </p>
          </MotionElement>
        </div>

        {/* progressStats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {progressStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <MotionElement
                delay={index * 0.2}
                key={index}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors`}
                    >
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>

                  {/* Counter */}
                  <div className={`mb-2 ${stat.color}`}>
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={stat.duration}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-white font-semibold text-lg">
                    {stat.label}
                  </h3>
                </div>
              </MotionElement>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-red-100">
            <MotionElement className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span className="font-medium">32+ Years of Expertise</span>
            </MotionElement>

            <MotionElement
              delay={0.2}
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span className="font-medium">40+ Countries</span>
            </MotionElement>

            <MotionElement
              delay={0.4}
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <span className="font-medium">5 Continents</span>
            </MotionElement>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Progress;
