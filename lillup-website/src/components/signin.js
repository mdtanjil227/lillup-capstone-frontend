import React from "react";
import { Link } from "react-router-dom";
import "./styles/signin.css";

import Illustration from "../img/Tech Life Life Management.png";
import Logo from "../img/Lillup - Logo 1.png";

import { useGoogleLogin } from "@react-oauth/google";

const SignInPage = () => {

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="signin-page">

      {/* TOP BAR */}

      <header className="topbar">

        <img src={Logo} alt="Lillup Logo" className="logo"/>

        <Link to="/" className="home-button">
          Home
        </Link>

      </header>


      {/* MAIN CONTENT */}

      <section className="signin-content">

        {/* LEFT ILLUSTRATION */}

        <div className="illustration">
          <img
            src={Illustration}
            alt="Life Management Illustration"
          />
        </div>


        {/* SIGNIN BOX */}

        <div className="signin-box">

          <h1>Stakeholder Sign In</h1>

          <button
            className="google-btn"
            onClick={() => login()}
          >
            Continue with Google
          </button>
          <Link to="/AccountDetails">
          <button className="email-btn">
          Sign in with Email
          </button>
          </Link>

          <p className="new-user">
            New to Lillup?
            <Link to="/download" className="download-link">
              Download
            </Link>
          </p>

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

export default SignInPage;