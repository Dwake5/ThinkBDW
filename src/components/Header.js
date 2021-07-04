import React from "react";
import { Col, Row } from "react-bootstrap";

function Header() {
  return (
    <Row className="no-gutters">
      <Col>
        <div className="headerBackground">
          <div className="d-flex justify-content-between">
            <p className="text-white p-2">NEWCompany</p>
            <p className="text-white p-2">info@newcompany.co.uk</p>
          </div>
          <div className="text-center m-auto">
            <h1 className="text-white">NewCompany</h1>
            <p className="mb-0 text-white">Pellentesque a enim vitae metus eleifend fermentum et at</p>
            <p className="text-white">nulla. Mauris semper hendrerit commodo.</p>
            <button className="mt-3 contactUsBtn text-white">CONTACT US</button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
