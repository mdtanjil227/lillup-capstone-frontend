import React from 'react';
import './styles/sections.css';
import { Link } from 'react-router-dom';
import img_Logo from '../img/Lillup - Logo 1.png';
import img_SignIn from '../img/Button_Sign In.png';
import img_Download from '../img/Button_Download.png';
import './styles/landingPage.css';
import img_Cube from '../img/Cube.png';
const LandingPage = () => {
  return (
    <div className='landing-page'>
      <nav className="navbar">
        <div className="navbar_Logo">
          <img src={img_Logo} alt="Logo" className="logo" />
        </div>
        <div className='navbar_Menu'>
          <ul>
            <li>Features</li> 
            <li>Privacy</li>
            <li>Help Centre</li>
            <li>For Business</li>
          </ul>
        </div>

        <div className="navbar_right">
         <Link to="/download"> {/* Use Link to navigate to the "/download" route */}
            <button className="navbar_button">
              <img src={img_Download} alt="Download" className="button-image" />
            </button>
          </Link>
          <Link to="/signin"> {/* Use Link to navigate to the "/signin" route */}
            <button className="navbar_button">
              <img src={img_SignIn} alt="Sign In" className="button-image" />
            </button>
          </Link>
        </div>
      </nav>
      <section className="top-section">
        <div className="top-section_left">
          <h1>Reshaping the way we <br/>work, learn and live.</h1>
          <p>We aim to solve the issues arising from<br/> the disruption of the field of employment,<br/> the ways we work and learn.</p>
          <Link to="/download"> {/* Use Link to navigate to the "/download" route */}
            <button className="navbar_button">
              <img src={img_Download} alt="Download" className="button-image" />
            </button>
          </Link>
        </div>
        <div className="top-section_right">
          <img src={img_Cube} alt='cube' className='cube' />
        </div>
      </section>
    </div>
    
  );
};

export default LandingPage;