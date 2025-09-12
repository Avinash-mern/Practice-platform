import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow p-3">
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="/">Codeprep Academy</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Solutions</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><button className="btn btn-outline-light me-2">Login</button></li>
            <li className="nav-item"><button className="btn btn-primary">Signup</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
