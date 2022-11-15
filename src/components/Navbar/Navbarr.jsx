import React from "react";
import "./navBar.css";
import { Link } from "react-scroll";

const Navbarr = () => {
  return (
    <div className="n-wrapper" id="Navbarr">
      <div className="n-left">
        <div className="n-name">Angel Carrasco</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbarr"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>

            <Link
              spy={true}
              to="Skills"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Skills</li>
            </Link>

            <Link
              spy={true}
              to="Projects"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Projects</li>
            </Link>

            <Link
              spy={true}
              to="Certificates"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Certificates</li>
            </Link>

            <Link
              spy={true}
              to="Contact"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
            <button className="button n-button">Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbarr;
