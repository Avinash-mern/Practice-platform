import React from "react";
import { motion } from "framer-motion";

export default function Brands({ brands }) {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container text-center">
        <h5 className="text-secondary fw-bold mb-4">Trusted by top companies</h5>
        <motion.div
          className="row justify-content-center align-items-center g-1"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="col-4 col-md-2 d-flex justify-content-center align-items-center mb-5"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="img-fluid"
                style={{ maxHeight: "25px", filter: "brightness(0) invert(1)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
