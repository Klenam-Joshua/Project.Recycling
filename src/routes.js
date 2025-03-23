import Dashboard from "./Views/Dashboard/Dashboard";
import Games from "./Views/Games/Games";
import Education from "./Views/Education/Education";
import Game from "./Views/Game/Game";

export const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
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
    name: "Education",
    path: "/education",
    component: Education,
  },
];
