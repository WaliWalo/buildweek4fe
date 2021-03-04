import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { fetchConversations, fetchMessages } from "../../api/messageApi";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import MessageContent from "./MessageContent";
export default function Message() {
  let socket = null;
  const { conversations, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const connOpt = {
    transports: ["websocket"],
  };
  socket = io(process.env.REACT_APP_BE_URL, connOpt);

  const [show, setShow] = useState(false);
  const [following, setFollowing] = useState([]);
  const [checked, setChecked] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (user) {
      socket.on("connect", () =>
        socket.emit("userConnected", { userId: user._id })
      );
      getConversations(user._id);
      fetchUsers();
    }
    // return socket.disconnect();
  }, [user]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/users`, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setFollowing(data);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getConversations = async (userId) => {
    dispatch(async (dispatch) => {
      const response = await fetchConversations(userId);
      if (response.ok) {
        let data = await response.json();

        await dispatch({ type: "ADD_TO_CONVERSATIONS", payload: data });
      }
    });
  };

  const handleConversationsClick = async (convo) => {
    const response = await fetchMessages(convo._id);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      dispatch({ type: "SET_SELECTEDCONVO", payload: convo });
      dispatch({ type: "ADD_TO_MESSAGES", payload: data });
    }
  };

  const handleUserSelect = async (e) => {
    if (e.currentTarget.checked) {
      //if true, check array if id exist, if not add to it
      const findChecked = checked.filter(
        (check) => check === e.currentTarget.id
      );
      if (findChecked.length === 0) {
        let newChecked = [...checked, e.currentTarget.id];
        setChecked(newChecked);
      }
    } else {
      //if false, check array if id exist, if exist, remove
      const findChecked = checked.filter(
        (check) => check === e.currentTarget.id
      );
      if (findChecked.length > 0) {
        let newChecked = checked.filter(
          (check) => check !== e.currentTarget.id
        );
        setChecked(newChecked);
      }
    }
  };
  socket.on("createConvo", (msg) => {
    getConversations(user._id);
    socket.emit("userConnected", { userId: user._id });
  });
  const handleStartConvo = async () => {
    socket.emit("createConvo", {
      currentUserId: user._id,
      participants: checked,
      oneDay: false,
    });
    setChecked([]);

    setShow(false);
  };

  const handleOneDayConvo = async (e) => {
    socket.emit("createConvo", {
      currentUserId: user._id,
      participants: [e.currentTarget.id],
      oneDay: true,
    });
    setShow(false);
    setChecked([]);
    e.stopPropagation();
  };

  return (
    <div style={{ marginTop: "10vh" }}>
      <Container>
        <Row>
          <Col>
            <Row className="mb-3">
              <Col xs={10}>
                <h6 style={{ fontWeight: "bold", fontSize: "40px" }}>
                  {user && user.lastName}
                </h6>
              </Col>
              <Col xs={2}>
                <Button onClick={handleShow}>New</Button>
              </Col>
            </Row>
            <Row>
              <ListGroup style={{ width: "100%" }}>
                {conversations.map((conversation, index) => {
                  let msgName = conversation.participants
                    .map((participant) => {
                      if (user) {
                        if (participant._id !== user._id) {
                          return participant.firstName;
                        } else {
                          return "";
                        }
                      }
                    })
                    .join(", ");
                  return (
                    <ListGroup.Item
                      onClick={() => {
                        handleConversationsClick(conversation);
                      }}
                      key={conversation._id}
                      action
                    >
                      <div className="d-flex">
                        <Image
                          src={
                            conversation.creator2 &&
                            conversation.creator2.picture
                              ? conversation.creator2.picture
                              : "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
                          }
                          rounded
                          height="70px"
                          alt="user"
                        />
                        <p
                          className="ml-3 pt-2"
                          style={{ fontWeight: "bold", fontSize: "30px" }}
                        >
                          {msgName.slice(2)}
                        </p>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Row>
          </Col>
          <Col>
            <MessageContent />
          </Col>
        </Row>
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Start Conversation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {following.length > 0 ? (
                following.map((follower) => {
                  if (user) {
                    if (follower._id !== user._id) {
                      return (
                        <ListGroup.Item
                          action
                          key={follower._id}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {follower.firstName}
                          <Form.Check
                            id={follower._id}
                            onClick={(e) => handleUserSelect(e)}
                          />
                          <Button
                            id={follower._id}
                            onClick={(e) => handleOneDayConvo(e)}
                          >
                            24Hr
                          </Button>
                        </ListGroup.Item>
                      );
                    }
                  }
                })
              ) : (
                <h5>Follow people to start conversation</h5>
              )}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => handleStartConvo()}>
              Start Conversation
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
