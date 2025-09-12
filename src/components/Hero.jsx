import React from "react";
import { ReactTyped } from "react-typed";
import {Link} from "react-router-dom"
export default function Hero() {
  return (
    <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center px-3 py-5">
      <h1
        className="mb-3"
        style={{ fontSize: "clamp(2rem, 6vw, 5rem)", lineHeight: "1.2" }}
      >
        <span className="text-primary">
          <ReactTyped
            strings={["Become", "Upskill"]}
            typeSpeed={120}
            backSpeed={80}
            backDelay={2000}
            loop
          />
        </span>{" "}
        the next
      </h1>

      <h2
        className="fw-light"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.4", maxWidth: "900px" }}
      >
        generation developer <br />
        <span className="fw-normal text-secondary" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
          Our platform enables colleges to assess and upskill their students, while also
          providing learners with the tools they need to build strong foundations for a
          successful career in software development.
        </span>
      </h2>

      <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center">
  <Link to="/colleges" className="btn btn-primary px-4 py-2 fs-5">
    For Colleges
  </Link>
  <Link to="/developers" className="btn btn-outline-light px-4 py-2 fs-5">
    For Developers
  </Link>
</div>
    </main>
  );
}
