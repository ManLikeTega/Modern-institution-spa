import { categoryData } from "../data/courses_data";
import { useParams, Link } from "react-router";
import { ArrowLeft, Clock, Users, Star, CheckCircle } from "lucide-react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const CourseCategory = () => {
  const { category } = useParams();

  const data = categoryData[category] || categoryData.professional;

  // Helper function to render different layouts based on category
  const renderContent = () => {
    switch (data.layout) {
      case "detailed":
        return renderProfessionalLayout();
      case "corporate":
        return renderCorporateLayout();
      case "carreer":
      default:
        return renderCarreerLayout();
    }
  };

  const renderCorporateLayout = () => (
    <div className="section">
      <div className="max-w-7xl mx-auto">
        <h2 className="section_title mb-10">What We Can Do For You</h2>

        {data.sections?.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col gap-8">
            {section.courses?.map((course) => (
              <div
                key={course.id}
                className="bg-bacground rounded-xl shadow-lg p-8 border border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-3 flex justify-center">
                    <div className="w-32 h-32 bg-red-100 rounded-2xl flex items-center justify-center">
                      {course.icon && (
                        <course.icon className="w-16 h-16 text-red-600" />
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h3 className="text-3xl font-bold mb-4">{course.title}</h3>

                    <p className="mb-6">{course.description}</p>

                    <div className="space-y-2">
                      <h5 className="font-semibold">Key Features:</h5>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.features?.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfessionalLayout = () => (
    <div className="bg-extra section">
      <div className="max-w-7xl mx-auto">
        <h2 className="section_title mb-10">Our Courses Include</h2>

        {/* Course Sections */}
        {data.sections?.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-red-600 pb-2">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.courses?.map((course) => (
                <div
                  key={course.id}
                  className="bg-bacground rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{course.icon}</span>

                    <h4 className="text-2xl font-bold text-gray-900">
                      {course.title}
                    </h4>
                  </div>

                  <p className="mb-6">{course.description}</p>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900">
                      Key Features:
                    </h5>

                    <div className="grid grid-cols-1 gap-2">
                      {course.features?.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Sections Grid */}
        {data.additionalSections && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {data.additionalSections.map((section, index) => (
              <div
                key={index}
                className="bg-bacground rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-2">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderCarreerLayout = () => (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.courses?.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <div className="p-8">
              {/* Course Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {course.title}
                </h3>
                {course.rating && (
                  <div className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                )}
              </div>

              {/* Course Info */}
              {(course.duration || course.students || course.level) && (
                <div className="flex flex-wrap gap-4 mb-6">
                  {course.duration && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  )}
                  {course.students && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{course.students}</span>
                    </div>
                  )}
                  {course.level && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">{course.level}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Features */}
              {course.features && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    What You'll Learn:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                Enroll Now - Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-extra">
      {/* Hero Section - Consistent for all categories */}
      <Navbar />

      <Banner image={data.heroImage} position="left">
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">{data.title}</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {data.description}
              </p>

              <Link to="/contact">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                  Apply Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Banner>

      {/* Dynamic Content based on layout */}
      {renderContent()}

      <Footer />
    </main>
  );
};

export default CourseCategory;
