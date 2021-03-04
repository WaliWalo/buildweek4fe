import React from "react";
import { Col } from "react-bootstrap";

const ProfilePost = ({ post, handleShow, setSelectedPost }) => {
  return (
    <Col xs={4} className="mb-2">
      <div className="postProfile">
        <img src={post.urls[0]} className="img-fluid" />
        <div
          className="hoverOverPosts"
          onClick={() => {
            handleShow();
            setSelectedPost(post);
          }}
        >
          <h5>
            <i className="fas fa-heart"></i> {post.likes.length}
          </h5>
          <h5>
            <i className="fas fa-comment ml-3"></i> 0
          </h5>
        </div>
      </div>
    </Col>
  );
};

export default ProfilePost;
