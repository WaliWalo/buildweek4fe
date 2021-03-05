import React from "react";
import { useSelector } from "react-redux";
import { addRemoveLike } from "../../api/commentsApi";

const OneComment = ({ comment, fetchComments }) => {
  const userProfile = useSelector((state) => state.user);

  const postLike = async () => {
    const response = await addRemoveLike(comment._id, userProfile._id);

    if (response.status === 200 || response.status === 203) {
      fetchComments();
    }
  };
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex justify-content-start  mt-3">
        <img
          src={comment.user ? comment.user.picture : comment.userId.picture}
          alt="user pic"
          width="34px"
          height="34px"
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <div>
          <div className="CommentListUser d-flex justify-content-start">
            <p
              className="ml-3 mb-1"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              {comment.user ? comment.user.username : comment.userId.username}
            </p>
            <p className="ml-2 mb-1" style={{ fontSize: "14px" }}>
              {comment.content}
            </p>
          </div>
          {comment.userId && (
            <div className="ReplyComment d-flex justify-content-start ml-3">
              <p
                style={{
                  fontSize: "13px",
                  color: "#a3a3a3",
                  fontWeight: "bold",
                }}
              >
                {comment.likes.length} likes
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#a3a3a3",
                  fontWeight: "bold",
                }}
                className="ml-3"
              >
                Reply
              </p>
            </div>
          )}
        </div>
      </div>
      {comment.userId && (
        <i
          className={
            comment.likes.find((user) => user._id === userProfile._id)
              ? "fas fa-heart ml-1 profileHeart mr-2 mt-3 text-danger"
              : "far fa-heart ml-1 profileHeart mr-2 mt-3"
          }
          style={{ fontSize: "13px" }}
          onClick={() => postLike()}
        ></i>
      )}
    </div>
  );
};

export default OneComment;
