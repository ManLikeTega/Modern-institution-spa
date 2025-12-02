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
      <Banner image="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/576747342_813969934723025_3987647657288762932_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHEMv5f4kKL-bMuVoHQ4qZOT1-bzGWcP5FPX5vMZZw_kddwmW7GmyloRfOvpFEQUdiQtl-CcpyynlBaW4IuT46Q&_nc_ohc=dihl9zOdS9EQ7kNvwEW3FqJ&_nc_oc=Admv8YQsYZVHzr9red5I37DrIcb01q7_djLITp3aLo3i3AGgPKFSBiOodTEc4WdrT1E&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=jWbCTsVYvZ5ZmcuIk-mlZw&oh=00_AfhD4-rYgigvYhNP7TjnT7aonXjnK4nCOd6igcvkcd4q9Q&oe=69312822">
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
      <GetInTouch />
      <Direction />
      <FAQ bg="transparent" bg_tab="bg-white" />
      <Footer />
    </>
  );
}

export default ContactPage;
