import React, { useEffect } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import CommentList from "../Comments/CommentList";

const ProfilePostModal = ({
  show,
  handleClose,
  post,
  nextPost,
  prevPost,
  dontShowLeftArrow,
  dontShowRightArrow,
}) => {
  let showLeftArrow = dontShowLeftArrow();
  let showRightArrow = dontShowRightArrow();

  return (
    <>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row className="no-gutters">
            <Col
              xs={1}
              className="d-flex align-items-center justify-content-center"
            >
              <i
                className="fas fa-chevron-left fa-2x"
                onClick={prevPost}
                style={{
                  display: showLeftArrow ? "none" : "block",
                }}
              ></i>
            </Col>
            <Col xs={10} style={{ background: "white" }}>
              <Row>
                <Col xs={12} sm={7}>
                  <img src={post && post.urls[0]} className="img-fluid" />
                </Col>
                {post && <CommentList post={post} />}
              </Row>
            </Col>
            <Col
              xs={1}
              className="d-flex align-items-center justify-content-center"
            >
              <i
                className="fas fa-chevron-right fa-2x"
                onClick={nextPost}
                style={{
                  display: showRightArrow ? "none" : "flex",
                }}
              ></i>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ProfilePostModal;
