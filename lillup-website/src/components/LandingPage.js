import React from "react";
import { Link } from "react-router-dom";

import "./styles/landingPage.css";
import "./styles/sections.css";

import logo from "../img/Lillup - Logo 1.png";
import signInBtn from "../img/Button_Sign In.png";
import downloadBtn from "../img/Button_Download.png";
import cube from "../img/Cube.png";

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* TOP BAR */}

      <nav className="topbar">

        <div className="logo-container">
          <img src={logo} alt="Lillup Logo" className="logo" />
        </div>

        <div className="topbar-actions">

          <Link to="/download">
            <img src={downloadBtn} alt="Download" className="button-image" />
          </Link>

          <Link to="/signin">
            <img src={signInBtn} alt="Sign In" className="button-image" />
          </Link>

        </div>

      </nav>


      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            Reshaping the way we <br />
            work, learn and live.
          </h1>

          <p>
            We aim to solve the issues arising from the disruption
            of the field of employment, the ways we work and learn.
          </p>

          <Link to="/download">
            <img src={downloadBtn} alt="Download" className="hero-button" />
          </Link>

        </div>


        <div className="hero-right">
          <img src={cube} alt="Cube Illustration" className="cube" />
        </div>

      </section>


      {/* BOTTOM MENU */}

      <footer className="bottom-menu">

        <ul>
          <li>Features</li>
          <li>Privacy</li>
          <li>Help Centre</li>
          <li>For Business</li>
        </ul>

      </footer>

    </div>
  );
};

export default LandingPage;