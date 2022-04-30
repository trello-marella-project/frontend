import { ComponentClass, FunctionComponent } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export type Routes = {
  path?: string;
  component: FunctionComponent | ComponentClass;
  default?: boolean;
}[];

interface Props {
  routes: Routes;
}

export const Routing = ({ routes }: Props) => {
  const defaultPath = routes.find((route) => route.default)?.path;

  // TODO create and connect not found page
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          element={<route.component />}
          key={route.path}
          path={route.path}
        />
      ))}
      {defaultPath && (
        <Route path="/" element={<Navigate to={defaultPath} />} />
      )}
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};
