/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { useMediaQuery } from "react-responsive";
import { Play, Clock, Users, ChevronRight } from "lucide-react";

function CourseCard({
  image,
  title,
  description,
  activeTitle,
  setActiveTitle,
}) {
  const isSmall = useMediaQuery({ maxWidth: 767 });
  const isActive = title === activeTitle;

  const handleCardClick = () => {
    setActiveTitle(isActive ? null : title);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <motion.div
      className="relative rounded-2xl h-[400px] overflow-hidden cursor-pointer group"
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-label={`${title} course${isActive ? " - expanded" : ""}`}
      animate={{
        width: isActive ? (isSmall ? 320 : 500) : 320,
        scale: isActive ? 1.02 : 1,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
        delay: isActive ? 0 : 0.3,
      }}
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-700"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />

      {/* Content Container */}
      <div className="absolute bottom-0 w-full p-6 z-10 text-white">
        {/* Title */}
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-3 leading-tight"
          layout="position"
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {title}
        </motion.h3>

        {/* Expandable Content */}
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="expanded-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-gray-200 mb-4 leading-relaxed"
              >
                {description}
              </motion.p>

              {/* Features List */}
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="grid grid-cols-2 gap-2 mb-6 text-sm"
              >
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  Hands-on Projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  Certificate
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  Lifetime Access
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  Community Support
                </li>
              </motion.ul>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link to="/contact" className="block">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-linear-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Play className="w-5 h-5" />
                    Enroll Now
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-gray-300 text-sm"
            >
              <span>Click to learn more</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default CourseCard;
