import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { fetchImgUrl } from "../../api/messageApi";
import "./MessageContent.css";

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
      console.log(url);
      setUrl(url.imageUrl);
    } else {
      return response;
    }
  };

  const findUserName = async (userId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/${userId}`
      );
      if (response.ok) {
        return await response.json();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
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
                  : "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
              }
              rounded
              height="70px"
              alt="user"
            ></Image>
            <h3 className="ml-2">
              {selectedConvo.participants.length === 2
                ? selectedConvo.creator2.firstName
                : selectedConvo.participants
                    .map((participant) => participant.firstName)
                    .join(", ")}
            </h3>
          </Row>
          <Row style={{ height: "70vh" }}>
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
                          message.sender === user._id
                            ? "d-flex ownMessage px-2"
                            : "d-flex incomeMessage px-2"
                        }
                        key={`msggg${index}`}
                      >
                        {message.sender === user._id ? (
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
                              <p>{message.content}</p>
                              {message.url && (
                                <Image src={message.url} rounded />
                              )}
                            </div>
                            <div>
                              <img
                                src={user.picture}
                                height="40px"
                                width="40px"
                                style={{
                                  borderRadius: "50%",
                                }}
                                alt="user"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <img
                                src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
                                height="40px"
                                width="40px"
                                style={{
                                  borderRadius: "50%",
                                }}
                                alt="user"
                              />
                            </div>
                            <div className="ml-2" style={{ fontSize: "14px" }}>
                              <p className="m-0" style={{ fontWeight: "bold" }}>
                                {findUserName(message.to)}
                              </p>
                              <p>{message.content}</p>
                              {message.url && (
                                <Image src={message.url} rounded />
                              )}
                            </div>
                          </>
                        )}
                      </div>
                      {/* <div key={index}>
                      <p>{message.content}</p>
                      <Image src={message.url} rounded />
                    </div> */}
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
                <Col xs={2}>
                  <Form.Group>
                    <Form.File
                      id="custom-file"
                      label="Custom file input"
                      custom
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
