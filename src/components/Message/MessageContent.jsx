import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { fetchImgUrl, fetchMessages } from "../../api/messageApi";
import "./MessageContent.css";
import { Heart, HeartFill } from "react-bootstrap-icons";

export default function MessageContent() {
  const dispatch = useDispatch();
  const { selectedConvo, messages, user, conversations } = useSelector(
    (state) => state
  );
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState(null);

  let socket = null;
  const connOpt = {
    transports: ["websocket"],
  };

  socket = io(process.env.REACT_APP_BE_URL, connOpt);

  socket.on("sendMessage", (msg) => {
    setUrl(null);
    dispatch({ type: "ADD_ONE_TO_MESSAGES", payload: msg });
  });

  useEffect(() => {
    if (user) {
      socket.on("connect", () =>
        socket.emit("userConnected", { userId: user._id })
      );
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      socket.emit("userConnected", { userId: user._id });
    }
  }, selectedConvo);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("userConnected", { userId: user._id });
    if (message !== "") {
      let to = "";
      if (selectedConvo.creator2) {
        if (user._id === selectedConvo.creator2) {
          to = selectedConvo.creator;
        } else {
          to = selectedConvo.creator2;
        }
        if (url) {
          socket.emit("sendMessage", {
            convoId: selectedConvo._id,
            sender: user._id,
            content: message,
            to,
            url,
          });
          setMessage("");
        } else {
          socket.emit("sendMessage", {
            convoId: selectedConvo._id,
            sender: user._id,
            content: message,
            to,
          });
          setMessage("");
        }
      } else {
        if (url) {
          socket.emit("sendMessage", {
            convoId: selectedConvo._id,
            sender: user._id,
            content: message,
            url,
          });
          setMessage("");
        } else {
          socket.emit("sendMessage", {
            convoId: selectedConvo._id,
            sender: user._id,
            content: message,
          });
          setMessage("");
        }
      }
    }
  };

  const handleFileSelected = async (e) => {
    const files = Array.from(e.target.files);
    console.log("files:", files[0]);
    const response = await fetchImgUrl(files[0]);
    if (response) {
      let url = await response.json();
      setUrl(url.imageUrl);
    } else {
      return response;
    }
  };

  socket.on("likeMessage", async (msg) => {
    console.log("WEIRD ", selectedConvo);
    if (selectedConvo) {
      const response = await fetchMessages(selectedConvo._id);
      if (response.ok) {
        let data = await response.json();

        dispatch((dispatch) => {
          dispatch({ type: "ADD_TO_MESSAGES", payload: data });
        });
      }
    }
  });

  const handleLike = async (msgId, userId) => {
    await socket.emit("likeMessage", {
      convoId: selectedConvo._id,
      msgId,
      userId,
    });
  };

  return (
    <div className="p-3">
      {selectedConvo && (
        <>
          <Row>
            {" "}
            <Image
              src={
                selectedConvo.creator2 && selectedConvo.creator2.picture
                  ? selectedConvo.creator2.picture
                  : "https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
              }
              roundedCircle
              style={{
                width: "60px",
                height: "60px",
                border: "1px solid",
              }}
              alt="user"
            ></Image>
            <h3 className="ml-2">
              {selectedConvo.participants.length === 2
                ? selectedConvo.creator2.username
                : selectedConvo.participants
                    .map((participant) => participant.username)
                    .join(", ")}
            </h3>
          </Row>
          <hr></hr>
          <Row
            style={{
              overflowY: "scroll",
              height: "70vh",
              marginBottom: "10px",
            }}
          >
            <div
              className="display-block"
              style={{ width: "-webkit-fill-available" }}
            >
              {messages.length > 0 &&
                messages.map((message, index) => {
                  return (
                    <>
                      <div
                        className={
                          message.sender._id === user._id
                            ? "d-flex ownMessage px-2 my-2"
                            : "d-flex incomeMessage px-2 my-2"
                        }
                        key={`msggg${index}`}
                      >
                        {message.sender._id === user._id ? (
                          <>
                            <div
                              className="mr-2 text-right "
                              style={{ fontSize: "14px" }}
                            >
                              <p
                                className="m-0 "
                                style={{ fontWeight: "bold" }}
                              >
                                {user.firstName}
                              </p>
                              <div className="d-flex">
                                <div
                                  onClick={() =>
                                    handleLike(message._id, user._id)
                                  }
                                >
                                  {message.like.length > 0 ? (
                                    <HeartFill
                                      size={30}
                                      className="mr-4 mt-3"
                                    />
                                  ) : (
                                    <Heart size={30} className="mr-4 mt-3" />
                                  )}
                                </div>
                                <p
                                  style={{
                                    fontSize: "20px",
                                    borderRadius: "25px",
                                    background: "#EFEFEF",
                                    padding: "15px",
                                  }}
                                >
                                  {message.content}
                                </p>{" "}
                              </div>
                              {message.url && (
                                <Image
                                  src={message.url}
                                  rounded
                                  style={{
                                    border: "1px solid",
                                  }}
                                />
                              )}
                            </div>
                            {/* <div>
                              <Image
                                src={user.picture}
                                roundedCircle
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  border: "1px solid",
                                }}
                              />
                            </div> */}
                          </>
                        ) : (
                          <>
                            <div>
                              <Image
                                src={
                                  message.sender && message.sender.picture
                                    ? message.sender.picture
                                    : "https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                                }
                                roundedCircle
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  border: "1px solid",
                                }}
                              />
                            </div>
                            <div className="ml-2" style={{ fontSize: "14px" }}>
                              <p className="m-0" style={{ fontWeight: "bold" }}>
                                {message.sender.firstName}
                              </p>
                              <div className="d-flex">
                                <p
                                  style={{
                                    fontSize: "20px",
                                    borderRadius: "25px",
                                    background: "#EFEFEF",
                                    padding: "15px",
                                  }}
                                >
                                  {message.content}
                                </p>
                                <div
                                  onClick={() =>
                                    handleLike(message._id, user._id)
                                  }
                                >
                                  {message.like.length > 0 ? (
                                    <HeartFill
                                      size={30}
                                      className="ml-4 mt-3"
                                    />
                                  ) : (
                                    <Heart size={30} className="ml-4 mt-3" />
                                  )}
                                </div>
                              </div>
                              {message.url && (
                                <Image
                                  src={message.url}
                                  rounded
                                  style={{
                                    border: "1px solid",
                                  }}
                                />
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  );
                })}
            </div>
          </Row>
          <Row>
            <Form
              style={{ width: "100%" }}
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Form.Row>
                <Col xs={10}>
                  <Form.Group style={{ width: "100%" }}>
                    <Form.Control
                      type="text"
                      placeholder="Send Message..."
                      onChange={(e) => setMessage(e.currentTarget.value)}
                      value={message}
                    />
                  </Form.Group>
                </Col>
                <Col xs={2} style={{ paddingLeft: " 8px", paddingTop: "3px" }}>
                  <Form.Group>
                    <Form.File
                      id="custom-file"
                      onChange={(e) => handleFileSelected(e)}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form>
          </Row>
        </>
      )}
    </div>
  );
}
