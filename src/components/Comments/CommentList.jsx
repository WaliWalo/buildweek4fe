import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { getComments } from "../../api/commentsApi";
import AddComment from "./AddComment";
import OneComment from "./OneComment";

const CommentList = ({ post }) => {
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
  }, [post]);

  return (
    <Col xs={5} className="d-none d-sm-block">
      <div className="d-flex justify-content-between align-items-center mt-3 pb-4  border-bottom border-muted">
        <div className=" CommentList d-flex justify-content-between align-items-center">
          <img
            src={post.user.picture}
            alt="user pic"
            width="34px"
            height="34px"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <p
            className="ml-3 mb-0"
            style={{ fontWeight: "bold", fontSize: "14px" }}
          >
            {post.user.username}
          </p>
        </div>
        <i className="fas fa-ellipsis-h mr-3"></i>
      </div>
      <div
        className="border-bottom  border-muted"
        style={{ height: "50%", overflowY: "auto" }}
      >
        <OneComment comment={post} />
        {comments.map((cm) => (
          <OneComment comment={cm} />
        ))}
      </div>
      <AddComment post={post} />
    </Col>
  );
};

export default CommentList;
