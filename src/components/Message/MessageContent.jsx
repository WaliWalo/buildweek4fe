import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
export default function MessageContent() {
  const dispatch = useDispatch();
  const { selectedConvo, messages, user } = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState(null);
  let socket = null;

  const connOpt = {
    transports: ["websocket"],
  };

  socket = io(process.env.REACT_APP_BE_URL, connOpt);

  const handleSubmit = (e) => {
    e.preventDefault();
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
  return (
    <div className="p-3">
      {selectedConvo && (
        <>
          <Row>
            <h3>
              {selectedConvo.participants
                .map((participant) => participant.firstName)
                .join(", ")}
            </h3>
          </Row>
          <Row style={{ height: "80vh" }}>
            {messages.length > 0 && messages.map((message) => message.content)}
          </Row>
          <Row>
            <Form
              style={{ width: "100%" }}
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Form.Row>
                <Form.Group style={{ width: "100%" }}>
                  <Form.Control
                    type="text"
                    placeholder="Send Message..."
                    onChange={(e) => setMessage(e.currentTarget.value)}
                    value={message}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </Row>
        </>
      )}
    </div>
  );
}
