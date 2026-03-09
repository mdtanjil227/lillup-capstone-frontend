import React from "react";
import { Link } from "react-router-dom";
import "./styles/signin.css"; // Make sure the CSS file is in the same directory
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
    <div className="container">
      <a href="#back" className="back-link">
        {"< Back"}
      </a>
      <div className="logo-header">
        <img src={Logo} alt="Lillup Logo" className="logo" />
      </div>
      <div className="main-content">
        <div className="illustration">
          <img
            src={Illustration}
            alt="Life Management Illustration"
            className="illustration-img"
          />
        </div>
        <div className="sign-in-box">
          <h1 className="title">Stakeholder sign in</h1>
          <Link to="/AccountDetails">
            <button className="google-signin-btn" onClick={() => login()}>
              Continue with Google
            </button>
          </Link>
          
          <div className="new-user">
            New to Lillup?{" "}
            <a href="/download" className="download-link">
              Download
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="copyright">
          Copyright © 2023 Lillup. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="/privacy">Privacy Statement</a> |<a href="/legal">Legal</a> |
          <a href="/help">Help</a> |<a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;