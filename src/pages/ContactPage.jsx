import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionElement from "../components/MotionElement";
import Direction from "../sections/contact/Direction";
import FAQ from "../sections/FAQ";
import GetInTouch from "../sections/contact/GetInTouch";
import Ads from "../sections/contact/Ads";

function ContactPage() {
  return (
    <>
      <Navbar />
      <Banner image="https://res.cloudinary.com/dc4ucxgji/image/upload/v1764774772/WhatsApp_Image_2025-12-03_at_15.29.52_f737247f_mbnfgn.jpg">
        <div className="relative z-10 text-white max-w-4xl px-4">
          <MotionElement delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Let's Connect With You
            </h2>
          </MotionElement>

          <MotionElement delay={0.4} className="text-base md:text-lg">
            <p>Your questions matter, reach out and we’ll respond promptly.</p>
          </MotionElement>
        </div>
      </Banner>
      <Ads />
      <GetInTouch />
      <Direction />
      <FAQ bg="transparent" bg_tab="bg-white" />
      <Footer />
    </>
  );
}

export default ContactPage;
