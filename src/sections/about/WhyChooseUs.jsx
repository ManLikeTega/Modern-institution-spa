import { CheckCircle } from "lucide-react";
import { features } from "../../data/about_data";
import MotionElement from "../../components/MotionElement";
import Badge from "../../components/Badge";

const WhyChooseUs = () => {
  return (
    <section className="section">
      <div className="text-center mb-12">
        <Badge Icon={CheckCircle} className="bg-red-100 text-red-700">
          Why Choose Aptech
        </Badge>

        <MotionElement delay={0.2}>
          <h2 className="section_title mb-6">
            Your <span className="text-red-700">Advantage</span> in Tech
            Education
          </h2>
        </MotionElement>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <MotionElement
                delay={index * 0.1}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </span>
              </MotionElement>
            );
          })}
        </div>
      </div>

      <MotionElement delay={0.6} className="text-center mt-12">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We combine industry expertise with personalized support to ensure
          every student achieves their career goals in the tech industry.
        </p>
      </MotionElement>
    </section>
  );
};

export default WhyChooseUs;
