import Badge from "../../components/Badge.jsx";
import { Link } from "react-router";
import { courses } from "../../data/home_data.js";
import { ArrowRight, BookOpen, Users, Briefcase } from "lucide-react";
import MotionElement from "../../components/MotionElement.jsx";

const Courses = () => {
  const icons = [BookOpen, Users, Briefcase];

  return (
    <section className="section bg-extra" id="courses">
      <div className="text-center mb-16">
        <Badge Icon={BookOpen} className="text-red-700 bg-white">
          Comprehensive Learning
        </Badge>

        <MotionElement delay={0.2}>
          <h1 className="section_title">
            Our <span className="text-red-700">Courses</span>
          </h1>
        </MotionElement>

        <MotionElement delay={0.4}>
          <p>
            You have nothing to worry about because Aptech Ajah Centre has you
            covered. We provide comprehensive training from basic computer
            operations to advanced professional skills, empowering you to become
            proficient in no time.
          </p>
        </MotionElement>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => {
          const IconComponent = icons[index] || BookOpen;
          return (
            <MotionElement
              delay={index * 0.2}
              key={index}
              className="group relative bg-bacground rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-red-200 hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-red-100 rounded-2xl group-hover:bg-red-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-red-700" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-800 transition-colors">
                  {course.title}
                </h3>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed min-h-20">
                  {course.description}
                </p>

                <Link
                  to={course.link}
                  className="inline-flex items-center justify-center gap-3 bg-red-700 text-white px-8 py-4 rounded-xl hover:bg-red-800 transition-all duration-300 font-semibold group-hover:shadow-lg group-hover:scale-105 w-full"
                >
                  Explore Course
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </MotionElement>
          );
        })}
      </div>

      {/* Additional Info */}
      <MotionElement delay={0.4} className="text-center mt-10 md:mt-16">
        <div className="inline-flex  sm:flex-row items-center gap-3 md:gap-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-700 mb-2">100%</div>
            <div className="text-gray-600">Practical Training</div>
          </div>

          <div className="block w-px h-12 bg-gray-300"></div>

          <div className="text-center">
            <div className="text-3xl font-bold text-red-700 mb-2">50+</div>
            <div className="text-gray-600">Student Projects</div>
          </div>

          <div className="block w-px h-12 bg-gray-300"></div>

          <div className="text-center">
            <div className="text-3xl font-bold text-red-700 mb-2">1:1</div>
            <div className="text-gray-600">Mentorship</div>
          </div>
        </div>
      </MotionElement>
    </section>
  );
};

export default Courses;
