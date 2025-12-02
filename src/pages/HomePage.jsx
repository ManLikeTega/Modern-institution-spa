import Hero from "../sections/home/Hero";
import PopularCourses from "../sections/home/PopularCourses";
import Service from "../sections/home/Service";
import Progress from "../sections/home/Progress";
import Courses from "../sections/home/Courses";
import Partners from "../sections/home/Partners";
import Testimonial from "../sections/home/Testimonial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularCourses />
      {/* <Service /> */}
      <Progress />
      {/* <Courses /> */}
      <Partners />
      <Testimonial />
      <Footer />
    </>
  );
}

export default HomePage;
