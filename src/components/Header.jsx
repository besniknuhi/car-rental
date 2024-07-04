import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../images/logo/logo.png";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Header() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/*mobile*/}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar-close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar-links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/*desktop*/}

        <div className="navbar">
          <div className="navbar-img">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="navbar-links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar-buttons">
            <Link to="/" className="navbar-signin">
              Sign In
            </Link>
            <Link to="/" className="navbar-register">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  );
}
