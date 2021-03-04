import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { loginUser } from "../../api/userApi";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const resp = await loginUser({ email, password });
    console.log("response", resp);

    if (resp.ok) {
      localStorage.setItem("LoggedIn", true);
      dispatch({ type: "REMOVE_FROM_ERRORS" });
      history.push("/home");
    } else {
      const data = await resp.json();
      dispatch({ type: "ADD_TO_ERRORS", payload: data });
    }
  };

  return (
    <div className="LoginComp">
      <div>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
          className="img-fluid"
          width="50%"
          alt="instagram logo"
        />
      </div>
      <form className="mx-5 mx-md-4 mx-lg-5 " onSubmit={login}>
        <Form.Group className="mb-2">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </Form.Group>
        {error.error && <Alert variant="danger">{error.error}</Alert>}
        <button type="submit" className="w-100 LoginBnt mt-2">
          Log In
        </button>
      </form>
      <div className="divider mx-5 mx-md-4 mx-lg-5  my-4 ">
        <strong
          style={{
            background: "#fff",
            padding: "0 20px",
            color: "#aaa6a6",
            fontSize: "14px",
          }}
        >
          OR
        </strong>
      </div>
      <div className="forgotPass mx-5 mx-md-4 mx-lg-5  mt-5 ">
        <a
          href={`${process.env.REACT_APP_BE_URL}/facebookLogin`}
          onClick={() => localStorage.setItem("LoggedIn", true)}
        >
          <h6
            className="d-flex justify-content-center align-items-center"
            style={{ fontSize: "15px", fontWeight: "bold", color: "#385185" }}
          >
            <i
              className="fab fa-facebook-square mr-2"
              style={{ fontSize: "22px" }}
            ></i>
            Log in with Facebook
          </h6>
        </a>
        <a
          href={`${process.env.REACT_APP_BE_URL}/googleLogin`}
          onClick={() => localStorage.setItem("LoggedIn", true)}
        >
          <h6
            className="d-flex justify-content-center align-items-center mt-3 text-success"
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            <i className="fab fa-google mr-2" style={{ fontSize: "20px" }}></i>
            Log in with Google
          </h6>
        </a>
        <p className="text-center mt-4">Forgot password?</p>
      </div>
    </div>
  );
};

export default Login;
