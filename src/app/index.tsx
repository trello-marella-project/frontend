import React from "react";
import "./styles/index.scss";
import { Routing } from "features/routing";
import { publicRoutes, userRoutes, adminRoutes } from "./lib";
import { useAuthorization } from "../features/authorization";

export const App = () => {
  const { role } = useAuthorization();

  switch (role) {
    case "ADMIN":
      return (
        <div>
          <Routing routes={adminRoutes} />
        </div>
      );
    case "USER":
      return (
        <div>
          <Routing routes={userRoutes} />
        </div>
      );
    default:
      return (
        <div>
          <Routing routes={publicRoutes} />
        </div>
      );
  }
};
