// import Link

//components
import ProfileImage from "./ProfileImage/ProfileImage";
import Logo from "../../assets/images/recycle-sign.png";
import { NavLink } from "react-router-dom";

import "../style.css";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
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
  {
    name: "Map",
    path: "/map",
    icon: "MP",
  },

  {
    name: "Logs",
    path: "/logs",
    icon: "LG",
  },
];

export default function Sidebar() {
  // useAuth
  const { auth } = useAuth();
  return (
    <aside id="side_bar">
      <div
        className="bg-white d-flex justify-content-center align-items-center "
        style={{
          paddingBlock: "0.16rem",
        }}
      >
        <img
          src={Logo}
          style={{
            width: "2.85rem",
            height: "2.85rem",
          }}
        />
      </div>
      <div className="mt-4">
        <ProfileImage />
      </div>
      <div className="side__username rounded">
        <h6 className="text-center text-white py-2 mt-4">{auth?.userName}</h6>
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
