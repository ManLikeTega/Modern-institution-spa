import { categoryData } from "../data/courses_data"; // Adjust import path
import Footer from "../sections/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CoursesCategory from "../sections/CoursesCategory";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import FAQ from "../components/FAQ";

import bannerImage from "../assets/courses-banner.jpg";

function CoursesPage() {
  return (
    <>
      <main>
        <Navbar />
        <Banner image={bannerImage} position="center">
          <div className="relative z-10 text-white max-w-4xl px-4">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-1"
            >
              IT Courses That Get You Hired
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-base md:text-lg"
            >
              We Are Excited To Attend To Your Enquiry.
            </motion.p>
          </div>
        </Banner>
        <CoursesCategory categoryData={categoryData} />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

export default CoursesPage;
