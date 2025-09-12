import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // import the CSS below

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow p-3">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fs-3 " to="/">
          Codeprep Academy
        </Link>

        {/* Toggler (hamburger) */}
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

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">

            {/* Products (dropdown) */}
            <li className="nav-item dropdown">
              {/* Use an anchor/button with data-bs-toggle so mobile click works */}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="productsDropdown">
                <li><Link className="dropdown-item" to="/products/contest">Coding Contest</Link></li>
                <li><Link className="dropdown-item" to="/products/leaderboard">Leaderboard</Link></li>
                <li><Link className="dropdown-item" to="/products/notes">Notes Sharing</Link></li>
                <li><Link className="dropdown-item" to="/products/assess">Certified Assessments</Link></li>
              </ul>
            </li>

            {/* Solutions (dropdown) */}
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
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="solutionsDropdown">
                <li><Link className="dropdown-item" to="/solutions/colleges">For Colleges</Link></li>
                <li><Link className="dropdown-item" to="/solutions/students">For Students</Link></li>
                <li><Link className="dropdown-item" to="/solutions/enterprise">For Enterprises</Link></li>
                <li><Link className="dropdown-item" to="/solutions/bootcamp">For Bootcamps</Link></li>
              </ul>
            </li>

            {/* More (dropdown) */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="moreDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="moreDropdown">
              <li>
                <Link to="/courses" className="dropdown-item">
                  Explore Courses
                </Link>
              </li>

                <li><Link className="dropdown-item" to="/register-courses">Register for Courses</Link></li>
                <li><Link className="dropdown-item" to="/verify-certificate">Verify Certificate</Link></li>
                <li><Link className="dropdown-item" to="/generate-notes">Generate Notes</Link></li>
              </ul>
            </li>

            {/* Resources */}
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            {/* Mobile-only full-width buttons */}
            <li className="nav-item d-lg-none mt-3 w-100">
              <button className="btn btn-outline-light w-100 mb-2">Login</button>
            </li>
            <li className="nav-item d-lg-none w-100">
              <button className="btn btn-primary w-100">Signup</button>
            </li>

            {/* Desktop inline buttons */}
            <li className="nav-item ms-lg-3 d-none d-lg-flex align-items-center">
              <button className="btn btn-outline-light me-2">Login</button>
              <button className="btn btn-primary">Signup</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
