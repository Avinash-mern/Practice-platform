import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import FloatingButtons from "./components/FloatingButtons";

// Pages
import Colleges from "./pages/Colleges";
import Developers from "./pages/Developers";
import Courses from "./pages/Courses";

// logos
import airbnbLogo from "./assets/logos/airbnbnew.svg";
import linkedinLogo from "./assets/logos/linkedinnew.svg";
import stripelogo from "./assets/logos/stripenew.svg";
import atlassianlogo from "./assets/logos/atlassiannew.svg";
import ibmlogo from "./assets/logos/ibmnew.svg";
import snapinc from "./assets/logos/snapincnew.svg";
import door from "./assets/logos/doordashnew.svg";
import adobe from "./assets/logos/adobenew.svg";
import paypal from "./assets/logos/paypalnew.svg";
import golman from "./assets/logos/golmannew.svg";
import canva from "./assets/logos/canvanew.svg";

export default function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [email, setEmail] = useState("");

  // Fonts
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @import url("https://fonts.cdnfonts.com/css/satoshi");
      body, * { font-family: "Satoshi", Verdana, sans-serif !important; }
    `;
    document.head.appendChild(style);
  }, []);

  // Auto messages for chatbot
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
    if (email.trim()) {
      alert(`Thanks for subscribing with ${email}!`);
      setEmail("");
    }
  };

  const brands = [
    { name: "Airbnb", src: airbnbLogo },
    { name: "Stripe", src: stripelogo },
    { name: "LinkedIn", src: linkedinLogo },
    { name: "Atlassian", src: atlassianlogo },
    { name: "IBM", src: ibmlogo },
    { name: "Snap Inc.", src: snapinc },
    { name: "DoorDash", src: door },
    { name: "Adobe", src: adobe },
    { name: "Paypal", src: paypal },
    { name: "Goldman Sachs", src: golman },
    { name: "Canva", src: canva },
  ];

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-dark text-light">
        <Navbar />

        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />  {/* Hero has the For Colleges & For Developers buttons */}
                <Brands brands={brands} />
              </>
            }
          />

          {/* Dedicated Pages */}
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>

        <Footer
          email={email}
          setEmail={setEmail}
          handleSubscribe={handleSubscribe}
        />

        <FloatingButtons
          showChatbot={showChatbot}
          setShowChatbot={setShowChatbot}
        />

        {showChatbot && (
          <Chatbot
            messages={messages}
            setMessages={setMessages}
            setShowChatbot={setShowChatbot}
          />
        )}
      </div>
    </Router>
  );
}
