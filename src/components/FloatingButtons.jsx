import React from "react";
import { motion } from "framer-motion";

export default function FloatingButtons({ showChatbot, setShowChatbot }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        alignItems: "flex-end",
        zIndex: 2000,
      }}
    >
      {/* Bot */}
      <div className="d-flex align-items-center">
        <motion.span
          className="me-2 text-light bg-info px-2 py-1 rounded-pill small"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Ask me anything
        </motion.span>
        <button
          className="btn btn-light rounded-circle shadow"
          style={{ width: "55px", height: "55px" }}
          onClick={() => setShowChatbot(!showChatbot)}
        >
          <i className="bi bi-robot fs-3 text-primary"></i>
        </button>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+91-7488394698"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success rounded-circle shadow d-flex align-items-center justify-content-center"
        style={{ width: "65px", height: "65px", fontSize: "28px" }}
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}
