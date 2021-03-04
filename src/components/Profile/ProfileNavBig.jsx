import React from "react";
import { Col } from "react-bootstrap";

const ProfileNavBig = ({ pageNo, setPageNo }) => {
  return (
    <Col xs={12} className="mt-5 d-none d-md-block">
      <div
        className="ProfileNavBar d-none d-md-flex justify-content-center align-items-center "
        style={{
          fontSize: "14px",
          color: "#989898",
          borderTop: "1px solid #dbdbdb",
        }}
      >
        <p
          className={pageNo === 1 ? "navBorderPofile pt-3 mr-5" : "pt-3 mr-5"}
          onClick={() => setPageNo(1)}
        >
          <i className="fas fa-th"></i> POSTS
        </p>
        <p
          className={pageNo === 2 ? "navBorderPofile pt-3 mr-5" : "pt-3 mr-5"}
          onClick={() => setPageNo(2)}
        >
          <i className="fas fa-tv"></i> IGTV
        </p>
        <p
          className={pageNo === 3 ? "navBorderPofile pt-3 mr-5" : "pt-3 mr-5"}
          onClick={() => setPageNo(3)}
        >
          <i className="far fa-bookmark"></i> SAVED
        </p>
        <p
          className={pageNo === 4 ? "navBorderPofile pt-3" : "pt-3"}
          onClick={() => setPageNo(4)}
        >
          <i className="fas fa-id-card-alt"></i> TAGGED
        </p>
      </div>
    </Col>
  );
};
export default ProfileNavBig;
