import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const ProfileInfo = ({ user, postNo }) => {
  return (
    user && (
      <Row>
        <Col xs={3}>
          <img
            src={
              user.picture
                ? user.picture
                : "https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
            }
            className="profileImg ml-4"
            alt="profile pic"
          />
        </Col>
        <Col xs={9} md={7} lg={6}>
          <div className="d-flex justify-content-start align-items-center mt-3">
            <p
              className="mb-0 ml-5"
              style={{
                fontSize: "28px",
                lineHeight: "32px",
                color: "#4d4d4d",
              }}
            >
              {user.username}
            </p>

            <button className="d-none d-md-block ml-4 EditProfileBtn">
              Edit Profile
            </button>
            <i className="fas fa-cog fa-2x ml-3"></i>
          </div>
          <button
            className="d-md-none ml-4 EditProfileBtn mt-2"
            style={{ width: "96%" }}
          >
            Edit Profile
          </button>
          <div
            className="d-none d-md-flex 
             align-items-center mt-3 userstats"
            style={{ color: "#4d4d4d" }}
          >
            <p>
              <strong>{postNo}</strong> posts
            </p>
            <p>
              <strong>79</strong> followers
            </p>
            <p>
              <strong>{user.following.length}</strong> folllowing
            </p>
          </div>
          <div className="d-none d-md-block ml-5 mt-2">
            <h6 style={{ fontWeight: "bold" }}>
              {user.firstName} {user.lastName}
            </h6>
          </div>
        </Col>
        <Col xs={12}>
          <div className="d-block d-md-none ml-4  mt-4">
            <h6 style={{ fontWeight: "bold" }}>
              {user.firstName} {user.lastName}
            </h6>
          </div>
        </Col>
        <Col
          xs={12}
          className="d-md-none"
          style={{
            borderTop: "1px solid #dbdbdb",
            borderBottom: "1px solid #dbdbdb",
          }}
        >
          <div
            className="d-flex d-md-none ml-2 mt-3 justify-content-between align-items-center"
            style={{ color: "#4d4d4d" }}
          >
            <div className="ml-5 text-center">
              <strong>{postNo}</strong> <p>posts </p>
            </div>
            <div className="ml-5 text-center">
              <strong>79</strong> <p>followers </p>
            </div>
            <div className="ml-5 text-center">
              <strong>{user.following.length}</strong> <p>following </p>
            </div>
          </div>
        </Col>
      </Row>
    )
  );
};

export default ProfileInfo;
