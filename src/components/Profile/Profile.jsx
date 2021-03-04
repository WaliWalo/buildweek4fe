import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import ProfileNavBig from "./ProfileNavBig";
import ProfileNavSmall from "./ProfileNavSmall";
import ProfilePost from "./ProfilePost";
import ProfilePostModal from "./ProfilePostModal";
import "./profile.css";

const Profile = () => {
  const { user, posts } = useSelector((state) => state);
  const postsByUser = posts.filter((post) => post.user._id === user._id);

  const [show, setShow] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nextPost = () => {
    let nextPost = postsByUser[postsByUser.indexOf(selectedPost) + 1];
    setSelectedPost(nextPost);
  };

  const prevPost = () => {
    let prevPost = postsByUser[postsByUser.indexOf(selectedPost) - 1];
    setSelectedPost(prevPost);
  };

  const dontShowLeftArrow = () => {
    return selectedPost === postsByUser[0];
  };
  const dontShowRightArrow = () => {
    return selectedPost === postsByUser[postsByUser.length - 1];
  };

  return (
    <div style={{ marginTop: "100px" }} className="mx-lg-5">
      <ProfileInfo user={user} postNo={postsByUser.length} />
      <Row>
        <ProfileNavBig pageNo={pageNo} setPageNo={setPageNo} />
        <ProfileNavSmall pageNo={pageNo} setPageNo={setPageNo} />
      </Row>
      <Row>
        <ProfilePostModal
          show={show}
          handleClose={handleClose}
          post={selectedPost}
          nextPost={nextPost}
          prevPost={prevPost}
          dontShowLeftArrow={dontShowLeftArrow}
          dontShowRightArrow={dontShowRightArrow}
        />

        {postsByUser.map((post, index) => (
          <ProfilePost
            key={`profilePost${index}`}
            post={post}
            handleShow={handleShow}
            setSelectedPost={() => setSelectedPost(post)}
          />
        ))}
      </Row>
    </div>
  );
};

export default Profile;
