import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import SocialLoginsModal from "./SocialLoginsModal/SocialLoginsModal";

export default function Hero() {
  // HOOKS

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Recycle for a Better Tomorrow! {openModal}</h1>
        <p>
          Join our community and make a real impact on the environment through
          fun and engaging recycling activities.
        </p>
        <Button onClick={handleOpenModal} className="cta-button">
          Start Your Recycling Journey
        </Button>
      </div>
      <SocialLoginsModal open={openModal} handleCloseModal={handleCloseModal} />
    </section>
  );
}
