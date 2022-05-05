import { tapicodeApi } from "shared/api";
import { updateTokens } from "./update-tokens";
import { RoleT } from "./authorization-context";

export const getUserRole = async (): Promise<RoleT> => {
  const refreshToken = localStorage.getItem("refresh");
  const role = localStorage.getItem("role");

  if (!refreshToken || !role || !(role === "ADMIN" || role === "USER"))
    return "VISITOR";

  try {
    const { data } = await tapicodeApi.auth.tokenRefresh();
    updateTokens(data);

    return role;
  } catch (error: any) {
    if (error?.response?.status !== 401) {
      throw new Error(error);
    }
    localStorage.clear();

    return "VISITOR";
  }
};
