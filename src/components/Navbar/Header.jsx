import React from "react";
import "./Header.css";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Container class="container-fluid">
      <Navbar fixed="top">
        <Navbar.Brand href="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            alt="logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>

        <div class="searchWrap d-md-none">
          <form action="index.php" method="post">
            <input
              type="text"
              name="subject"
              class="instaSearch"
              value=""
              placeholder="Search"
            />
          </form>
        </div>
        <span className="d-md-flex align-items-center">
          <ul>
            <li>
              <a href="#">
                <i class="fas fa-home"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-plus-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-paper-plane"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-compass"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="profile-img" src="" alt="" />
              </a>
            </li>
          </ul>
        </span>
      </Navbar>
    </Container>

    /*     <nav>
      <ul>
        <li>
          <a href="#">
            <i class="fas fa-home"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-plus-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-paper-plane"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-compass"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-heart"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="profile-img" src="" alt="" />
          </a>
        </li>
      </ul>
    </nav> */
  );
}
