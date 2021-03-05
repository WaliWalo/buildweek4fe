import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Ermal from "../../assets/images/erm.png";
import Ibra from "../../assets/images/ibrasan.jpg";
import Jin1 from "../../assets/images/jin1.png";
import "./Post.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Text className="uptxt">
                <div className="profpicwrapper">
                  <a href="#">
                    <img class="profpic" src={Ermal} alt="" />
                  </a>
                </div>
                <div className="proftxtwrapper ">
                  <p className="proftxt">
                    <strong>fakeermal</strong>
                  </p>
                </div>
                <div className="iconupwrap">
                  <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </div>
              </Card.Text>
              <Card.Img variant="top" src={Ibra} />
              <Card.Body className="postcardbody">
                <div className="iconwrapper">
                  <i className="far fa-heart fa-2x"></i>
                  <i className="far fa-comment fa-2x ml-3"></i>
                  <i className="far fa-paper-plane fa-2x ml-3"></i>
                  <i className="far fa-bookmark fa-2x "></i>
                </div>
                <Card.Text className="like">
                  <div className="likepic-wrapper">
                    <a href="#">
                      <img class="likepic" src={Jin1} alt="" />
                    </a>
                  </div>
                  <div className="liketext-wrapper  ml-2 mt-4">
                    <p className="liketext">
                      <strong>soberjin</strong>,&nbsp;<strong>liomessi</strong>
                      &nbsp; and &nbsp; <strong>456732 others</strong>&nbsp;
                      liked this
                    </p>
                  </div>
                </Card.Text>

                <div className="comment">
                  <p>
                    <strong>fakermal</strong>
                    &nbsp;&nbsp; I look good!
                  </p>
                </div>
                <div className="comment">
                  <p>
                    <strong>seriousjin</strong>
                    &nbsp;&nbsp; yes, you do
                  </p>
                </div>
                <div className="comment">
                  <p>
                    <strong>enisasllani</strong>
                    &nbsp;&nbsp; I look better
                  </p>
                </div>
                <hr></hr>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      <i className="far fa-smile"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Add a comment..."
                    aria-label="comment"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
