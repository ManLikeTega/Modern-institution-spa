import ContactForm from "../components/ContactForm";
import bannerImage from "../assets/contact_banner.jpg";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionElement from "../components/MotionElement";
import Direction from "../sections/contact/Direction";
import FAQ from "../sections/FAQ";
import GetInTouch from "../sections/contact/GetInTouch";

function ContactPage() {
  return (
    <>
      <Navbar />
      <Banner image={bannerImage}>
        <div className="relative z-10 text-white max-w-4xl px-4">
          <MotionElement delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Get in touch
            </h2>
          </MotionElement>

          <MotionElement delay={0.4} className="text-base md:text-lg">
            <p>We Are Excited To Attend To Your Enquiry</p>
          </MotionElement>
        </div>
      </Banner>
      <GetInTouch />
      <Direction />
      <FAQ bg="transparent" bg_tab="bg-white" />
      <Footer />
    </>
  );
}

export default ContactPage;
