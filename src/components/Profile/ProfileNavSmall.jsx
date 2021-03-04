import React from "react";
import { Col } from "react-bootstrap";

const ProfileNavSmall = ({ pageNo, setPageNo }) => {
  return (
    <Col xs={12}>
      <div
        className="ProfileNavBar d-flex d-md-none justify-content-around align-items-center text-center "
        style={{
          fontSize: "26px",
          color: "#989898",
        }}
      >
        <p
          className={pageNo === 1 ? "navBorderPofileSmall pt-2 " : "pt-2 "}
          onClick={() => setPageNo(1)}
        >
          <i className="fas fa-th"></i>
        </p>
        <p
          className={pageNo === 2 ? "navBorderPofileSmall pt-2 " : "pt-2 "}
          onClick={() => setPageNo(2)}
        >
          <i className="fas fa-tv"></i>
        </p>
        <p
          className={pageNo === 3 ? "navBorderPofileSmall pt-2 " : "pt-2 "}
          onClick={() => setPageNo(3)}
        >
          <i className="far fa-bookmark"></i>
        </p>
        <p
          className={pageNo === 4 ? "navBorderPofileSmall pt-2" : "pt-2"}
          onClick={() => setPageNo(4)}
        >
          <i className="fas fa-id-card-alt"></i>
        </p>
      </div>
    </Col>
  );
};

export default ProfileNavSmall;
