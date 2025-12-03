import { BookOpen } from "lucide-react";
import Badge from "../../components/Badge";
import MotionElement from "../../components/MotionElement";
import { Download } from "lucide-react";

function CourseStructure({ data }) {
  return (
    <>
      <section className="section bg-extra">
        <div className="text-center mb-10">
          <Badge Icon={BookOpen} className="bg-white text-red-700 px-4">
            {data.badge}
          </Badge>

          <MotionElement delay={0.2}>
            <h2 className={`section_title ${data.id === "adse" && "pb-5"}`}>
              {data.sectionTitle}{" "}
              <span className="text-red-700">{data.sectionTitleHighlight}</span>
            </h2>
          </MotionElement>

          <MotionElement delay={0.4}>
            <p>{data.sectionDescription}</p>
          </MotionElement>
        </div>

        <MotionElement
          delay={0.2}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {data.id === "professional"
            ? data.structure.map((course, index) => (
                <div
                  key={index}
                  className="bg-bacground rounded-lg flex shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600">{course.description}</p>
                  </div>
                </div>
              ))
            : data.structure.map((semester, index) => (
                <div
                  key={index}
                  className="bg-bacground rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {semester.title}
                  </h3>

                  {/* Course Objective */}
                  <h6 className="text-sm text-gray-600 mb-4">
                    <span className="font-medium text-gray-800">
                      Course Objective:
                    </span>{" "}
                    {semester.courseObjective}
                  </h6>

                  {/* Course List */}
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    {semester.courses.map((course, index) =>
                      course.includes("and more") ? (
                        <p key={index} className="text-gray-400 -ml-4">
                          {course}
                        </p>
                      ) : (
                        <li key={index} className="leading-relaxed">
                          {course}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
        </MotionElement>

        <MotionElement delay={0.2} className="flex justify-center mt-8">
          <a
            href={data.brochure}
            download="ADSE_Full_Brochure.jpg"
            className="flex gap-3 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Download Full Brochure
            <Download />
          </a>
        </MotionElement>
      </section>
    </>
  );
}

export default CourseStructure;
