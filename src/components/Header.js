import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="white">
      <div className="ui container stackable grid">
        <div className="eleven wide column">
          <div className="ui secondary menu">
            <div className="item">
              <Link to="/">
                <img
                  className="ui mini image"
                  src="/images/rblue.PNG"
                  alt="r"
                ></img>
              </Link>
            </div>
            <div className="menu">
              <Link to="/" className="menu-link item">
                Home
              </Link>
              <Link to="/about" className="menu-link item">
                About
              </Link>
              <Link to="/projects" className="menu-link item">
                Projects
              </Link>
              <Link to="/contact" className="menu-link item">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="five wide column">
          <a
            href="https://docs.google.com/document/d/1Aj3imAitdbc40272G5laiR14nEolRlCJvq_7Ka90Rnw/edit?usp=sharing"
            className="no-hover item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ui button resume-button">
              Download My Resume<i class="right chevron icon"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
