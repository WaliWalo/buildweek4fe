import "bootstrap/dist/css/bootstrap.min.css";
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

function App() {
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <Route path="/home" exact render={(props) => <Home />} />
        <Route path="/" exact render={(props) => <LoginSingUp />} />
        <Route path="/profile" exact render={(props) => <Profile />} />
        <Route path="/message" exact render={(props) => <Message />} />
        <Route path="/editProfile" exact render={(props) => <EditProfile />} />

        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
