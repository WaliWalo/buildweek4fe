import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Row>
        <Col xs={3}>
          <img
            src={
              user && user.picture
                ? user.picture
                : "https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
            }
            width="150px"
            className="img-fluid ml-4"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </Col>
        <Col xs={9}></Col>
      </Row>
    </>
  );
};

export default Profile;
