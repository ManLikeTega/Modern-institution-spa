/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const BriefIntroduction = () => {
  return (
    <section className="section">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left Column - Image */}
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl shadow-lg w-full object-cover lg:w-1/2"
          src="https://aptechajah.com/assets/gallery1-Ba6BkcRG.webp"
        />

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-left w-full"
        >
          {/* Badge - Matching your style */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Who We Are
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Career <span className="text-red-700">Transformation</span>{" "}
            Partner
          </h2>

          {/* Content matching your structure */}
          <div className="space-y-6">
            <p>
              At Aptech Fowobi, we're more than just a computer training centre
              —{" "}
              <span className="text-gray-500">
                we’re your partner in career growth and transformation.
              </span>{" "}
              As a proud member of the global Aptech network, we’ve supported
              over{" "}
              <span className="text-red-600 font-medium">
                7 million learners
              </span>{" "}
              worldwide in building successful and rewarding IT careers.
            </p>

            <p>
              <span className="text-red-600 font-medium">
                Our Story in Fowobi
              </span>{" "}
              — Situated in Odun State, Aptech Fowobi Centre delivers{" "}
              <span className="text-gray-500">
                world-class IT education right at your doorstep.
              </span>{" "}
              As a franchise of Aptech Limited, we blend{" "}
              <span class="text-red-600 font-medium">16 years</span> of global
              training excellence with an in-depth understanding of the Nigerian
              tech landscape and job market.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mission & Vision Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 lg:mt-16">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
            <Target className="w-4 h-4" />
            Our Mission
          </div>

          <p>
            To provide industry-ready IT education that transforms lives and
            careers through practical, hands-on training and internationally
            recognized certifications.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
            <Eye className="w-4 h-4" />
            Our Vision
          </div>

          <p>
            To be the leading technology education institution in Africa,
            empowering the next generation of digital innovators and tech
            leaders.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BriefIntroduction;
