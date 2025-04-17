import Dashboard from "./Views/Dashboard/Dashboard";
import Games from "./Views/Games/Games";
import Education from "./Views/Education/Education";
import Game from "./Views/Game/Game";
import Course from "./Views/Course/Course";
import Settings from "./Views/Settings/Settings";
import Map from "./Views/Map/Map";
import Logs from "./Views/Logs/Logs";

export const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    name: "Dashboard",
    path: "/profile-settings",
    component: Settings,
  },
  {
    name: "Game",
    path: "/games",
    component: Games,
  },
  {
    name: "Game",
    path: "/games/:id",
    component: Game,
  },
  {
    name: "Course",
    path: "/courseDetails/:id",
    component: Course,
  },
  {
    name: "Education",
    path: "/education",
    component: Education,
  },
  {
    name: "Map",
    path: "/map",
    component: Map,
  },

  {
    name: "Logs",
    path: "/logs",
    component: Logs,
  },
];
