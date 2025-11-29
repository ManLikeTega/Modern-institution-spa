/* eslint-disable no-unused-vars */
import ContactForm from "../../components/ContactForm";
import { contactInfo } from "../../data/contact_data";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Badge from "../../components/Badge";
import MotionElement from "../../components/MotionElement";

function GetInTouch() {
  return (
    <>
      <section className="section">
        <div className="text-center mb-10">
          <Badge Icon={MessageCircle} className="bg-red-100 text-red-700 px-4">
            We'd Love to Hear From You
          </Badge>

          <MotionElement delay={0.2}>
            <h2 className="section_title">
              Let's Start Your{" "}
              <span className="text-red-700">Tech Journey</span>
            </h2>
          </MotionElement>

          <MotionElement delay={0.4}>
            <p>
              Have questions about our courses? Ready to enroll? Reach out to us
              and we'll help you take the first step toward your tech career.
            </p>
          </MotionElement>
        </div>

        <MotionElement className="flex flex-col gap-3 lg:flex-row">
          <div className="w-full lg:w-1/2">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300  border border-gray-200 ${
                    index > 0 && "mt-3"
                  }`}
                >
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.label}
                    </h4>
                    <p className="text-gray-700 font-medium mb-1">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <MotionElement axis="x" delay={0.2} className="w-full">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300  border border-gray-200 p-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h3>

                <p>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </MotionElement>
        </MotionElement>
      </section>
    </>
  );
}

export default GetInTouch;
