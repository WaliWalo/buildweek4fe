import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { loginUser } from "../../api/userApi";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const resp = await loginUser({ email, password });
    if (resp.data.status === "ok") {
      localStorage.setItem("LoggedIn", true);
      history.push("/home");
    } else {
      alert("Something went wrong");
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
        <p className="text-center mt-4">Forgot password?</p>
      </div>
    </div>
  );
};

export default Login;
