import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import ProfileNavBig from "./ProfileNavBig";
import ProfileNavSmall from "./ProfileNavSmall";
import ProfilePost from "./ProfilePost";
import ProfilePostModal from "./ProfilePostModal";
import { useParams } from "react-router-dom";
import "./profile.css";
import { getUserById } from "../../api/userApi";

const Profile = () => {
  const dispatch = useDispatch();
  const matchParams = useParams();

  const { posts, selectedPost } = useSelector((state) => state);
  const meUser = useSelector((state) => state.user);
  const [user, setUser] = useState(null);
  const [postsByUser, setPostByUser] = useState([]);
  const [me, setMe] = useState(false);

  const [show, setShow] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchUser = async (id) => {
    if (id === "me") {
      if (meUser) {
        setMe(true);
        setUser(meUser);
        let userPosts = posts.filter((post) => post.user._id === meUser._id);
        userPosts = userPosts.reverse();
        setPostByUser(userPosts);
      }
    } else {
      const response = await getUserById(matchParams.id);
      if (response.statusText === "OK") {
        const data = response.data;
        setUser(data);

        let userPosts = posts.filter((post) => post.user._id === data._id);
        userPosts = userPosts.reverse();
        setPostByUser(userPosts);

        if (meUser && meUser._id !== data._id) {
          setMe(false);
        } else {
          setMe(true);
        }
      } else {
        alert("something went wrong");
      }
    }
  };

  useEffect(() => {
    fetchUser(matchParams.id);
  }, [meUser, posts, matchParams.id]);

  const nextPost = () => {
    let nextPost = postsByUser[postsByUser.indexOf(selectedPost) + 1];
    dispatch({ type: "SET_SELECTEDPOST", payload: nextPost });
  };

  const prevPost = () => {
    let prevPost = postsByUser[postsByUser.indexOf(selectedPost) - 1];
    dispatch({ type: "SET_SELECTEDPOST", payload: prevPost });
  };

  const dontShowLeftArrow = () => {
    return selectedPost === postsByUser[0];
  };
  const dontShowRightArrow = () => {
    return selectedPost === postsByUser[postsByUser.length - 1];
  };

  return (
    <div style={{ marginTop: "100px" }} className="mx-lg-5">
      {user && (
        <ProfileInfo
          user={user}
          postNo={postsByUser.length}
          me={me}
          meUser={meUser}
        />
      )}
      <Row>
        <ProfileNavBig pageNo={pageNo} setPageNo={setPageNo} />
        <ProfileNavSmall pageNo={pageNo} setPageNo={setPageNo} />
      </Row>
      <Row>
        <ProfilePostModal
          show={show}
          handleClose={handleClose}
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
          />
        ))}
      </Row>
    </div>
  );
};

export default Profile;
