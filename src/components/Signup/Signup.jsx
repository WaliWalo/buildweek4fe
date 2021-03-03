import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="LoginComp">
      <div>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
          className="img-fluid"
          width="50%"
        />
      </div>
      <div className="mx-5 mx-md-4 mx-lg-5">
        <p
          className="text-center"
          style={{
            color: "#94989c",
            fontWeight: "bold",
            fontSize: "17px",
            lineHeight: "20px",
          }}
        >
          Sing up to see photos and videos from your friends
        </p>
        <button className="w-100 LoginBnt d-flex align-items-center justify-content-center">
          <i
            className="fab fa-facebook-square mr-2"
            style={{ fontSize: "20px" }}
          ></i>
          Log in with Facebook
        </button>
      </div>
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
      <form className="mx-5 mx-md-4 mx-lg-5 ">
        <Form.Group className="mb-2">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <button type="submit" className="w-100 LoginBnt mt-2">
          Sing up
        </button>
      </form>

      <div className="forgotPass mx-5 mx-md-4 mx-lg-5  mt-5 ">
        <p className="text-center mt-4">
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
          .
        </p>
      </div>
    </div>
  );
};

export default Singup;
