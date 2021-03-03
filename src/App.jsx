import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Message from "./components/Message/Message";
import Footer from "./components/Navbar/Footer";
import Header from "./components/Navbar/Header";
import EditProfile from "./components/Profile/EditProfile";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";
function App() {
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <Route path="/" exact render={(props) => <Home />} />
        <Route path="/login" exact render={(props) => <Login />} />
        <Route path="/signUp" exact render={(props) => <Signup />} />
        <Route path="/profile" exact render={(props) => <Profile />} />
        <Route path="/message" exact render={(props) => <Message />} />
        <Route path="/editProfile" exact render={(props) => <EditProfile />} />

        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
