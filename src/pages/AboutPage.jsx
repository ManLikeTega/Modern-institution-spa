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
      <Banner image="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/472277096_579108654875822_4393690544226905795_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEquCMghmJK0nm97F_acethyDYyc4RJAQ3INjJzhEkBDWbEYkq51SxcoyFtCX6PtDOQjkrlsS1UbSEHYFNEvvJq&_nc_ohc=0y6CptGVY8wQ7kNvwFQ7GVQ&_nc_oc=AdkJgPgxZQgqWhDUG5gE_pGt5w3sSaGy6T3Kir4QovsFU5FdHOJ71oCVOEdvHbpqoFY&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=siRT9v71DcUlrSR2rJrRpw&oh=00_Afgimwewrb3gZMYXKYpjMVAPbQouzgTxN6pzTrfAJB38gA&oe=693129F6 ">
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
