import React, { useState } from "react";
import "./Header.css";
import { Navbar, Container, Nav, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Message from "../Message/Message";
import { getPosts, postPics, postPost } from "../../api/postApi";
import { useDispatch } from "react-redux";

export default function Header() {
  const { user } = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const [caption, setCaption] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const handleFileSelected = async (e) => {
    const files = Array.from(e.target.files);
    console.log("files:", files);
    setFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await postPost(caption);
    if (response.statusText === "Created") {
      const data = response;
      const picResponse = await postPics(data.data._id, files);
      if (picResponse.ok) {
        dispatch(async (dispatch) => {
          try {
            const response = await getPosts();
            if (response.statusText === "OK") {
              dispatch({
                type: "SET_POSTS",
                payload: response.data,
              });
            } else {
              dispatch({
                type: "ADD_TO_ERRORS",
                payload: response.data,
              });
            }
          } catch (error) {
            console.log(error);
          }
        });
        handleClose();
        setCaption("");
        setFiles(null);
        setLoading(false);
      } else {
        console.log(picResponse);
      }
    } else {
      console.log(response);
    }
  };
  return (
    <Navbar expand="lg">
      <Container className="HomeContainer">
        <div className="logo">
          <Navbar.Brand href="/home">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
              alt="logo"
              style={{ width: "100px", height: "55px" }}
            />
          </Navbar.Brand>
        </div>

        <div className="search">
          <form method="post">
            <input
              type="text"
              name="subject"
              class="instaSearch"
              value=""
              placeholder="Search"
            />
          </form>
        </div>
        <span className="spanheader">
          <Link to="/home" /* exact component={Home} */>
            <i class="fas fa-xs fa-home"></i>
          </Link>
          <Nav className="mt-2" as={Link} onClick={handleShow}>
            <i class="fas fa-xs fa-plus-square"></i>
          </Nav>
          <Link
            to="/message" /* exact render={(props) => <Message {...props} />} */
          >
            <i class="fas fa-xs fa-paper-plane"></i>
          </Link>
          <Link to="/randomposts" /* MAYBE LATER*/>
            <i class="fas fa-xs fa-compass"></i>
          </Link>
          <Link to="/likes">
            <i class="fas fa-xs fa-heart"></i>
          </Link>
          <div class="wrap-img">
            <Link
              to="/profile/me" /* exact render={(props) => <Profile {...props} />} */
            >
              <img
                class="profile-img"
                src={
                  user
                    ? user.picture
                    : "https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                }
                /* {this.state.user.picture} */ alt="user avatar"
              />
            </Link>
          </div>
        </span>
        <Modal centered show={show} onHide={handleClose}>
          <div style={{ backgroundColor: "white" }}>
            <Modal.Header closeButton>
              <Modal.Title>Add Posts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                  <Form.Label>Caption</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={caption}
                    rows={4}
                    onChange={(e) => setCaption(e.currentTarget.value)}
                  />
                </Form.Group>
                <Form.File
                  onChange={(e) => handleFileSelected(e)}
                  id="custom-file"
                  label="Custom file input"
                  custom
                  multiple="multiple"
                  accept=".jpg"
                />
                {files && (
                  <div id="postBtn">
                    <Button
                      type="submit"
                      variant="primary"
                      onClick={handleClose}
                    >
                      Post
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </div>
                )}
              </Form>
            </Modal.Body>
          </div>
        </Modal>
      </Container>
    </Navbar>
  );
}
