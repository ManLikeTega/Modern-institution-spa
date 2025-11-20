import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

function CoursesCategory({ categoryData }) {
  return (
    <>
      <section className="section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {/* Professional Courses */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-4/3 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  alt={categoryData.professional.title}
                  className="w-full h-full object-cover"
                  src={categoryData.professional.heroImage}
                />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-700 animate-ping size-1.5 rounded-full"></span>
                    <span className="text-sm text-gray-500 font-light tracking-wide">
                      PROFESSIONAL
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-gray-900 max-w-xl tracking-tight mb-2">
                    {categoryData.professional.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 font-light">
                    Comprehensive IT skills for modern careers
                  </p>
                </div>
                <div className="space-y-3">
                  {categoryData.professional.sections
                    .slice(0, 2)
                    .map((section, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 font-light text-sm md:text-base"
                      >
                        <span className="shrink-0 w-1.5 h-1.5 mt-2.5 bg-gray-400 rounded-full"></span>
                        <span>{section.title}</span>
                      </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-6 pt-2">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Courses
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      15+ Available
                    </p>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Duration
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      3-24 months
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                    Popular Courses
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categoryData.professional.additionalSections[0].items
                      .slice(0, 3)
                      .map((item, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1.5 bg-gray-50 text-gray-700 rounded-sm border border-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                  </div>
                </div>
                <Link to="/professional-courses" className="pt-4 block">
                  <button className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-red-700 transition-colors duration-200">
                    <span className="tracking-wide">
                      EXPLORE PROFESSIONAL COURSES
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Career Courses */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
              <div className="lg:order-2 relative aspect-4/3 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  alt={categoryData.career.title}
                  className="w-full h-full object-cover"
                  src={categoryData.career.heroImage}
                />
              </div>
              <div className="lg:order-1 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-700 animate-ping size-1.5 rounded-full"></span>
                    <span className="text-sm text-gray-500 font-light tracking-wide">
                      CAREER
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-gray-900 max-w-xl tracking-tight mb-2">
                    {categoryData.career.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 font-light">
                    Complete career transformation programs
                  </p>
                </div>
                <div className="space-y-3">
                  {categoryData.career.sections
                    .slice(0, 2)
                    .map((section, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 font-light text-sm md:text-base"
                      >
                        <span className="shrink-0 w-1.5 h-1.5 mt-2.5 bg-gray-400 rounded-full"></span>
                        <span>{section.title}</span>
                      </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-6 pt-2">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Programs
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      4 Career Tracks
                    </p>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Duration
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      20-36 weeks
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                    Career Outcomes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categoryData.career.additionalSections[2].items
                      .slice(0, 3)
                      .map((item, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1.5 bg-gray-50 text-gray-700 rounded-sm border border-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                  </div>
                </div>
                <Link to="/career-courses" className="pt-4 block">
                  <button className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-red-700 transition-colors duration-200">
                    <span className="tracking-wide">
                      EXPLORE CAREER PROGRAMS
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Corporate Training */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-4/3 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  alt={categoryData.corporate.title}
                  className="w-full h-full object-cover"
                  src={categoryData.corporate.heroImage}
                />
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-700 animate-ping size-1.5 rounded-full"></span>
                    <span className="text-sm text-gray-500 font-light tracking-wide">
                      CORPORATE
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-gray-900 max-w-xl tracking-tight mb-2">
                    {categoryData.corporate.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 font-light">
                    Team training and organizational development
                  </p>
                </div>
                <div className="space-y-3">
                  {categoryData.corporate.sections[0].courses
                    .slice(0, 2)
                    .map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 font-light text-sm md:text-base"
                      >
                        <span className="shrink-0 w-1.5 h-1.5 mt-2.5 bg-gray-400 rounded-full"></span>
                        <span>{course.title}</span>
                      </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-6 pt-2">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Training Areas
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      3 Specializations
                    </p>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Format
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      Customizable
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                    Training Focus
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm px-3 py-1.5 bg-gray-50 text-gray-700 rounded-sm border border-gray-200">
                      Data Management
                    </span>
                    <span className="text-sm px-3 py-1.5 bg-gray-50 text-gray-700 rounded-sm border border-gray-200">
                      Digital Marketing
                    </span>
                    <span className="text-sm px-3 py-1.5 bg-gray-50 text-gray-700 rounded-sm border border-gray-200">
                      Business Analytics
                    </span>
                  </div>
                </div>
                <Link to="/corporate-training" className="pt-4 block">
                  <button className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-red-700 transition-colors duration-200">
                    <span className="tracking-wide">
                      EXPLORE CORPORATE TRAINING
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoursesCategory;
