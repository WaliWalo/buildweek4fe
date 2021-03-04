import React, { useState } from "react";

const AddComment = ({ post }) => {
  const [content, setContent] = useState("");
  return (
    <div className="mt-2">
      <div
        className="SendMsgIcons d-flex justify-content-between"
        style={{ fontSize: "13px", color: "#262626" }}
      >
        <div className="d-flex justify-content-between">
          <i className="far fa-heart fa-2x"></i>
          <i className="far fa-comment fa-2x ml-3"></i>
          <i className="far fa-paper-plane fa-2x ml-3"></i>
        </div>
        <i className="far fa-bookmark fa-2x mr-3"></i>
      </div>
      {post.likes.length > 0 && (
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
      )}
      <div className="d-flex justify-content-between border-top border-muted pt-3">
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
        >
          Post
        </button>
      </div>
    </div>
  );
};
export default AddComment;
