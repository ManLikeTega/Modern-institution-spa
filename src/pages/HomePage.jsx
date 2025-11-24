import Hero from "../sections/home/Hero";
import Navbar from "../components/Navbar";
import PopularCourses from "../sections/home/PopularCourses";
import Service from "../sections/Service";
import Progress from "../sections/Progress";
import Footer from "../sections/Footer";
import Testimonial from "../sections/Testimonial";
import Courses from "../sections/Courses";
import Partners from "../sections/Partners";
import Coding from "../sections/home/Coding";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularCourses />
      <Service />
      <Progress />
      <Courses />
      <Partners />
      <Coding />
      <Testimonial />
      <Footer />
    </>
  );
}

export default HomePage;
