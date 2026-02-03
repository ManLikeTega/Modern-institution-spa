import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionElement from "../components/MotionElement";
import Gallery from "../sections/Gallery";

function GalleryPage() {
  return (
    <>
      <Navbar />
      <Banner image="https://scontent.flos2-1.fna.fbcdn.net/v/t39.30808-6/600549858_850949401025078_2491364269536322830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPckcqdA4zEACn0rts5YI4F0evesojIVAXR696yiMhUOQr95hoYFYAf2PiNKlroXaVVgn2KfB0Kc5-ZV5cWxrt&_nc_ohc=73uoB7iYbf8Q7kNvwFS_WrI&_nc_oc=AdlqXFbQX3JAh03QWXiZHJe1C3gCLMxGG-EJ3SQpFJ9rL3VR49Be25NXFEnLJ1BsJC4&_nc_zt=23&_nc_ht=scontent.flos2-1.fna&_nc_gid=wdBG5ldw_KfPOavwUspU9A&oh=00_Afu2noR5eoswAM2xOAswgmguff9GdTgsWMi2LOJXUyyf-A&oe=6987F36B">
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
