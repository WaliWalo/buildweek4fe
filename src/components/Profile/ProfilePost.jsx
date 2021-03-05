import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getComments } from "../../api/commentsApi";

const ProfilePost = ({ post, handleShow, setSelectedPost }) => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await getComments();

    if (response.statusText === "OK") {
      const filteredComments = response.data.filter(
        (comment) => comment.postId === post._id
      );

      setComments(filteredComments);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Col xs={4} className="mb-2">
      <div className="postProfile">
        <img src={post.urls[0]} className="img-fluid" />
        <div
          className="hoverOverPosts"
          onClick={() => {
            handleShow();
            dispatch({ type: "SET_SELECTEDPOST", payload: post });
          }}
        >
          <h5>
            <i className="fas fa-heart"></i> {post.likes.length}
          </h5>
          <h5>
            <i className="fas fa-comment ml-3"></i> {comments.length}
          </h5>
        </div>
      </div>
    </Col>
  );
};

export default ProfilePost;
