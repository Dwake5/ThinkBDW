import React from "react";
import { Col, Row } from "react-bootstrap";
import mapPicture from "../assets/icons/location.png";
import teamPicture from "../assets/icons/team.png";
import buildingPicture from "../assets/icons/building.jpg";

function Logos() {
  return (
    <Row>
      <Col className="text-center">
        <div className="mapCircle d-flex align-items-center">
          <img src={mapPicture} alt="map logo" className="logoImage" />
        </div>
        <p className="orangeText">ITEM 1</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ultrices eget erat et feugiat. Sed ac convallis diam
        </p>
      </Col>
      <Col className="text-center">
        <div className="peopleCircle d-flex align-items-center">
          <img src={teamPicture} alt="team logo" className="logoImage" />
        </div>
        <p className="greenText">ITEM 2</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ultrices eget erat et feugiat. Sed ac convallis diam
        </p>
      </Col>
      <Col className="text-center">
        <div className="buildingCircle d-flex align-items-center">
          <img src={buildingPicture} alt="building logo" className="logoImage" />
        </div>
        <p className="purpleText">ITEM 3</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ultrices eget erat et feugiat. Sed ac convallis diam
        </p>
      </Col>
    </Row>
  );
}

export default Logos;
