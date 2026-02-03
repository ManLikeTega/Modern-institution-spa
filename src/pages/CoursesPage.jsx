import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CoursesCategory from "../sections/course/CoursesCategory";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import FAQ from "../sections/FAQ";

function CoursesPage() {
  return (
    <>
      <Navbar />
      <Banner
        image="https://scontent.flos3-1.fna.fbcdn.net/v/t39.30808-6/478062035_608608648592489_3515685471700447348_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGlaCVkjR6h4d7HD49tsRzA5_olar7DkmHn-iVqvsOSYdHsCiQW6qcF2r_7Lnva1PzQprAno6B1m-u43Bp_6oqO&_nc_ohc=y6voTDp9K6IQ7kNvwGeoZyT&_nc_oc=Adl_n8iamdwiBfTD14l7oAkvFNoRH5xX7DbeTf8gfFYwdsuLrlXECk6oLXY8MhTk4WM&_nc_zt=23&_nc_ht=scontent.flos3-1.fna&_nc_gid=6HY7jI0HMY5MjHGIm1Pgvg&oh=00_AfvYg20BhfzC7N6Cc6gX7oHGmUQkNsJOxxCRFAfKkoWt7A&oe=6987E049"
        position="center"
      >
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
      <CoursesCategory />
      <FAQ />
      <Footer />
    </>
  );
}

export default CoursesPage;
