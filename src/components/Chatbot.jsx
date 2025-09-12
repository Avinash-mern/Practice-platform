import React from "react";
import { motion } from "framer-motion";

export default function Chatbot({ messages, setMessages, setShowChatbot }) {
  return (
    <motion.div
      className="position-fixed bottom-0 end-0 m-3 bg-white text-dark rounded shadow p-3"
      style={{ width: "280px", height: "350px", zIndex: 2100 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
        <h6 className="m-0 fw-bold">
          <i className="bi bi-robot text-primary me-2"></i> CodePrep Bot
        </h6>
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={() => setShowChatbot(false)}
        >
          ✖
        </button>
      </div>

      {/* Chat Area */}
      <div
        className="overflow-auto mb-2"
        style={{ height: "230px", background: "#f8f9fa", borderRadius: "6px", padding: "10px" }}
      >
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`small p-2 rounded mb-2 ${
              msg.from === "bot" ? "bg-light text-dark" : "bg-primary text-white text-end"
            }`}
          >
            {msg.text}
          </p>
        ))}
      </div>

      {/* Input */}
      <input
        type="text"
        className="form-control"
        placeholder="Type a message..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value.trim()) {
            setMessages((prev) => [
              ...prev,
              { from: "user", text: e.target.value },
              { from: "bot", text: "🤖 Thanks for your question! We'll guide you soon." },
            ]);
            e.target.value = "";
          }
        }}
      />
    </motion.div>
  );
}
