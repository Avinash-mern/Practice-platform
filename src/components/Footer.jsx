import React from "react";

export default function Footer({ email, setEmail, handleSubscribe }) {
  return (
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
              <button className="btn btn-primary btn-sm" onClick={handleSubscribe}>
                Subscribe
              </button>
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
  );
}
