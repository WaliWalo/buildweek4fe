import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { fetchConversations } from "../../api/messageApi";
import {
  Button,
  Col,
  Container,
  Form,
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
  }, [user]);

  useEffect(() => {
    if (user) {
      getConversations(user._id);
    }
  }, [conversations.length, user]);

  const fetchUsers = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BE_URL}/refreshToken`, {
        credentials: "include",
      });
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
        dispatch({ type: "ADD_TO_CONVERSATIONS", payload: data });
      }
    });
  };

  const handleConversationsClick = async (convo) => {
    const response = await fetchConversations(convo._id);
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

  const handleStartConvo = async () => {
    socket.emit("createConvo", {
      currentUserId: user._id,
      participants: checked,
      oneDay: false,
    });
    if (user) {
      getConversations(user._id);
    }
    setShow(false);
  };

  const handleOneDayConvo = async (e) => {
    console.log(e.currentTarget.id);
    socket.emit("createConvo", {
      currentUserId: user._id,
      participants: [e.currentTarget.id],
      oneDay: true,
    });
    setShow(false);
    if (user) {
      getConversations(user._id);
    }
    e.stopPropagation();
  };

  return (
    <div style={{ marginTop: "10vh" }}>
      <Container>
        <Row>
          <Col>
            <Row className="mb-3">
              <Col>USERNAME</Col>
              <Col>
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
                      {msgName.slice(2)}
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
