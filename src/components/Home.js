import React from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import "./Home.css";

const About = () => {
  return (
    <div className="blue">
      <div className="ui container">
        <div className="ui two column grid stackable">
          <div className="column">
            <div>
              <h1>Hello, I'm Rachael Mahar!</h1>
              <p className="about">
                I am a full stack developer located in Fort Lauderdale, FL.
              </p>
            </div>
            <br></br>
            <br></br>
            <div>
              <h1>Skills</h1>
            </div>
            <Skills />
          </div>

          <div className="column">
            <Link to="/projects">
              <button class="norm-buttom ui inverted button">
                Check out my projects where I use these skills
                <i class="right chevron icon"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
