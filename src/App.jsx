import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import LoginSingUp from "./components/Login/LoginSingUp";
import Message from "./components/Message/Message";
import Footer from "./components/Navbar/Footer";
import Header from "./components/Navbar/Header";
import EditProfile from "./components/Profile/EditProfile";
import Profile from "./components/Profile/Profile";
import ProtectedRoute from "./customComponent/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Route path="/" exact render={(props) => <LoginSingUp {...props} />} />
        <ProtectedRoute path="/home" exact component={Home} />
        <ProtectedRoute path="/profile" exact component={Profile} />
        <ProtectedRoute path="/message" exact component={Message} />
        <ProtectedRoute path="/editProfile" exact component={EditProfile} />
      </Container>
    </div>
  );
}

export default App;
