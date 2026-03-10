import React, { useState } from "react";
import { Link } from "react-router-dom";

import leftImage from "../img/Tech Life - Virtual Reality.png";
import lillupLogo from "../img/Lillup-Logo.png";
import continueImage from "../img/Button_Continue.png";

import "./styles/AccountDetails.css";

const AccountDetails = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <div className="account-page">

      {/* TOP BAR */}

      <header className="topbar">

        <img
          src={lillupLogo}
          alt="Lillup Logo"
          className="logo"
        />

        <Link to="/" className="home-button">
          Home
        </Link>

      </header>


      {/* MAIN CONTENT */}

      <section className="account-content">

        {/* LEFT IMAGE */}

        <div className="left-section">

          <img
            src={leftImage}
            alt="Virtual Reality"
            className="illustration"
          />

        </div>


        {/* FORM */}

        <div className="right-section">

          <button
            className="back-button"
            onClick={() => window.history.back()}
          >
            Back
          </button>

          <form
            className="form-container"
            onSubmit={handleSubmit}
          >

            {/* PROGRESS BAR */}

            <div className="progress-bar">

              <div className="dot active">1</div>
              <div className="line"></div>
              <div className="dot">2</div>
              <div className="line"></div>
              <div className="dot">3</div>

            </div>


            {/* CONTENT */}

            <div className="form-content">

              <h1>Account Details</h1>

              <p>
                Thank you for joining Lillup.
                For future communications, kindly provide your
                business email.
              </p>

              <label>Email address</label>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>


            {/* CONTINUE BUTTON */}

            <button className="continue-btn">

              <img
                src={continueImage}
                alt="Continue"
              />

            </button>

          </form>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <p>Copyright © 2023 Lillup. All rights reserved.</p>

        <div className="footer-links">
          <span>Privacy Statement</span>
          <span>Legal</span>
          <span>Help</span>
          <span>Contact</span>
        </div>

      </footer>

    </div>
  );
};

export default AccountDetails;