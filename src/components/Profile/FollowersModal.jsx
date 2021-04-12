import React from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const FollowersModal = ({ show, handleClose, follow, following }) => {
  const history = useHistory();
  let followers = follow ? follow : following;
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className="FollowersModal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{follow ? "Followers" : "Following"}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowY: "auto" }}>
          {followers.map((f, index) => (
            <div
              key={`follower${index}`}
              className="d-flex justify-content-between align-items-center mb-3"
            >
              <div className="d-flex justify-content-between align-items-center">
                <img
                  src={f.picture}
                  width="35px"
                  height="35px"
                  alt="follower"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  onClick={() => {
                    history.push("/profile/" + f._id);
                    handleClose();
                  }}
                />
                <div className="ml-2" style={{ fontSize: "14px" }}>
                  <p className="mb-0" style={{ fontWeight: "bold" }}>
                    {f.username}
                  </p>
                  <p className="mb-0" style={{ color: "gray" }}>
                    {f.firstName} {f.lastName}
                  </p>
                </div>
              </div>
              <button className="EditProfileBtn">Remove</button>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FollowersModal;
