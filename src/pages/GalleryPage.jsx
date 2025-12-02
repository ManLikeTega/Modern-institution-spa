import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionElement from "../components/MotionElement";
import Gallery from "../sections/Gallery";

function GalleryPage() {
  return (
    <>
      <Navbar />
      <Banner image="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/477597045_608608588592495_819108653316080780_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH6dXh1DdOQjZqtmYuNJeWI32GuqrTPX8_fYa6qtM9fzyQcBHDo_9EMEPTYCaPwZW7Rm6tECYIyNkZ-BXjkgLmk&_nc_ohc=W-BRKWnhwZ8Q7kNvwHXYntU&_nc_oc=AdkgxuTAOURPkpeHImy_B2lB0yS_wJUSTMoYeDCzPfksQiN57YxVuHKNBql7VzGEiPo&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=Fv0hi4KoxYj2B06rPpjIxQ&oh=00_Afj57Sc3JJMPb0vxJd7MiDhJ1cJZBDe0LwhCYk9o3bqgEg&oe=69314AC1">
        <div className="relative z-10 text-white max-w-4xl px-4">
          <MotionElement delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Moments That Tell Our Story
            </h2>
          </MotionElement>

          <MotionElement delay={0.4} className="text-base md:text-lg">
            <p>
              A visual journey through our events, achievements, and vibrant
              campus life.
            </p>
          </MotionElement>
        </div>
      </Banner>
      <Gallery />
      <Footer />
    </>
  );
}

export default GalleryPage;
