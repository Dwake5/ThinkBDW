import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function SomethingBig() {
  return (
    <Container className="footerMain py-4">
      <Row>
        <Col>
          <p>NEWCompany</p>
        </Col>
        <Col>
          <p className="text-right">&copy; Copyright 2015 NEWCompany</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SomethingBig;
