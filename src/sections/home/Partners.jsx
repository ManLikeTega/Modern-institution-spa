import Badge from "../../components/Badge.jsx";
import { partners } from "../../data/home_data.js";
import { Handshake, Award } from "lucide-react";

const Partners = () => {
  return (
    <section className="section">
      <div>
        <div className="text-center mb-16">
          <Badge Icon={Handshake} className="text-red-700 bg-red-100">
            Our Esteemed Partners
          </Badge>

          <h2 className="section_title">
            Our <span className="text-red-700">Partners</span>
          </h2>

          <p>
            We collaborate with leading universities and educational bodies
            worldwide to provide internationally recognized qualifications and
            cutting-edge IT education.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-red-200 hover:-translate-y-2"
            >
              <div className="w-32 h-32 flex items-center justify-center mb-4">
                <img
                  src={partner.image}
                  alt={partner.label}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* More Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
            <Award className="w-4 h-4" />
            Accredited by International Educational Bodies
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
