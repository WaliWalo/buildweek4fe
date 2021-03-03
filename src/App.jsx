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
      <Container>
        <Header></Header>
        <Route path="/" exact render={(props) => <LoginSingUp {...props} />} />
        <ProtectedRoute path="/home" exact component={Home} />
        <ProtectedRoute
          path="/profile"
          exact
          render={(props) => <Profile {...props} />}
        />
        <ProtectedRoute
          path="/message"
          exact
          render={(props) => <Message {...props} />}
        />
        <ProtectedRoute
          path="/editProfile"
          exact
          render={(props) => <EditProfile {...props} />}
        />

        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
