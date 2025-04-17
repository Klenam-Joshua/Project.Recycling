// import dustBinDark from "../../../../../assets/images/dustBinDark.";

//components

import PointModal from "../../../../../components/reusables/Data/Modals/PointModal";

//
import { useEffect, useRef, useState } from "react";
import Dustbins from "../Dustins/Dustbins";
import Cursor from "../../../../../assets/images/cursor2.png";
import { level2Rubbishes } from "../../../../../utils/genericData";

import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Level2({ setActiveGameLevel, activeGameLevel }) {
  const [counter, setCounter] = useState(0);
  const [openPointsModal, setOpenPointsModal] = useState(false);
  // const [trialsCount, setTrialsCount] = useState(0);
  const [pointsData, setPointsData] = useState({
    pointsCount: 0,
  });

  const navigate = useNavigate();

  const beingDragRef = useRef(null);

  const handleOnRubbishDrop = (dustbin, e) => {
    e.preventDefault();

    if (level2Rubbishes[counter].type !== dustbin.type) {
      return;
    }

    beingDragRef.current?.classList.remove("scale");
    setPointsData((prev) => ({ ...prev, pointsCount: prev.pointsCount + 1 }));
    // console.log({ counter, RubbishesLength: rubbishes.length });
    if (counter >= level2Rubbishes.length - 1) {
      // alert("limit reached");
      setOpenPointsModal(true);
      //
      return setCounter(0);
    }
    setCounter((prev) => (prev += 1));

    /**
     *
     * if rubbish dumped is the one required for the particular
     * dusbin,  increase point by 1;
     */
  };

  const handleOnDrag = (beingDraged, e) => {
    console.log({ beingDraged });
  };

  const handleCloseModal = () => {
    setActiveGameLevel((prev) => ({ ...prev, hasLaunchedLevel: false }));
    setOpenPointsModal(false);
  };
  return (
    <div>
      <div
        style={{
          width: "fit-content",
          margin: "auto",
        }}
        // className="bg-warning rounded  px-2 py-1"
      >
        <div
          className="d-flex"
          style={{
            gap: "1rem",
          }}
        >
          {level2Rubbishes.map((rubbish, indx) => {
            return (
              <div
                className="rounded-circle border border-3  border-dark   d-flex"
                key={indx}
                style={{
                  background: counter >= indx + 1 ? "#ff0" : "",
                  borderColor: "black",
                  width: "1rem",
                  height: "1rem",
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div id="games_wrapper_main" className="pt-4">
        <div>
          <Dustbins {...{ handleOnRubbishDrop }} />

          <div ref={beingDragRef} id="rubbish" className="rounded mt-5   ">
            <div
              onDrag={(e) => {
                handleOnDrag(level2Rubbishes[counter]);
              }}
            >
              <img
                draggable={true}
                // draggable={true}
                src={level2Rubbishes[counter]?.image}
                style={{
                  cursor: `url(${Cursor}) , default`,
                  height: "13rem",
                  width: "80%",
                  display: "block",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        </div>
        {/* <div id="games_trolley"></div> */}
      </div>
      <PointModal
        {...{
          activeGameLevel,
          openModal: openPointsModal,
          handleOnClose: handleCloseModal,
          setActiveGameLevel,
        }}
      />
    </div>
  );
}
