import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import PopularCourses from "../sections/PopularCourses";
import Service from "../sections/Service";
import Progress from "../sections/Progress";
import Footer from "../sections/Footer";
import Testimonial from "../sections/Testimonial";
import Courses from "../sections/Courses";

function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <PopularCourses />
        <Service />
        <Progress />
        <Courses />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
