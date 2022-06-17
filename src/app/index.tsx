import React from "react";
import "./styles/index.scss";
import { Routing } from "features/routing";
import { publicRoutes, userRoutes, adminRoutes } from "./lib";
import { useAuthorization } from "../features/authorization";
import { PrivateLayout } from "../widgets/private-layout";

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
        <PrivateLayout>
          <Routing routes={userRoutes} />
        </PrivateLayout>
      );
    default:
      return (
        <div>
          <Routing routes={publicRoutes} />
        </div>
      );
  }
};
