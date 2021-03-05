import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { registerUser } from "../../api/userApi";
import { useHistory } from "react-router-dom";

const Singup = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const register = async (e) => {
    e.preventDefault(e);

    const firstName = fullName.split(" ")[0];
    const lastName = fullName.split(" ")[1];
    console.log({ firstName, lastName });

    const resp = await registerUser({
      email,
      password,
      username,
      firstName,
      lastName,
    });
    if (resp.status === 201) {
      localStorage.setItem("LoggedIn", true);
      history.push("/home");
    } else {
      alert("something went wrong");
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
      <div className="fbgoogleLogin mx-5 mx-md-4 mx-lg-5">
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
        <a
          href={`${process.env.REACT_APP_BE_URL}/facebookLogin`}
          onClick={() => localStorage.setItem("LoggedIn", true)}
        >
          <button className="w-100 LoginBnt d-flex align-items-center justify-content-center">
            <i
              className="fab fa-facebook-square mr-2"
              style={{ fontSize: "20px" }}
            ></i>
            Log in with Facebook
          </button>
        </a>
        <a
          href={`${process.env.REACT_APP_BE_URL}/googleLogin`}
          onClick={() => localStorage.setItem("LoggedIn", true)}
        >
          <Button
            className="w-100 googleBtn d-flex align-items-center justify-content-center mt-3"
            variant="success"
          >
            <i className="fab fa-google mr-2" style={{ fontSize: "20px" }}></i>
            Log in with Google
          </Button>
        </a>
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
      <form className="mx-5 mx-md-4 mx-lg-5 " onSubmit={register}>
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
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.currentTarget.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
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
