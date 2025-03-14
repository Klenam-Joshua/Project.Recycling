import {
  // Dropdown,
  // DropdownToggle,
  // DropdownItem,
  // DropdownMenu,
  // Badge,
  UncontrolledPopover,
  // PopoverBody,
  PopoverHeader,
  PopoverBody,
  Button,
  Badge,
} from "reactstrap";

// STYLE
import Style from "./noticiationDropdown.module.css";

// ICONS
import { MdNotifications } from "react-icons/md";

// Hooks
import { useState } from "react";

export default function NotificationDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div>
      {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="bg-transparent  border-0">
          <span className={`${Style.btn_wrapper}`}>
            <MdNotifications size={17} />
            <span className={`${Style.btn_wrapper_badge}`}>
              <Badge color="danger">4</Badge>
            </span>
          </span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>first dropdown</DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
      <Button
        id="PopoverLegacy"
        type="button"
        className="bg-transparent  border-0"
      >
        <span className={`${Style.btn_wrapper}`}>
          <MdNotifications size={17} />
          <span className={`${Style.btn_wrapper_badge}`}>
            <Badge color="danger">4</Badge>
          </span>
        </span>
      </Button>

      <UncontrolledPopover
        placement="bottom"
        target="PopoverLegacy"
        trigger="legacy"
      >
        <PopoverHeader>Legacy Trigger</PopoverHeader>
        <PopoverBody>All notifications go here</PopoverBody>
      </UncontrolledPopover>
    </div>
  );
}
