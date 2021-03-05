import React from "react";
import Header from "../Navbar/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Container className="mt-5 HomeContainer">
        <Row>
          <Col md={{ span: 6, offset: 2 }}>{`md={{ span: 8, offset: 0 }}`}</Col>
          <Col md={2} className="d-none d-lg-block d-xl-block">
            <Row>
              <Col md={4} className="left-up">
                <a href="#">
                  <img
                    class="profile-img"
                    src="https://via.placeholder.com/200"
                    alt=""
                  />
                </a>
              </Col>
              <Col md={8}>My name is</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
