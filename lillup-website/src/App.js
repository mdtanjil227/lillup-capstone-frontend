import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignInPage from "./components/signin";
import DownloadPage from "./components/download";
import AccountDetails from "./components/AccountDetails";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="639466381585-61hhsrlrrrkraia4q9bqke8pj13unplh.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/AccountDetails" element={<AccountDetails />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;