import React from "react";
import "./Header.css";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Message from "../Message/Message";

export default function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <div className="logo">
          <Navbar.Brand href="/">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
              alt="logo"
              style={{ width: "100px", height: "55px" }}
            />
          </Navbar.Brand>
        </div>

        <div className="search">
          <form method="post">
            <input
              type="text"
              name="subject"
              class="instaSearch"
              value=""
              placeholder="Search"
            />
          </form>
        </div>
        <span className="spanheader">
          <Link to="/home" /* exact component={Home} */>
            <i class="fas fa-xs fa-home"></i>
          </Link>
          <Link to="/addpost">
            <i class="fas fa-xs fa-plus-square"></i>
          </Link>
          <Link
            to="/message" /* exact render={(props) => <Message {...props} />} */
          >
            <i class="fas fa-xs fa-paper-plane"></i>
          </Link>
          <Link to="/randomposts" /* MAYBE LATER*/>
            <i class="fas fa-xs fa-compass"></i>
          </Link>
          <Link to="/likes">
            <i class="fas fa-xs fa-heart"></i>
          </Link>
          <div class="wrap-img">
            <Link
              to="/profile" /* exact render={(props) => <Profile {...props} />} */
            >
              <img
                class="profile-img"
                src="https://via.placeholder.com/150"
                /* {this.state.user.picture} */ alt=""
              />
            </Link>
          </div>
        </span>
      </Container>
    </Navbar>
  );
}
