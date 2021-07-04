import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function SomethingBig() {
  return (
    <Container className="somethingBigMain py-4">
      <Row>
        <Col className="text-center pb-2">
          <h3>PART OF SOMETHING BIG</h3>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" md={{ span: 8, offset: 2 }}>
          <p className="mb-5">
            Pellentesque a enim vitae metus eleifend fermentum et at nulla.
            Mauris semper hendrerit commodo. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Cras pellentesque massa in euismod fermentum. Donec ac mauris eget
            tellus accumsan suscipit a ac eros. Donec aliquam lobortis mollis.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="circle d-flex">
            <div className="text-center circleText">
              <p className="mb-2 biggerText">9</p>
              <p>Agencies</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="circle d-flex">
            <div className="text-center circleText">
              <p className="mb-2 biggerText">17</p>
              <p>Offices</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="circle d-flex">
            <div className="text-center circleText">
              <p className="mb-2 biggerText">1</p>
              <p>Goal</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <button className="mt-3 contactUsBtn text-white">
            Find out more
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default SomethingBig;
