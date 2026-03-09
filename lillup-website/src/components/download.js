import React from "react";
import "./styles/Download.css";
import Back from "../img/Back.png";
import Asset from "../img/Asset.png";
import logo from "../img/logo.png";
import Background1 from "../img/Background1.png";
import Background2 from "../img/Background2.png";
import CopyRight from "../img/CopyRight.png";
import GooglePlay from "../img/GooglePlay.png";
import qrCode from "../img/qrCode.png"; 
import HowToDownload from "../img/Downloadtutorial.png";
import {Link} from "react-router-dom";



const App = () => {
  
  return (
    <div>

<div class="Background1">
    <img class="Background1-size"src={Background1} alt="Background1"/>
</div>
        
     
<div class="logo">
  <img src={logo} alt ="logo"/> 

</div>

<div class ="Back">
<img src={Back} alt="Back"/>
</div>

<div class="Asset">
<img src={Asset} alt="Asset"/>
<a href="https://www.google.com/play/"><img  class="GooglePlay" src={GooglePlay} alt="Google Play" /> </a>
<img class = "qrCode"src={qrCode} alt="qrcode"/> 
<img class ="HowToDownload"src={HowToDownload} alt="HowtoDownload"/>

<Link to="/signin">
  <p class="Sign-in">Sign in</p>
</Link>
<p class ="Sign-in2">for stakeholder</p>

 </div> 
  

 
<div class = "copyright">
 <img class = "copy-right-size"src={CopyRight} alt="Copy Right"/>
</div> 


 
  <div class="Background2">
 <img class="Background2-size" src={Background2} alt="Background2"/>
 </div>
 <div class="footer-bar">
<p class="PrivacyStatement "> Privacy Statement</p>
 <p class="Legal ">| Legal</p>
 <p class="Help ">| Help</p>
 <p class="Contact ">| Contact</p>
 </div>
 
 </div>

  );

  
};

export default App;