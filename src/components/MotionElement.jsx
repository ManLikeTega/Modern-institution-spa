/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function MotionElement({ children, delay, once = true, className = "" }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
        viewport={{ once: once }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
}

export default MotionElement;
