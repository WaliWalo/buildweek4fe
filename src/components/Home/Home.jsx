import React from "react";
import Header from "../Navbar/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import Ermal from "../../assets/images/erm.png";
import Ibra from "../../assets/images/ibra.jpg";
import Jin1 from "../../assets/images/jin1.png";
import Jin2 from "../../assets/images/jin2.png";
import Tobia from "../../assets/images/tobia.png";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Container className="mt-5">
        <Row>
          <Col xs={{ span: 6, offset: 1 }}>{`xs={{ span: 8, offset: 0 }}`}</Col>
          <Col xs={4} className="d-none d-lg-block d-xl-block">
            <Row>
              <Col className="left-up">
                <span>
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
                      {"\n"}
                      subname
                    </p>
                  </div>
                  <div className="mainlinkwrap">
                    <strong>
                      <a href="#">Switch</a>
                    </strong>
                  </div>
                </span>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="left-up">
                <span>
                  <div className="centertxtwrap">
                    <span className="centertxt">
                      <strong>
                        Suggestions for you {"           "}
                        <a href="#">See All</a>
                      </strong>
                    </span>
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="left-up">
                <span>
                  <div className="pic-wrapper">
                    <a href="#">
                      <img class="pic" src={Ermal} alt="" />
                    </a>
                  </div>
                  <div className="text-wrapper  ml-2 mt-4">
                    <p className="text">
                      <strong>FakeErmal</strong>
                      {"\n"}
                      happyermal
                    </p>
                  </div>
                  <div className="link-wrap">
                    <strong>
                      <a href="#">Follow</a>
                    </strong>
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="left-up">
                <span>
                  <div className="pic-wrapper">
                    <a href="#">
                      <img class="pic" src={Ibra} alt="" />
                    </a>
                  </div>
                  <div className="text-wrapper  ml-2 mt-4">
                    <p className="text">
                      <strong>ErmalOfficial</strong>
                      {"\n"}
                      therealermal
                    </p>
                  </div>
                  <div className="link-wrap">
                    <strong>
                      <a href="#">Follow</a>
                    </strong>
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="left-up">
                <span>
                  <div className="pic-wrapper">
                    <a href="#">
                      <img class="pic" src={Jin1} alt="" />
                    </a>
                  </div>
                  <div className="text-wrapper  ml-2 mt-4">
                    <p className="text">
                      <strong>SoberJin</strong>
                      {"\n"}
                      sadjin
                    </p>
                  </div>
                  <div className="link-wrap">
                    <strong>
                      <a href="#">Follow</a>
                    </strong>
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="left-up">
                <span>
                  <div className="pic-wrapper">
                    <a href="#">
                      <img class="pic" src={Jin2} alt="" />
                    </a>
                  </div>
                  <div className="text-wrapper  ml-2 mt-4">
                    <p className="text">
                      <strong>SeriousJin</strong>
                      {"\n"}
                      jinwithoutbooze
                    </p>
                  </div>
                  <div className="link-wrap">
                    <strong>
                      <a href="#">Follow</a>
                    </strong>
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="left-up">
                <span>
                  <div className="pic-wrapper">
                    <a href="#">
                      <img class="pic" src={Tobia} alt="" />
                    </a>
                  </div>
                  <div className="text-wrapper  ml-2 mt-4">
                    <p className="text">
                      <strong>TobiaDeAngelis</strong>
                      {"\n"}
                      ilvolosinger
                    </p>
                  </div>
                  <div className="link-wrap">
                    <strong>
                      <a href="#">Follow</a>
                    </strong>
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col className="footer">
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
              <Col className="footer">
                <span>
                  <a href="#" alt="Locations">
                    Locations
                  </a>
                  <a href="#" alt="Top Account">
                    Top Account
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
              <Col className="footer">
                <p>© 2021 Instagram from Facebook</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
