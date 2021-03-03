import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/signup" exact componenent={Signup} />
        <Route path="/login" exact componenent={Login} />
      </Router>
    </div>
  );
}

export default App;
