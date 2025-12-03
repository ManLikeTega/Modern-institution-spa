import { ArrowBigRight } from "lucide-react";
import Badge from "../../components/Badge";
import MotionElement from "../../components/MotionElement";
import { categoryData } from "../../data/courses_data";
import { Landmark } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

function CoursesCategory() {
  return (
    <>
      <section className="section">
        <div className="text-center mb-10 md:mb-16">
          <Badge Icon={Landmark} className="bg-red-100 text-red-700">
            Explore Our Courses
          </Badge>

          <MotionElement delay={0.2}>
            <h2 className="section_title">
              Our <span className="text-red-700">Courses</span>
            </h2>
          </MotionElement>

          <MotionElement delay={0.4}>
            <p>
              Build the skills that power today’s digital world. From
              beginner-friendly programs to advanced tech paths, our courses are
              designed to equip you with practical, job-ready expertise.
            </p>
          </MotionElement>
        </div>

        <MotionElement
          delay={0.6}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {categoryData.map((course, index) => (
            <Link
              to={course.link}
              key={index}
              className="relative bg-white shadow-lg rounded-lg border border-gray-200 group hover:border-red-200"
            >
              <div className="object-cover rounded-t-lg overflow-hidden h-[200px] md:h-[250px] lg:h-[220px] bg-gray-500">
                <img
                  src={course.image}
                  alt={course.title}
                  className="group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="my-3 md:my-6 p-6 text-center">
                <h3 className="font-bold text-lg mb-3 group-hover:text-red-600">
                  {course.title}
                </h3>

                <p>{course.shortDescription}</p>
              </div>

              <button className="rounded-full p-4 md:p-5 bg-red-600 shadow-lg text-white absolute left-[50%] translate-[-50%] -bottom-13 md:-bottom-15 group-hover:bg-red-700 group-hover:scale-105 duration-300 transition">
                <FaArrowRight className="text-2xl font-bold" />
              </button>
            </Link>
          ))}
        </MotionElement>
      </section>
    </>
  );
}

export default CoursesCategory;
