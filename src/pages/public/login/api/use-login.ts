import { useIsLoading } from "features/helpers";
import { useCallback } from "react";
import { typicodeApi } from "shared/api";
import { updateTokens, useAuthorization } from "features/authorization";
import { useNavigate } from "react-router";
import {
  PRIVATE_ADMIN_PATH,
  PRIVATE_USER_PATH,
  PUBLIC_PATH,
} from "shared/config";
import { notification } from "antd";

export const useLogin = () => {
  const { startLoading, finishLoading, isLoading } = useIsLoading();
  const { setRole } = useAuthorization();
  const navigate = useNavigate();

  const handleLogin = useCallback(
    async (values) => {
      try {
        startLoading();
        const { data } = await typicodeApi.auth.loginUser(values);
        updateTokens({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });
        localStorage.setItem("role", data.user.role);
        setRole(data.user.role);
        if (!data.user.is_enabled) navigate(PUBLIC_PATH.NOT_ACTIVATED_EMAIL);

        if (data.user.role === "ADMIN") navigate(PRIVATE_ADMIN_PATH.REPORTS);
        if (data.user.role === "USER") navigate(PRIVATE_USER_PATH.SPACES);
      } catch (error) {
        finishLoading();
        notification.error({
          message: "Произошла ошибка",
        });
      }
    },
    [finishLoading, startLoading, setRole]
  );

  return {
    isLoading,
    handleLogin,
  };
};
