import React from "react";
import "./App.css";
import { Router, Route } from "react-router-dom";
import SignupPage from "./pages/Signup/SignupPage";

function App() {
  return (
    <Router>
      <div className="App">
        <SignupPage />
      </div>
    </Router>
  );
}

export default App;
