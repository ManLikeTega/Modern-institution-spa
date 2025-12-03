import { categoryData } from "../data/courses_data";
import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionElement from "../components/MotionElement";
import CourseIntroduction from "../sections/course/CourseIntroduction";
import CourseStructure from "../sections/course/CourseStructure";

const CourseCategoryPage = () => {
  const { category } = useParams();

  const data = categoryData.find((item) => item.id === category);

  return (
    <>
      <Navbar />
      <Banner image={data.image} position="center">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors absolute top-5 left-5  md:top-10 md:left-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="relative z-10 text-white max-w-4xl px-4">
          <MotionElement delay={0.2}>
            <h2 className="text-2xl md:text-4xl font-bold mb-1">
              {data.title}
            </h2>
          </MotionElement>

          <MotionElement delay={0.4} className="text-base md:text-lg">
            <p>{data.shortDescription}</p>
          </MotionElement>
        </div>
      </Banner>
      <CourseIntroduction data={data} />
      <CourseStructure data={data} />
      <Footer />
    </>
  );
};

export default CourseCategoryPage;
