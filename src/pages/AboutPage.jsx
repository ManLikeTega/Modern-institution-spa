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
      <Banner image="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/478062035_608608648592489_3515685471700447348_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGlaCVkjR6h4d7HD49tsRzA5_olar7DkmHn-iVqvsOSYdHsCiQW6qcF2r_7Lnva1PzQprAno6B1m-u43Bp_6oqO&_nc_ohc=eaDQPZ7aGmUQ7kNvwHp1EgI&_nc_oc=Adn6s5UcrJ33HjHwdNXBk23_EX7lkGnTE8ulXeUSZzEKNLfCEgX8wb2D3cJiPURbO-E&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=QUY-cYW1GJb971QzA46JSw&oh=00_AfjVkVsL3BRzRjWSeOLzp2fUjABCaT-C9YsSu4xotXau0g&oe=69314DC9 ">
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
