import dustBin1 from "../../../../../assets/images/Compost.svg";
import dustbin2 from "../../../../../assets/images/Recycling.svg";
import dustbin3 from "../../../../../assets/images/Landfill.svg";
import { Row, Col } from "reactstrap";

import { rubbishes } from "../../../../../utils/genericData";
import { useState } from "react";

const rubbishTypes = [
  {
    type: "compost",
    name: "Compost",
    image: dustBin1,
  },
  {
    type: "recycling",
    name: "Recycling",
    image: dustbin2,
  },
  {
    type: "landfill",
    name: "Landfill",
    image: dustbin3,
  },
];

export default function Dustbins({ counter, setCounter, handleOnRubbishDrop }) {
  return (
    <div>
      <Row>
        {rubbishTypes.map((type, indx) => {
          return (
            <Col key={`${indx}`}>
              <div
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="game_image_wrapper"
                onDrop={(e) => {
                  e.preventDefault();
                  handleOnRubbishDrop(type, e);
                }}
              >
                <img src={type.image} alt="dustbin_image" />
                <h4 className="dustbin_title ">{type.name}</h4>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
