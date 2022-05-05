import { createContext } from "react";

export type RoleT = "ADMIN" | "USER" | "VISITOR";

interface AuthorizationContextInterface {
  setRole: (role: RoleT) => void;
  role: RoleT;
}

export const AuthorizationContext =
  createContext<AuthorizationContextInterface>({
    setRole: () => void null,
    role: "VISITOR",
  });
