import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import EditProfile from "./EditProfile";
import FollowersModal from "./FollowersModal";

const ProfileInfo = ({ user, postNo, me, meUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showFollowing, setShowFollowing] = useState(false);

  const handleCloseFollowing = () => setShowFollowing(false);
  const handleShowFollowing = () => setShowFollowing(true);

  const [editProfileModal, setEditProfileModal] = useState(false);

  const handleCloseProfile = () => setEditProfileModal(false);
  const handleShowProfile = () => setEditProfileModal(true);
  return (
    user && (
      <Row>
        <FollowersModal
          show={show}
          handleClose={handleClose}
          follow={user.followers}
        />
        <FollowersModal
          show={showFollowing}
          handleClose={handleCloseFollowing}
          following={user.following}
        />
        <EditProfile
          show={editProfileModal}
          handleClose={handleCloseProfile}
          user={user}
        />
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
            <div
              className="justify-content-between"
              style={{ display: me ? "flex" : "none" }}
            >
              <button
                className="d-none d-md-block ml-4 EditProfileBtn"
                onClick={handleShowProfile}
              >
                Edit Profile
              </button>
              <i className="fas fa-cog fa-2x ml-3"></i>
            </div>
            <div
              className="justify-content-start aling-items-center  ml-lg-5"
              style={{ display: me ? "none" : "flex" }}
            >
              <button className="ml-4 EditProfileBtn">
                {user.followers.find((u) => u._id === meUser._id)
                  ? "Message"
                  : "Follow"}
              </button>
              <button className="ml-4 EditProfileBtn">
                <i className="fas fa-user"></i>
                <i className="fas fa-check"></i>
              </button>
              <button className="ml-4 EditProfileBtn">
                <i className="fas fa-sort-down"></i>
              </button>
            </div>
          </div>
          <button
            className={!me ? "d-none" : "d-md-none ml-4 EditProfileBtn mt-2"}
            style={{ width: "96%" }}
            onClick={handleShowProfile}
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
            <p onClick={handleShow} className="FollowORFolllowers">
              <strong>{user.followers.length}</strong> followers
            </p>
            <p onClick={handleShowFollowing} className="FollowORFolllowers">
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
            <div
              className="ml-5 text-center"
              onClick={handleShow}
              className="FollowORFolllowers"
            >
              <strong>{user.followers.length}</strong> <p>followers </p>
            </div>
            <div
              className="ml-5 text-center"
              onClick={handleShowFollowing}
              className="FollowORFolllowers"
            >
              <strong>{user.following.length}</strong> <p>following </p>
            </div>
          </div>
        </Col>
      </Row>
    )
  );
};

export default ProfileInfo;
