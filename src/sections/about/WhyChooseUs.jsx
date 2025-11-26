/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Users,
  BookOpen,
  Laptop,
  Clock,
  GraduationCap,
  Award,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: "Practical, Hands-on Training",
    },
    {
      icon: Users,
      title: "Experienced Instructors",
    },
    {
      icon: BookOpen,
      title: "Project-Based Learning",
    },
    {
      icon: Clock,
      title: "Flexible Schedules",
    },
    {
      icon: GraduationCap,
      title: "Career Guidance",
    },
    {
      icon: Award,
      title: "Certification",
    },
  ];

  return (
    <section className="section">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <CheckCircle className="w-4 h-4" />
          Why Choose Aptech
        </div>

        <h2 className="section_title mb-6">
          Your <span className="text-red-700">Advantage</span> in Tech Education
        </h2>
      </motion.div>

      {/* Features List */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We combine industry expertise with personalized support to ensure
          every student achieves their career goals in the tech industry.
        </p>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
