/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Badge from "../../components/Badge";
import { values } from "../../data/about_data";

const Values = () => {
  return (
    <section className="section bg-extra">
      {/* Core Values */}
      <div className="text-center">
        <Badge Icon={Star} className="text-red-700 bg-white mb-4">
          Our Core Values
        </Badge>

        <h2 className="section_title mb-12">
          What <span className="text-red-700">Drives Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-700">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
