import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// prop

export default function SocialLoginsModal({ open, handleCloseModal }) {
  return (
    <div>
      <Modal unmountOnClose isOpen={open}>
        <ModalHeader className="bg-primary  text-white">Login</ModalHeader>
        <ModalBody>This is you social logins page</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
