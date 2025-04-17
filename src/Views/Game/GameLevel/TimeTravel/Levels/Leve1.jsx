// import dustBinDark from "../../../../../assets/images/dustBinDark.";

//components

import PointModal from "../../../../../components/reusables/Data/Modals/PointModal";
import { Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

//
import { useEffect, useRef, useState } from "react";
import Dustbins from "../Dustins/Dustbins";
import Cursor from "../../../../../assets/images/cursor2.png";
import { rubbishes } from "../../../../../utils/genericData";
import { FaPlay } from "react-icons/fa";

import "./style.css";
import { useNavigate } from "react-router-dom";
import { usePut } from "../../../../../hooks/usePut";

import { UPDATE_GAME_PROGRESS } from "../../../../../Endpoints/GameEndpoints";
import { useAuth } from "../../../../../hooks/useAuth";
import { Modal } from "reactstrap";
import { FaPause } from "react-icons/fa6";
import toast from "react-hot-toast";

export default function Leve1({
  setActiveGameLevel,
  activeGameLevel,
  refetch,
}) {
  const { auth } = useAuth();
  const [counter, setCounter] = useState(0);
  const [timeCounter, setTimeCounter] = useState(rubbishes.length + 2);
  const [prevId, setPrevId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [openPointsModal, setOpenPointsModal] = useState(false);
  // const [trialsCount, setTrialsCount] = useState(0);
  const [pointsData, setPointsData] = useState({
    pointsCount: 0,
  });

  const { mutate } = usePut();

  const navigate = useNavigate();
  const beingDragRef = useRef(null);

  const handleOnRubbishDrop = (dustbin, e) => {
    if (!isPlaying) {
      return;
    }
    e.preventDefault();

    if (rubbishes[counter].type !== dustbin.type) {
      return;
    }

    beingDragRef.current?.classList.remove("scale");
    setPointsData((prev) => ({ ...prev, pointsCount: prev.pointsCount + 1 }));

    if (counter >= rubbishes.length - 1) {
      // alert("limit reached");
      handlePauseGame();
      setOpenPointsModal(true);

      //
      return setCounter(0);
    }
    setCounter((prev) => (prev += 1));

    mutate({
      data: {
        isReward: false,
        gameId: activeGameLevel.gameId,
        levelId: activeGameLevel.leveId,
        isCompleted: true,
        earnedBatch: false,
        userId: auth._id,
      },
      url: UPDATE_GAME_PROGRESS(),
    });

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

  const handleStartGame = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setTimeCounter((prevTime) => {
          const nextTime = prevTime - 1;

          return nextTime;
        });
      }, 1000);
    }

    setPrevId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, counter]);

  useEffect(() => {
    if (timeCounter <= 0 && isPlaying) {
      clearInterval(prevId);
      setTimeCounter(rubbishes.length + 2);
      setCounter(0);
      setIsPlaying(false);
      setOpenModal(true);
    }
  }, [timeCounter]);

  const handlePauseGame = () => {
    if (prevId) {
      clearInterval(prevId);
    }
    setIsPlaying(false);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <div
        style={{
          width: "fit-content",
          margin: "auto",
        }}
      >
        <div className="mb-2">
          <span
            onClick={() => {
              isPlaying ? handlePauseGame() : handleStartGame();
            }}
            style={{
              cursor: "pointer",
            }}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </span>
          <span
            style={{
              display: "inline-block",
              marginLeft: "2rem",
              fontWeight: "700",
            }}
          >
            {timeCounter}
          </span>
        </div>
        <div
          className="d-flex"
          style={{
            gap: "1rem",
          }}
        >
          {rubbishes.map((rubbish, indx) => {
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
              onDragStart={() => {
                if (!isPlaying) {
                  // return;
                  return toast.error("Game not started");
                }
              }}
              onDrag={(e) => {
                if (!isPlaying) {
                  return;
                  // toast.error("Game not started");
                } else {
                  handleOnDrag(rubbishes[counter]);
                }
              }}
            >
              <img
                draggable={true}
                // draggable={true}
                src={rubbishes[counter]?.image}
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
          refetchLevels: refetch,
          activeGameLevel,
          openModal: openPointsModal,
          handleOnClose: handleCloseModal,
          setActiveGameLevel,
        }}
      />

      <FailureModal {...{ openModal, closeModal }} />
    </div>
  );
}

const FailureModal = ({ openModal, closeModal }) => {
  return (
    <Modal isOpen={openModal} backdrop onClosed={closeModal} unmountOnClose>
      <ModalHeader></ModalHeader>

      {/* className="bg-danger" */}
      <ModalBody>
        <span
          style={{
            fontSize: "2rem",
          }}
        >
          ❌
        </span>
        <h2>Mission Failed</h2>
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={() => {
            closeModal();
          }}
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};
