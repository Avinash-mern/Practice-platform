import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);

  // Auto messages when chatbot opens
  useEffect(() => {
    if (showChatbot) {
      setTimeout(() => {
        setMessages([
          { from: "bot", text: "👋 Hi! Welcome to CodePrep." },
          { from: "bot", text: "🚀 We are launching soon with coding challenges & hackathons." },
          { from: "bot", text: "💡 Want to know about contests, roadmap, or updates?" },
        ]);
      }, 800);
    }
  }, [showChatbot]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      {/* Header */}
      <header className="navbar navbar-dark bg-black shadow p-3">
        <a href="codeprep.in" className="navbar-brand fw-bold fs-3">CodePrep Academy</a>
        <div>
          <button className="btn btn-outline-light me-2">Login</button>
          <button className="btn btn-primary">Signup</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center px-3">
        <motion.h2
          className="display-4 fw-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🚀 CodePrep Academy
        </motion.h2>

        <motion.p
          className="fs-4 text-secondary mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          is{" "}
          <motion.span
            className="text-info fw-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            launching soon
          </motion.span>{" "}
          their own platform for{" "}
          <span className="text-warning fw-bold">coding challenges</span> and{" "}
          <span className="text-danger fw-bold">hackathons</span>.
        </motion.p>

        {/* <motion.h3
          className="fw-bold text-warning mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          CodePrep – <span className="text-info">जहाँ कोडर्स बनते हैं चैंपियन।</span>
        </motion.h3> */}

        <motion.p
          className="fs-5 text-light fst-italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          ⭐ Stay tuned… we will be <span className="text-success fw-bold">launching soon!</span>
        </motion.p>
      </main>

{/* Footer */}
<footer className="bg-black text-light pt-5 pb-3 mt-5">
  <div className="container">
    <div className="row">
      {/* Products */}
      <div className="col-6 col-md-2 mb-4">
        <h6 className="fw-bold text-uppercase">Products</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="text-secondary text-decoration-none">Screen</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Interview</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Engage</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">SkillUp</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Certified assessments</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Plagiarism detection</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Real-world questions</a></li>
        </ul>
      </div>

      {/* Solutions */}
      <div className="col-6 col-md-3 mb-4">
        <h6 className="fw-bold text-uppercase">Solutions</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="text-secondary text-decoration-none">Set up your skills strategy</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Showcase your tech brand</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Optimize your hiring process</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Mobilize your internal talent</a></li>
        </ul>
      </div>

      {/* Resources */}
      <div className="col-6 col-md-2 mb-4">
        <h6 className="fw-bold text-uppercase">Resources</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="text-secondary text-decoration-none">Blog</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Customer stories</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Roles directory</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Partners</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Integrations</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">What's new</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Writing</a></li>
        </ul>
      </div>

      {/* About */}
      <div className="col-6 col-md-2 mb-4">
        <h6 className="fw-bold text-uppercase">About us</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="text-secondary text-decoration-none">Careers</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Status</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Trust</a></li>
        </ul>
      </div>

      {/* Support */}
      <div className="col-6 col-md-3 mb-4">
        <h6 className="fw-bold text-uppercase">Support</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="text-secondary text-decoration-none">Get started</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Pricing</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Free Trial</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Request a demo</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">Product support</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">For developers</a></li>
          <li><a href="#" className="text-secondary text-decoration-none">HI</a></li>
        </ul>
      </div>
    </div>

    <hr className="border-secondary" />

    {/* Bottom row */}
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary">
      <p className="mb-2 mb-md-0">
        © {new Date().getFullYear()} CodePrep Academy. All Rights Reserved.
      </p>

      {/* Social icons */}
      <div className="d-flex gap-3">
        <a href="https://linkedin.com" target="_blank" className="text-secondary fs-5"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com" target="_blank" className="text-secondary fs-5"><i className="bi bi-github"></i></a>
        <a href="https://twitter.com" target="_blank" className="text-secondary fs-5"><i className="bi bi-twitter"></i></a>
        <a href="https://youtube.com" target="_blank" className="text-secondary fs-5"><i className="bi bi-youtube"></i></a>
      </div>

      <div className="mt-2 mt-md-0">
        <a href="/privacy" className="text-secondary text-decoration-none me-3">Privacy Policy</a>
        <a href="/terms" className="text-secondary text-decoration-none">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>


      {/* Floating Buttons (bottom-right) */}
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
        {/* Bot with Ask me anything */}
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
          href="https://wa.me/+91-7488394698" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success rounded-circle shadow d-flex align-items-center justify-content-center"
          style={{ width: "65px", height: "65px", fontSize: "28px" }}
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>

      {/* Chatbot Popup (bottom-right) */}
      {showChatbot && (
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
      )}
    </div>
  );
}
