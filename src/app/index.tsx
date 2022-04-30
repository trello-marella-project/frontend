import React from "react";
import "./styles/index.scss";
import { Routing } from "features/routing";
import { publicRoutes, userRoutes, adminRoutes } from "./lib";

function App() {
  return (
    <div>
      <Routing routes={publicRoutes} />
    </div>
  );
}

export default App;
