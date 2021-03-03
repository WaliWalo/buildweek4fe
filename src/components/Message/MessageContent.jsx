import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function MessageContent() {
  const { selectedConvo, messages } = useSelector((state) => state);
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
            <Form style={{ width: "100%" }}>
              <Form.Row>
                <Form.Group style={{ width: "100%" }}>
                  <Form.Control type="text" placeholder="Send Message..." />
                </Form.Group>
              </Form.Row>
            </Form>
          </Row>
        </>
      )}
    </div>
  );
}
