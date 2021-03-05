import React from "react";
import "./Header.css";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useSelector((state) => state);
  return (
    <Navbar expand="lg">
      <Container className="HomeContainer">
        <div className="logo">
          <Navbar.Brand href="/home">
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
        <span>
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
              to="/profile/me" /* exact render={(props) => <Profile {...props} />} */
            >
              <img
                class="profile-img"
                src={user && user.picture}
                /* {this.state.user.picture} */ alt="user avatar"
              />
            </Link>
          </div>
        </span>
      </Container>
    </Navbar>
  );
}
