import React from "react";
import { Col, Row } from "react-bootstrap";

function GoogleMaps() {
  return (
    <Row>
      <Col className="text-center noPaddingCol">
        <div className="mapsBackground"></div>
        <div className="mapsOverlay">
          <h3>FIND US</h3>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <p>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Col>
    </Row>
  );
}

export default GoogleMaps;
