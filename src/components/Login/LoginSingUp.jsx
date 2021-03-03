import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Singup from "../Signup/Signup";
import Login from "./Login";

const LoginSingUp = () => {
  const [account, setAccount] = useState(true);

  return (
    <Row
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <Col xs={10} sm={8} md={6} lg={4}>
        {account ? <Login /> : <Singup />}

        <div className="LoginComp mt-3">
          <h6 className="text-center p-4">
            {account ? "Don't have an account?" : "Have an account?"}

            <strong
              style={{ color: "#0096f6" }}
              onClick={() => setAccount(!account)}
            >
              {account ? " Sing up" : " Log in"}
            </strong>
          </h6>
        </div>
      </Col>
    </Row>
  );
};

export default LoginSingUp;
