import React from "react";
import { NavLink, Link } from "react-router-dom";
const Header = function () {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Agrico
          </Link>
          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
              <li className="nav-item px-2">
                <NavLink to="/" className="nav-link ">
                  🏡Home
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink to="/About" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink to="/Contact" className="nav-link">
                  ☎️Contact
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink to="/Register" className="nav-link">
                  Register
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink to="/Profile" className="nav-link">
                  Profile
                </NavLink>
              </li>

              <li className="nav-item px-2 ">
                <NavLink to="/login" className="nav-link">
                  🛒Cart ( 0 )
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
