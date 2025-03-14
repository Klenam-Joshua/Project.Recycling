/// components
import Languages from "./Languages/Languages";
import NotificationDropdown from "./NotificationDropdown/NotificationDropdown";
import ProfileDropDown from "./ProfileDropDown/ProfileDropDown";

export default function Header() {
  return (
    <header id="header" className="py-2  d-flex justify-content-between  px-4">
      <div></div>
      <div
        className="d-flex align-items-center"
        style={{
          gap: "2rem",
        }}
      >
        <Languages />
        <NotificationDropdown />
        <ProfileDropDown />
      </div>
    </header>
  );
}
