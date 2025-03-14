import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

// import Logo from "../../../assets/images/recycle-sign.png";
// import Avartar from "../../../assets/images/avartar.avif";

// icons
import { MdCurrencyFranc } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa6";

// Hooks
import { useState } from "react";

export default function Languages() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className=" border-0 bg-transparent">
          <span>
            <FaLanguage size={17} />
          </span>
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
          {/* <DropdownItem header>Profile</DropdownItem> */}
          <DropdownItem>
            <div className="d-flex " style={{ gap: "0.6rem" }}>
              <span>
                <RiEnglishInput />
              </span>
              <span>English</span>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="d-flex " style={{ gap: "0.6rem" }}>
              <span>
                <MdCurrencyFranc />
              </span>
              <span>French</span>
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
