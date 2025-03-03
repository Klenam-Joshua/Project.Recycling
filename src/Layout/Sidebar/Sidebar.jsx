// import Link

//components
import ProfileImage from "./ProfileImage/ProfileImage";
import Logo from "../../assets/images/recycle-sign.png";
import { NavLink } from "react-router-dom";

import "../style.css";
import { useEffect } from "react";
const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "DB",
  },
  {
    name: "Games",
    path: "/games",
    icon: "GA",
  },
  {
    name: "Education",
    path: "/education",
    icon: "ED",
  },
];

export default function Sidebar() {
  useEffect(() => {
    fetch(
      "http://psl-pnx-idp-vm2:5001/api/Account/GetPasswordPolicyByAccount?accountCode=00000038_09"
    )
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        console.log({ res });
      });
  }, []);
  return (
    <aside id="side_bar">
      <div className="bg-white d-flex justify-content-center align-items-center">
        <img
          src={Logo}
          style={{
            width: "3rem",
            height: "3rem",
          }}
        />
      </div>
      <div className="mt-4">
        <ProfileImage />
      </div>
      <div className="side__username rounded">
        <h6 className="text-center text-white py-2 mt-4">Angel Naana</h6>
      </div>
      <nav>
        <ul>
          {menus.map((menu, key) => {
            return (
              <li key={key}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    isActive ? "active-link nav-link " : "nav-link"
                  }
                >
                  <span className="icon_container">{menu.icon}</span>
                  <span className="text-white  ml-3">{menu.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
