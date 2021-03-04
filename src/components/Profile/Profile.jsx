import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import ProfileNavBig from "./ProfileNavBig";
import ProfileNavSmall from "./ProfileNavSmall";

const Profile = () => {
  const { user, posts } = useSelector((state) => state);
  const postsByUser = posts.filter((post) => post.user._id === user._id);

  const [pageNo, setPageNo] = useState(1);

  return (
    <div style={{ marginTop: "100px" }} className="mx-lg-5">
      <ProfileInfo user={user} postNo={postsByUser.length} />
      <Row>
        <ProfileNavBig pageNo={pageNo} setPageNo={setPageNo} />
        <ProfileNavSmall pageNo={pageNo} setPageNo={setPageNo} />
      </Row>
    </div>
  );
};

export default Profile;
