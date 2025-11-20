import { courses } from "../data/home_data.js";
import { ArrowRight, BookOpen, Users, Briefcase } from "lucide-react";

const Courses = () => {
  const icons = [BookOpen, Users, Briefcase];

  return (
    <section className="section bg-extra" id="courses">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-bacground text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <BookOpen className="w-4 h-4" />
            Comprehensive Learning
          </div>

          <h1 className="section_title">
            Our <span className="text-red-700">Courses</span>
          </h1>

          <p>
            You have nothing to worry about because Aptech Ajah Centre has you
            covered. We provide comprehensive training from basic computer
            operations to advanced professional skills, empowering you to become
            proficient in no time.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = icons[index] || BookOpen;
            return (
              <div
                key={index}
                className="group relative bg-bacground rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-red-200 hover:-translate-y-2"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-bacground to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-red-100 rounded-2xl group-hover:bg-red-200 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-red-700" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-800 transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed min-h-20">
                    {course.description}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={course.link}
                    className="inline-flex items-center justify-center gap-3 bg-red-700 text-white px-8 py-4 rounded-xl hover:bg-red-800 transition-all duration-300 font-semibold group-hover:shadow-lg group-hover:scale-105 w-full"
                  >
                    Explore Course
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-300 transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-10 md:mt-16">
          <div className="inline-flex  sm:flex-row items-center gap-3 md:gap-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700 mb-2">100%</div>
              <div className="text-gray-600">Practical Training</div>
            </div>

            <div className="block w-px h-12 bg-gray-300"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-red-700 mb-2">500+</div>
              <div className="text-gray-600">Student Projects</div>
            </div>

            <div className="block w-px h-12 bg-gray-300"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-red-700 mb-2">1:1</div>
              <div className="text-gray-600">Mentorship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
