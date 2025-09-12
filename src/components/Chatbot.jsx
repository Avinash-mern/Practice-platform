import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot({ setShowChatbot }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    requestType: "",
    search: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.requestType || !form.description) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    console.log("📩 Ticket Submitted:", form);

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", requestType: "", search: "", description: "" });
  };

  return (
    <motion.div
      className="position-fixed bottom-0 end-0 m-3 rounded shadow-lg p-3"
      style={{
        width: "350px",
        minHeight: "420px",
        background: "#111",
        color: "#f1f1f1",
        zIndex: 2100,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-2 mb-3">
        <h6 className="m-0 fw-bold text-light">
          <i className="bi bi-headset text-primary me-2"></i> Support Ticket
        </h6>
        <button
          type="button"
          className="btn btn-sm btn-outline-light"
          onClick={() => setShowChatbot(false)} // ✅ now works
        >
          ✖
        </button>
      </div>

      {/* Submitted Message */}
      {submitted ? (
        <div className="text-center p-3">
          <i className="bi bi-check-circle-fill text-success fs-1 mb-2"></i>
          <h6 className="fw-bold">Ticket Submitted</h6>
          <small>✅ Our support team will contact you soon.</small>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="overflow-auto" style={{ maxHeight: "330px" }}>
          {/* Name */}
          <div className="mb-2">
            <label className="form-label small">Name *</label>
            <input
              type="text"
              className="form-control form-control-sm bg-dark text-light border-secondary"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-2">
            <label className="form-label small">Email *</label>
            <input
              type="email"
              className="form-control form-control-sm bg-dark text-light border-secondary"
              placeholder="Your Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Subject */}
          <div className="mb-2">
            <label className="form-label small">Subject *</label>
            <input
              type="text"
              className="form-control form-control-sm bg-dark text-light border-secondary"
              placeholder="Enter Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          {/* Request Type */}
          <div className="mb-2">
            <label className="form-label small">Request Type *</label>
            <select
              className="form-select form-select-sm bg-dark text-light border-secondary"
              name="requestType"
              value={form.requestType}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Technical">🛠 Technical</option>
              <option value="Billing">💳 Billing</option>
              <option value="General">📩 General</option>
              <option value="Other">❓ Other</option>
            </select>
          </div>

          {/* Search */}
          <div className="mb-2">
            <label className="form-label small">Search</label>
            <input
              type="text"
              className="form-control form-control-sm bg-dark text-light border-secondary"
              placeholder="Search existing issues..."
              name="search"
              value={form.search}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label small">Description *</label>
            <textarea
              className="form-control form-control-sm bg-dark text-light border-secondary"
              rows="3"
              placeholder="Describe your issue..."
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100 btn-sm fw-bold">
            🚀 Submit Ticket
          </button>
        </form>
      )}
    </motion.div>
  );
}
