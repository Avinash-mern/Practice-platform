import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [email, setEmail] = useState("");

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

  const handleSubscribe = () => {
    if(email.trim()) {
      alert(`Thanks for subscribing with ${email}!`);
      setEmail("");
    }
  };

  const brands = [
    { name: "Airbnb", src: "/logos/airbnb.png" },
    { name: "Stripe", src: "/logos/stripe.png" },
    { name: "LinkedIn", src: "/logos/linkedin.png" },
    { name: "Atlassian", src: "/logos/atlassian.png" },
    { name: "IBM", src: "/logos/ibm.png" },
    { name: "Snap Inc.", src: "/logos/snap.png" },
    { name: "DoorDash", src: "/logos/doordash.png" },
    { name: "Adobe", src: "/logos/adobe.png" },
    { name: "Paypal", src: "/logos/paypal.png" },
    { name: "Goldman Sachs", src: "/logos/goldman.png" },
    { name: "Canvai", src: "/logos/canvai.png" },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow p-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-3" href="/">Upskill the next
          generation developer</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Solutions</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item">
                <button className="btn btn-outline-light me-2">Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">Signup</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center px-3 py-5">
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

        <motion.p
          className="fs-5 text-light fst-italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          ⭐ Stay tuned… we will be <span className="text-success fw-bold">launching soon!</span>
        </motion.p>
      </main>

      {/* Trusted Brands Section */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h5 className="text-secondary fw-bold mb-4">Trusted by top companies</h5>
          <div className="row justify-content-center align-items-center g-4">
            {brands.map((brand, index) => (
              <div key={index} className="col-4 col-md-2 d-flex justify-content-center align-items-center">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="img-fluid"
                  style={{ maxHeight: "50px", filter: "brightness(0) invert(1)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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

            {/* Support + Newsletter */}
            <div className="col-6 col-md-3 mb-4">
              <h6 className="fw-bold text-uppercase">Support</h6>
              <ul className="list-unstyled small mb-3">
                <li><a href="#" className="text-secondary text-decoration-none">Get started</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Pricing</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Free Trial</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Request a demo</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Product support</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">For developers</a></li>
              </ul>

              <h6 className="fw-bold text-uppercase">Newsletter</h6>
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control form-control-sm me-2"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary btn-sm" onClick={handleSubscribe}>Subscribe</button>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="text-center mt-4">
            <div className="mb-2">
              <i className="bi bi-facebook me-2 fs-4 text-secondary"></i>
              <i className="bi bi-twitter me-2 fs-4 text-secondary"></i>
              <i className="bi bi-linkedin me-2 fs-4 text-secondary"></i>
              <i className="bi bi-github fs-4 text-secondary"></i>
            </div>
            <small className="text-secondary">
              © {new Date().getFullYear()} CodePrep Academy. All Rights Reserved. 
              <a href="#" className="text-secondary text-decoration-none"> Privacy Policy</a> | 
              <a href="#" className="text-secondary text-decoration-none"> Terms of Service</a>
            </small>
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
          href="https://wa.me/+91-7488394698"
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
