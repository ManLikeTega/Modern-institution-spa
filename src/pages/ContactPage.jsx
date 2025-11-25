import ContactForm from "../sections/ContactForm";
import bannerImage from "../assets/contact-banner.jpg";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />
      <Banner image={bannerImage}>
        <div className="relative z-10 text-white max-w-4xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-1"
          >
            Get in touch.
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

      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactPage;
