import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import LoginItems from "./LoginItems";
// prop

export default function SocialLoginsModal({ open, handleCloseModal }) {
  return (
    <div>
      <Modal unmountOnClose isOpen={open}>
        <ModalHeader className="bg-primary  text-white">Login</ModalHeader>
        <ModalBody>
          This is you social logins page
          <LoginItems />
        </ModalBody>
        <ModalFooter>
          <Button
            color="warning"
            className="text-white"
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
