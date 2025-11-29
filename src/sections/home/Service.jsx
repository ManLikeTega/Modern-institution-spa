import { BookOpen, ArrowRight } from "lucide-react";
import { services } from "../../data/home_data.js";
import { Link } from "react-router";
import Badge from "../../components/Badge.jsx";
import MotionElement from "../../components/MotionElement.jsx";

function Services() {
  return (
    <section className="section bg-extra">
      {/* Header */}
      <div className="text-center mb-10 md:mb-16">
        <Badge Icon={BookOpen} className="bg-white text-red-700">
          Comprehensive Services
        </Badge>

        <MotionElement delay={0.2}>
          <h2 className="section_title">
            Our <span className="text-red-700">Services</span>
          </h2>
        </MotionElement>

        <MotionElement delay={0.4}>
          <p>
            Ready to transform your career? Whether you're starting fresh or
            upgrading your skills, we'll guide you through your options and help
            you reboot your professional journey for breakthrough success.
          </p>
        </MotionElement>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;

          return (
            <MotionElement
              delay={index * 0.2}
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-100 rounded-2xl group-hover:bg-red-200 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-red-700" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-lg mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className={`w-2 h-2 rounded-full bg-red-100`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Link
                to="/about"
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MotionElement>
          );
        })}
      </div>

      {/* Additional Info */}
      <MotionElement delay={0.4} className="text-center mt-10 md:mt-16">
        <div className="inline-flex  sm:flex-row items-center gap-3 md:gap-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-700 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>

          <div className="block w-px h-12 bg-gray-300"></div>

          <div className="text-center">
            <div className="text-3xl font-bold text-red-700 mb-2">100+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>

          <div className="block w-px h-12 bg-gray-300"></div>

          <div className="text-center">
            <div className="text-3xl font-bold text-red-700 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </MotionElement>
    </section>
  );
}

export default Services;
