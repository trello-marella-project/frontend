import { api } from "shared/api";

interface Params {
  refreshToken: string;
  accessToken: string;
}

export const updateTokens = ({ refreshToken, accessToken }: Params) => {
  localStorage.setItem("access", accessToken);
  localStorage.setItem("refresh", refreshToken);
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
