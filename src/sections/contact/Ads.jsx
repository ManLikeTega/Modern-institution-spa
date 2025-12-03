import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Badge from "../../components/Badge";

function Ads() {
  const [selectedBrochure, setSelectedBrochure] = useState(null);

  const brochures = [
    {
      id: 1,
      title: "ACNS Program",
      description:
        "Advanced Certificate in Network Security - Comprehensive cybersecurity training program",
      image: "/brochures/acnsBrochure.jpeg",
      downloadLink: "/brochures/acnsBrochure.pdf",
    },
    {
      id: 2,
      title: "ADSE Program",
      description:
        "Advanced Diploma in Software Engineering - Full-stack development and software engineering",
      image: "/brochures/adseBrochure.jpg",
      downloadLink: "/brochures/adseBrochure.pdf",
    },
    {
      id: 3,
      title: "SmartPro Program",
      description:
        "Professional IT courses covering modern technologies and industry tools",
      image: "/brochures/smartProBrochure.jpg",
      downloadLink: "/brochures/smartProBrochure.pdf",
    },
  ];

  const openBrochure = (brochure) => {
    setSelectedBrochure(brochure);
  };

  const closeBrochure = () => {
    setSelectedBrochure(null);
  };

  const downloadBrochure = (e, brochure) => {
    e.stopPropagation();
    // In a real app, this would trigger the actual download
    console.log(`Downloading ${brochure.title}`);
    // You can use: window.open(brochure.downloadLink, '_blank');
  };

  return (
    <section className="section bg-extra">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge Icon={FileText} className="bg-white text-red-700">
            Course Brochures
          </Badge>

          <h2 className="section_title">
            Explore Our <span className="text-red-700">Programs</span>
          </h2>

          <p>
            Download detailed brochures for each of our programs to learn about
            curriculum, career prospects, admission requirements, and more.
          </p>
        </motion.div>

        {/* Brochures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brochures.map((brochure, index) => (
            <motion.div
              key={brochure.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-red-300 overflow-hidden cursor-pointer"
              onClick={() => openBrochure(brochure)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={brochure.image}
                  alt={brochure.title}
                  className="w-full h-48 object-cover transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                  {brochure.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {brochure.description}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openBrochure(brochure);
                    }}
                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    View Brochure
                  </button>
                  <button
                    onClick={(e) => downloadBrochure(e, brochure)}
                    className="w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brochure Modal */}
        {selectedBrochure && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeBrochure}
          >
            <div
              className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedBrochure.title}
                  </h3>
                  <p className="text-gray-600">
                    {selectedBrochure.description}
                  </p>
                </div>
                <button
                  onClick={closeBrochure}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Brochure Image */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <img
                  src={selectedBrochure.image}
                  alt={selectedBrochure.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Ads;
