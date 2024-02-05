import React from "react";
import { Link } from "react-router-dom";
const Footer = function () {
  return (
    <>
      <footer className="footer">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="footer-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="footer-link px-2 text-body-secondary">
              🛒About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className="footer-link px-2 text-body-secondary"
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="footer-link px-2 text-body-secondary">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="footer-link px-2 text-body-secondary">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center footer-link text-body-secondary">
          Agrico© 2023 Company, Inc
        </p>
      </footer>
    </>
  );
};

export default Footer;
