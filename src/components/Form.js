import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Form() {
  return (
    <Container className="formMain">
      <Row>
        <Col className="d-flex flex-column text-center px-5">
          <h3 className="my-4">GET IN TOUCH</h3>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <p className="pb-4">eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Col>
      </Row>

      <Row className="text-center mb-2">
        <Col md={{ span: 4, offset: 2 }}>
          <input type="text" placeholder="Name" />
        </Col>
        <Col md={4}>
          <input type="text" placeholder="Email" />
        </Col>
      </Row>
      <Row className="text-center">
        <Col md={{span: 8, offset: 2}}>
          <textarea placeholder="Message..." />
        </Col>
      </Row>
      <Row className="text-center py-3">
        <Col>
          <button className="submitBtn">Submit</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Form;
