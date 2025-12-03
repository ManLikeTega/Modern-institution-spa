import Badge from "../../components/Badge";
import { MapPin, Navigation } from "lucide-react";
import MotionElement from "../../components/MotionElement";

const Directions = () => {
  return (
    <section className="section bg-extra">
      {/* Header */}
      <div className="text-center mb-10">
        <Badge Icon={MapPin} className="bg-white text-red-700">
          Find Our Location
        </Badge>

        <MotionElement delay={0.2}>
          <h2 className="section_title">
            Find Your <span className="text-red-700">Way To Us</span>
          </h2>
        </MotionElement>

        <MotionElement delay={0.4}>
          <p>
            Come see our facilities, meet our team, and discover how we can help
            launch your career in technology.
          </p>
        </MotionElement>
      </div>

      <div>
        {/* Map */}
        <MotionElement axis="x" delay={0.2} className="relative">
          <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3328.038334892295!2d3.219743!3d6.6855769999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDEnMDguMSJOIDPCsDEzJzExLjEiRQ!5e1!3m2!1sen!2sng!4v1764409097948!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80 lg:h-96"
              title="Aptech Fowobi Location"
            />
          </div>

          {/* Map Overlay Info */}
          <MotionElement
            delay={0.6}
            className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Easy to Find</div>
                <div className="text-sm text-gray-600">
                  Located in Fowobi, Lagos
                </div>
              </div>
            </div>
          </MotionElement>
        </MotionElement>

        <div className="flex justify-between mt-10 md:mt-6">
          <div></div>

          <MotionElement delay={0.4}>
            <a
              href="https://maps.google.com/?q=6.685577,3.219743"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </MotionElement>
        </div>
      </div>
    </section>
  );
};

export default Directions;
