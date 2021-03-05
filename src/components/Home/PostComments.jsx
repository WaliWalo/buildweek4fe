import React, { useState, useEffect } from "react";
import { getComments } from "../../api/commentsApi";
import { Card } from "react-bootstrap";
import { addComment } from "../../api/commentsApi";
import OneComment from "../Comments/OneComment";
import ProfilePostModal from "../Profile/ProfilePostModal";

const PostComments = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [commentsLength, setCommentsLength] = useState(0);
  const [content, setContent] = useState("");

  const postComment = async () => {
    const response = await addComment({ content, postId: post._id });

    if (response.status === 201) {
      setContent("");
      fetchComments();
    } else {
      alert("something went wrong");
    }
  };

  const fetchComments = async () => {
    const response = await getComments();
    if (response.statusText === "OK") {
      const filteredComments = response.data.filter(
        (comment) => comment.postId === post._id
      );

      setCommentsLength(filteredComments.length);
      //   const twoComments =
      //     filteredComments.length > 1
      //       ? [filteredComments[0], filteredComments[1]]
      //       : filteredComments.length === 0
      //       ? []
      //       : [filteredComments[0]];

      setComments(filteredComments);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <Card.Text className="like">
        {post.likes.length > 0 ? (
          <div className="mt-2 LikedByPost">
            <p style={{ fontSize: "14px" }}>
              <img
                className="mr-2"
                width="20px"
                height="20px"
                src={post.likes[0].picture}
                style={{ borderRadius: "50%" }}
              />
              Liked by <strong>{post.likes[0].username}</strong>
              {post.likes.length - 1 !== 0 && (
                <>
                  {" "}
                  and
                  <strong> {post.likes.length - 1} others</strong>
                </>
              )}
            </p>
          </div>
        ) : (
          <p className="mt-2">0 likes</p>
        )}
      </Card.Text>
      <OneComment comment={post} />
      {commentsLength > 0 && (
        <p className="mt-2 ml-4" style={{ color: "gray" }}>
          View all {commentsLength} comments
        </p>
      )}
      {comments.map((comment, index) => (
        <OneComment comment={comment} fetchComments={fetchComments} />
      ))}
      <div className="d-flex justify-content-between border-top border-muted pt-3 pb-2">
        <i className="far fa-smile fa-2x mr-1"></i>
        <input
          type="text"
          style={{ border: "none", width: "70%" }}
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></input>
        <button
          disabled={content === "" ? true : false}
          className="postBtn"
          style={{ color: content === "" ? "#59adfc" : "#0762b6" }}
          onClick={() => postComment()}
        >
          Post
        </button>
      </div>
    </>
  );
};

export default PostComments;
