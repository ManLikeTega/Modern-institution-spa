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
        image="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/469904453_565529286197915_6618861138116782213_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEmk7VdZz7qVttuEUnfITIV2nnneDo0h_naeed4OjSH-StlyZzaqh77QM2_mISNKaO2WUIW1g99VnmsxswzV7Lg&_nc_ohc=GhLHlIyNPnEQ7kNvwFp8PY7&_nc_oc=AdkVrsk67oeqFDPrNk9i2o0UhU8qA6n0yBz9EBV4t8_cR7gFk3d8yQ2ZeeVaiJizujI&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=tHZMdB-QXA0H3LKVW119SQ&oh=00_AfhNapFxBBTGfpZFKZRXnllQXtz-QOJuTQ30p4Y5K8A8Bg&oe=69313682"
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
