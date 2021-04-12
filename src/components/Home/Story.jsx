import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Spinner } from "react-bootstrap";
import StoriesComp from "react-insta-stories";
import { getStories, postStory, refreshToken } from "../../api/storiesApi";
import { useSelector } from "react-redux";

export default function Story() {
  const { user } = useSelector((state) => state);
  const [stories, setStories] = useState([]);
  const [show, setShow] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);

  useEffect(() => {
    if (user) {
      fetchStories();
    }
  }, [stories.length, user]);

  const fetchStories = async () => {
    try {
      const response = await getStories();
      if (response.ok) {
        const data = await response.json();
        const temp = [];
        let type = "image";
        data.map((story) => {
          user.following.forEach((follow) => {
            if (follow._id === story.user._id || user._id === story.user._id) {
              const newString = `${story.story.slice(
                0,
                53
              )}w_400,h_600,c_scale/${story.story.slice(53)}`;
              console.log(newString.slice(newString.length - 4));
              if (newString.slice(newString.length - 4) === ".mp4") {
                type = "video";
              } else {
                type = "image";
              }
              const storyObject = {
                url: newString,
                header: {
                  heading: user.firstName,
                  subheading: story.createdAt,
                  profileImage: user.picture,
                },
                type,
              };

              temp.push(storyObject);
            }
          });
        });
        const result = [];
        const map = new Map();
        for (const item of temp) {
          if (!map.has(item.url)) {
            map.set(item.url, true); // set any value to Map
            result.push(item);
          }
        }
        console.log(result);
        setStories(result);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelected = async (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await postStory(files[0]);
    if (response.ok) {
      handleCloseCreate();
      setFiles(null);
      fetchStories();
      setLoading(false);
    } else {
      console.log(response);
      //   if (localStorage.getItem("LoggedIn") === "true") {
      //     let response = await refreshToken();
      //     console.log(response);
      //   }
    }
  };

  return (
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Launch Story
      </Button>
      <Button variant="primary" onClick={handleShowCreate}>
        Launch CREATE STORY
      </Button>
      <Modal show={show} centered onHide={handleClose}>
        {stories.length > 0 && (
          <StoriesComp
            stories={stories}
            defaultInterval={10000}
            width={400}
            height={600}
            loop="true"
          />
        )}
      </Modal>
      <Modal show={showCreate} onHide={handleCloseCreate} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.File
                accept=".jpg, .mp4"
                id="custom-file-translate-scss"
                label="Custom file input"
                lang="en"
                custom
                onChange={(e) => handleFileSelected(e)}
              />
              {files && <Button type="submit">Create Story</Button>}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseCreate}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
