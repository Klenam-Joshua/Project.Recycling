import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

import { routes } from "../routes";
import { Route, Routes } from "react-router-dom";

export default function Layout() {
  return (
    <main id="app__wrapper">
      <Sidebar />
      <div id="content_side">
        {/* Header */}
        <Header />

        <section id="app__content" className="px-3">
          <Routes>
            {routes?.map((route) => {
              return (
                <Route
                  key={route.name}
                  path={route.path}
                  element={<route.component />}
                />
              );
            })}
          </Routes>
        </section>
      </div>
    </main>
  );
}
