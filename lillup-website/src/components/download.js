import React from "react";
import { Link } from "react-router-dom";
import "./styles/Download.css";

import logo from "../img/logo.png";
import Background1 from "../img/Background1.png";
import Background2 from "../img/Background2.png";
import GooglePlay from "../img/GooglePlay.png";
import qrCode from "../img/qrCode.png";
import Illustration from "../img/Asset.png"; 

const Download = () => {
  return (
    <div className="download-page">

      {/* TOP BAR */}

      <header className="topbar">

        <img src={logo} alt="Lillup logo" className="logo"/>

        <Link to="/" className="home-button">
          Home
        </Link>

      </header>


      {/* MAIN CONTENT */}

      <section className="download-content">

        {/* LEFT SIDE IMAGE */}

        <div className="download-left">

          <img
            src={Illustration}
            alt="Illustration"
            className="illustration"
          />

        </div>


        {/* RIGHT SIDE CONTENT */}

        <div className="download-right">

          <h1 className="download-title">Download Lillup</h1>

          <ol className="download-steps">
            <li>Open phone camera</li>
            <li>Point your phone to capture the QR code</li>
            <li>Follow link to download app</li>
          </ol>

          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <img
            src={qrCode}
            alt="QR Code"
            className="qr"
          />

          <a href="https://www.google.com/play/">
            <img
              src={GooglePlay}
              alt="Google Play"
              className="play"
            />
          </a>

          <Link to="/signin" className="signin-link">
            Sign in for stakeholder
          </Link>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-links">
          <span>Privacy Statement</span>
          <span>Legal</span>
          <span>Help</span>
          <span>Contact</span>
        </div>

      </footer>


      {/* BACKGROUND WAVES */}

      <img src={Background1} className="bg-top" alt="" />
      <img src={Background2} className="bg-bottom" alt="" />

    </div>
  );
};

export default Download;