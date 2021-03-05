import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser, getUser, addUserImage } from "../../api/userApi";

const EditProfile = ({ show, handleClose, user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  // const [password, setPassword] = useState("");
  const [post, setPost] = useState(null);
  const dispatch = useDispatch();

  const fileUploadHandler = (e) => {
    const formData = new FormData();
    formData.append("picture", e.target.files[0]);
    setPost(formData);
  };

  const submitImage = async () => {
    const response = await addUserImage(post);
    if (response.statusText === "OK") {
      const resp = await getUser();
      if (resp.statusText === "OK") {
        dispatch({
          type: "SET_USER",
          payload: resp.data,
        });
      } else {
        dispatch({
          type: "ADD_TO_ERRORS",
          payload: resp.data,
        });
      }
    } else {
      alert("Something went wrong");
    }
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await editUser({ firstName, lastName, email, username });
      if (response.statusText === "OK") {
        const resp = await getUser();
        if (resp.statusText === "OK") {
          if (post !== null) {
            submitImage();
            setPost(null);
          }
          dispatch({
            type: "SET_USER",
            payload: resp.data,
          });
        } else {
          dispatch({
            type: "ADD_TO_ERRORS",
            payload: resp.data,
          });
        }
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitEdit}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </Form.Group>

            {/* <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </Form.Group> */}
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="file"
                id="fileUpload"
                onChange={fileUploadHandler}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Edit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditProfile;
