import Avartar from "../../../assets/images/avartar.avif";
import "./ProfileImage.css";

export default function ProfileImage() {
  return (
    <div id="profile-image">
      <img src={Avartar} alt="profile image" />
    </div>
  );
}
