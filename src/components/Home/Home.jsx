import React, { useEffect, useState } from "react";
import Header from "../Navbar/Header";
import Post from "../Post/Post";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import Ermal from "../../assets/images/erm.png";
import Ibra from "../../assets/images/ibra.jpg";
import Jin1 from "../../assets/images/jin1.png";
import Jin2 from "../../assets/images/jin2.png";
import Tobia from "../../assets/images/tobia.png";
import Posts from "./Posts";
import Story from "./Story";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Container className="mt-5 HomeContainer">
        <Row>
          <Story />
        </Row>
        <Row>
          <Col className="d-block" md={8}>
            {/* {`xs={{ span: 8, offset: 0 }}`} */}
            {/* <Post /> */}
            <Posts />
          </Col>
          <Col lg={4} className="d-none d-lg-block d-xl-block">
            <Row>
              <Col className="left-up d-flex">
                <div className="mainpicwrapper">
                  <a href="#">
                    <img
                      class="mainpic"
                      src="https://via.placeholder.com/200"
                      alt=""
                    />
                  </a>
                </div>
                <div className="maintxtwrap">
                  <p className="maintxt">
                    <strong>ProfileName</strong>
                  </p>
                </div>
                <div className="mainlinkwrap">
                  <strong>
                    <a href="#">Switch</a>
                  </strong>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="left-up d-flex">
                <div className="centertxtwrap">
                  <p className="centertxt">
                    <strong>Suggestions for you</strong>
                  </p>
                </div>
                <div>
                  <p className="centertxt">
                    <strong>
                      <a href="#">See All</a>
                    </strong>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="left-up d-flex">
                <div className="pic-wrapper">
                  <a href="#">
                    <img class="pic" src={Ermal} alt="" />
                  </a>
                </div>
                <div className="text-wrapper">
                  <p className="text text-align-left">
                    <strong>fakeermal</strong>
                  </p>
                </div>
                <div className="link-wrap">
                  <strong>
                    <a href="#">Follow</a>
                  </strong>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="left-up d-flex">
                <div className="pic-wrapper">
                  <a href="#">
                    <img class="pic" src={Ibra} alt="" />
                  </a>
                </div>
                <div className="text-wrapper">
                  <p className="text text-align-left">
                    <strong>ermalofficial</strong>
                  </p>
                </div>
                <div className="link-wrap">
                  <strong>
                    <a href="#">Follow</a>
                  </strong>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="left-up d-flex">
                <div className="pic-wrapper">
                  <a href="#">
                    <img class="pic" src={Jin1} alt="" />
                  </a>
                </div>
                <div className="text-wrapper">
                  <p className="text">
                    <strong>soberjin</strong>
                  </p>
                </div>
                <div className="link-wrap">
                  <strong>
                    <a href="#">Follow</a>
                  </strong>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="left-up d-flex">
                <div className="pic-wrapper">
                  <a href="#">
                    <img class="pic" src={Jin2} alt="" />
                  </a>
                </div>
                <div className="text-wrapper">
                  <p className="text">
                    <strong>jinwithbooze</strong>
                  </p>
                </div>
                <div className="link-wrap">
                  <strong>
                    <a href="#">Follow</a>
                  </strong>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="left-up d-flex">
                <div className="pic-wrapper">
                  <a href="#">
                    <img class="pic" src={Tobia} alt="" />
                  </a>
                </div>
                <div className="text-wrapper">
                  <p className="text">
                    <strong>tobiadeangelis</strong>
                  </p>
                </div>
                <div className="link-wrap">
                  <strong>
                    <a href="#">Follow</a>
                  </strong>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="footerhome mt-5">
                <span>
                  <a href="#" alt="About">
                    About
                  </a>
                  <a href="#" alt="Blog">
                    Blog
                  </a>
                  <a href="#" alt="Jobs">
                    Jobs
                  </a>
                  <a href="#" alt="Help">
                    Help
                  </a>
                  <a href="#" alt="API">
                    API
                  </a>
                  <a href="#" alt="Privacy">
                    Privacy
                  </a>
                  <a href="#" alt="Terms">
                    Terms
                  </a>
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="footerhome">
                <span>
                  <a href="#" alt="Locations">
                    Locations
                  </a>
                  <a href="#" alt="Top Account">
                    Top_Account
                  </a>
                  <a href="#" alt="Hashtags">
                    Hashtags
                  </a>
                  <a href="#" alt="Help">
                    Languages
                  </a>
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="footerhome">
                <p>© 2021 Instagram from Facebook</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
