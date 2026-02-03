import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionElement from "../components/MotionElement";
import BriefIntroduction from "../sections/about/BriefIntroduction";
import Values from "../sections/about/Values";
import WhyChooseUs from "../sections/about/WhyChooseUs";
import FAQ from "../sections/FAQ";
import Partners from "../sections/home/Partners";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Banner image="https://scontent.flos3-1.fna.fbcdn.net/v/t39.30808-6/477597045_608608588592495_819108653316080780_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH6dXh1DdOQjZqtmYuNJeWI32GuqrTPX8_fYa6qtM9fzyQcBHDo_9EMEPTYCaPwZW7Rm6tECYIyNkZ-BXjkgLmk&_nc_ohc=sbL73IlOEI8Q7kNvwGc-WLJ&_nc_oc=Adl4gPpcM_k6hd-g1RG0FwKwqCtBGQ9-H5vY2CFt1URJCSwRuZbAH1_H_OOzv_h3uds&_nc_zt=23&_nc_ht=scontent.flos3-1.fna&_nc_gid=-yTrNdkLVOQGfCx0Z0ZSxg&oh=00_Aft962lc2bUT9kwpslF6q9A0VkHx9nUgXIwj3mbvSct30g&oe=6987DD41">
        <div className="relative z-10 text-white max-w-4xl px-4">
          <MotionElement delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Empowering Tomorrow’s Innovators
            </h2>
          </MotionElement>

          <MotionElement delay={0.4} className="text-base md:text-lg">
            <p>
              Driving the growth of Africa’s future creators, thinkers, and
              technology pioneers.
            </p>
          </MotionElement>
        </div>
      </Banner>
      <BriefIntroduction />
      <Values />
      <WhyChooseUs />
      <Partners />
      <FAQ bg="bg-bacground" />
      <Footer />
    </>
  );
}

export default AboutPage;
