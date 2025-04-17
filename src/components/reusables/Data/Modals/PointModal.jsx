import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Confetti from "react-confetti";
import Trophy from "../../../../assets/images/trophy.png";

import { useUpdate, useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../../../hooks/usePost";

import { UPDATE_GAME_PROGRESS } from "../../../../Endpoints/GameEndpoints";
import { usePut } from "../../../../hooks/usePut";
import { useAuth } from "../../../../hooks/useAuth";

export default function PointModal({
  refetchLevels,

  activeGameLevel,
  leveId,
  gameId,
  openModal,
  handleOnClose,
  badgeTitle,
  badgeImage,
}) {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  const { auth, setAuth } = useAuth();

  const handleNavigate = () => {
    const id = localStorage.getItem("levelId");
    // navigate(`/games/${id}`);
    // return console.log(id);
  };

  const { mutate } = usePut((res) => {});

  return (
    <div>
      <Modal
        isOpen={openModal}
        backdrop
        onClosed={handleOnClose}
        unmountOnClose
      >
        <ModalHeader>
          <p>Congratulations</p>
          <span
            style={{
              fontWeight: "400",
            }}
          >
            You&apos;ve earned a batch for completing this Level
          </span>
        </ModalHeader>

        {/* className="bg-danger" */}
        <ModalBody>
          <div>
            <img
              src={Trophy}
              alt=""
              style={{
                display: "block",
                margin: "auto",
                width: "15rem",
                height: "15rem",
              }}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              const { gameId, leveId } = activeGameLevel;
              console.log({ leveId });

              mutate({
                data: {
                  gameId,
                  levelId: leveId,
                  isCompleted: true,
                  hasEarnedBatch: true,
                  medalCode: "lCompletion",
                  medalName: "Level Completion",
                  userId: auth._id,
                },
                url: UPDATE_GAME_PROGRESS(),
              });
              handleNavigate();
              handleOnClose();
            }}
          >
            Continue
          </Button>
        </ModalFooter>
      </Modal>
      {openModal && <Confetti {...{ width, height, run: openModal }} />}
    </div>
  );
}
