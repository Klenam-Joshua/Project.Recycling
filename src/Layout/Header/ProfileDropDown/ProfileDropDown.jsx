import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

// import Logo from "../../../assets/images/recycle-sign.png";
import Avartar from "../../../assets/images/avartar.avif";

// icons
import { IoIosLock } from "react-icons/io";
import { PiGearFill } from "react-icons/pi";

// Hooks
import { useState } from "react";

export default function ProfileDropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex ">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          className="rounded-circle mr-2"
          style={{
            background: `url(${Avartar})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "2rem",
            height: "2rem",
          }}
        >
          {/* <img
            src={Avartar}
            alt="avartar_image"
            style={{
              width: "1.9rem",4
              height: "1.9rem",
              borderRadius: "50%",
            }}
          /> */}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Profile</DropdownItem>
          <DropdownItem>
            <div className="d-flex " style={{ gap: "0.6rem" }}>
              <span>
                <PiGearFill />
              </span>
              <span>Profile Settings</span>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="d-flex " style={{ gap: "0.6rem" }}>
              <span>
                <IoIosLock />
              </span>
              <span>Logout</span>
            </div>
          </DropdownItem>

          {/* <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
