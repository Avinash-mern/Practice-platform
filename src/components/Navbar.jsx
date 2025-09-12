import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow p-3">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fs-3" to="/">
          Codeprep Academy
        </Link>

        {/* Toggler (Hamburger) */}
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

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Products */}
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            {/* Solutions with Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="solutionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul className="dropdown-menu bg-dark border-0" aria-labelledby="solutionsDropdown">
                <li>
                  <Link className="dropdown-item text-light" to="/solutions/colleges">
                    For Colleges
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-light" to="/solutions/developers">
                    For Developers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-light" to="/solutions/enterprises">
                    For Enterprises
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-light" to="/solutions/bootcamps">
                    For Bootcamps
                  </Link>
                </li>
              </ul>
            </li>

            {/* Resources */}
            <li className="nav-item">
              <Link className="nav-link" to="/resources">
                Resources
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            {/* Full-width buttons (mobile only) */}
            <li className="nav-item d-lg-none mt-3">
              <button className="btn btn-outline-light w-100 mb-2">Login</button>
            </li>
            <li className="nav-item d-lg-none">
              <button className="btn btn-primary w-100">Signup</button>
            </li>

            {/* Normal inline buttons (desktop only) */}
            <li className="nav-item ms-lg-3 d-none d-lg-block">
              <button className="btn btn-outline-light me-2">Login</button>
              <button className="btn btn-primary">Signup</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
