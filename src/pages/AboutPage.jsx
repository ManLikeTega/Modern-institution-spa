/* eslint-disable no-unused-vars */
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import about_banner from "../assets/about_banner.webp";
import BriefIntroduction from "../sections/about/BriefIntroduction";
import MissionVisionValues from "../sections/about/MissionVissionValues";
import WhyChooseUs from "../sections/about/WhyChooseUs";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Banner image={about_banner}>
        <div className="relative z-10 text-white max-w-4xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-1"
          >
            Building Digital Leaders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="text-base md:text-lg"
          >
            Shaping Africa's Next Generation of Tech Leaders
          </motion.p>
        </div>
      </Banner>
      <BriefIntroduction />
      <MissionVisionValues />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default AboutPage;
