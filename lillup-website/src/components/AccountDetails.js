import React, { useState } from 'react';
import leftImage from '../img/Tech Life - Virtual Reality.png';
import lillupLogo from '../img/Lillup-Logo.png'; 
import continueImage from '../img/Button_Continue.png'; 
import './styles/AccountDetails.css'; 

const AccountDetails = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="Account-Details">

      <header>
        
        <img 
          src={lillupLogo} 
          alt="Lillup Logo" 
          className="logo-2"
        />
      </header>
      <main className="main-container">
        <div className="left-section">
        <div className="image-frame">
        <img 
            src={leftImage} 
            alt="Tech_Life" 
            className="left-image"
          />
        </div>
        </div>
      
<div className="right-section">
  <button class="back-button" onClick="window.history.back()">Back</button>
  <div className="content-frame">
    <form className="form-container">
      <div className="progress-bar">
        <div className="progress-dots">
          <div className="progress-dot progress-dot-one">1</div>
          <div className="progress-line"></div>
          <div className="progress-dot">2</div>
          <div className="progress-line"></div>
          <div className="progress-dot">3</div>
        </div>
      </div>
          <div className="content">
            <h1>Account Details</h1>
            <p>
              Thank you for joining Lillup. For future communications, kindly provide your business email.
            </p>
            <div className="email-input">
              <div>Email address</div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="continue-button">
            <img
              src={continueImage}
              alt="Continue"
              className="continue-image"
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </div>
        </form>
        </div>
        </div>
      </main>
      <footer className="footer">
        <div className="copyright">
          Copyright © 2023 Lillup. All rights reserved.
        </div>
        <div className="footer-links">
        <a href="/privacy">Privacy Statement</a> | 
          <a href="/legal">Legal</a> | 
          <a href="/help">Help</a> | 
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default AccountDetails;