import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getComments } from "../../api/commentsApi";
import AddComment from "./AddComment";
import OneComment from "./OneComment";

const CommentList = () => {
  const { selectedPost } = useSelector((state) => state);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await getComments();

    if (response.statusText === "OK") {
      const filteredComments = response.data.filter(
        (comment) => comment.postId === selectedPost._id
      );

      setComments(filteredComments);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchComments();
  }, [selectedPost]);

  return (
    <Col xs={5} className="d-none d-md-block">
      <div className="d-flex justify-content-between align-items-center mt-3 pb-4  border-bottom border-muted">
        <div className=" CommentList d-flex justify-content-between align-items-center">
          <img
            src={selectedPost.user.picture}
            alt="user pic"
            width="34px"
            height="34px"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <p
            className="ml-3 mb-0"
            style={{ fontWeight: "bold", fontSize: "14px" }}
          >
            {selectedPost.user.username}
          </p>
        </div>
        <i className="fas fa-ellipsis-h mr-3"></i>
      </div>
      <div
        className="border-bottom  border-muted"
        style={{ height: "340px", overflowY: "auto" }}
      >
        <OneComment comment={selectedPost} />
        {comments.map((cm, index) => (
          <OneComment
            key={`selectedPostComments${index}`}
            comment={cm}
            fetchComments={fetchComments}
          />
        ))}
      </div>
      <AddComment fetchComments={fetchComments} />
    </Col>
  );
};

export default CommentList;
