import { ReactNode, useEffect, useMemo, useState } from "react";
import { AuthorizationContext, RoleT } from "./authorization-context";
import { getUserRole } from "./get-user-role";

interface Props {
  children: ReactNode;
}

export const Authorization = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState<RoleT>("VISITOR");

  useEffect(() => {
    getUserRole()
      .then((role) => setRole(role))
      .finally(() => setIsLoading(false));
  }, []);

  const contextValue = useMemo(
    () => ({
      setRole,
      role,
    }),
    [role]
  );

  if (isLoading) return null;

  return (
    <AuthorizationContext.Provider value={contextValue}>
      {children}
    </AuthorizationContext.Provider>
  );
};
