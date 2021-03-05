import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../api/commentsApi";
import { addRemovePostLike, getPosts } from "../../api/postApi";

const AddComment = ({ fetchComments }) => {
  const userProfile = useSelector((state) => state.user);
  const selectedPost = useSelector((state) => state.selectedPost);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const postComment = async () => {
    const response = await addComment({ content, postId: selectedPost._id });

    if (response.status === 201) {
      setContent("");
      fetchComments();
    } else {
      alert("something went wrong");
    }
  };

  const postLike = async () => {
    try {
      const response = await addRemovePostLike(
        selectedPost._id,
        userProfile._id
      );

      if (response.status === 200) {
        dispatch({ type: "ADD_LIKE_TO_POST", payload: userProfile });
      } else if (response.status === 203) {
        dispatch({ type: "REMOVE_LIKE_TO_POST", payload: userProfile });
      }
      if (response.status === 200 || response.status === 203) {
        const resp = await getPosts();
        if (resp.statusText === "OK") {
          dispatch({
            type: "SET_POSTS",
            payload: resp.data,
          });
        } else {
          dispatch({
            type: "ADD_TO_ERRORS",
            payload: resp.data,
          });
        }
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-2">
      <div
        className="SendMsgIcons d-flex justify-content-between"
        style={{ fontSize: "13px", color: "#262626" }}
      >
        <div className="d-flex justify-content-between">
          <i
            className={
              selectedPost.likes.find((user) => user._id === userProfile._id)
                ? "fas fa-heart fa-2x text-danger"
                : "far fa-heart fa-2x"
            }
            onClick={() => postLike()}
          ></i>
          <i className="far fa-comment fa-2x ml-3"></i>
          <i className="far fa-paper-plane fa-2x ml-3"></i>
        </div>
        <i className="far fa-bookmark fa-2x mr-3"></i>
      </div>
      {selectedPost.likes.length > 0 ? (
        <div className="mt-2 LikedByPost">
          <p style={{ fontSize: "14px" }}>
            <img
              className="mr-2"
              width="20px"
              height="20px"
              src={selectedPost.likes[0].picture}
              style={{ borderRadius: "50%" }}
            />
            Liked by <strong>{selectedPost.likes[0].username}</strong>
            {selectedPost.likes.length - 1 !== 0 && (
              <>
                {" "}
                and
                <strong> {selectedPost.likes.length - 1} others</strong>
              </>
            )}
          </p>
        </div>
      ) : (
        <p className="mt-2">0 likes</p>
      )}
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
    </div>
  );
};
export default AddComment;
