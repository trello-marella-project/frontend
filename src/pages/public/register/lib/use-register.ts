import { useCallback } from "react";
import { useIsLoading } from "features/helpers";
import { typicodeApi } from "shared/api";

import { useNavigate } from "react-router";
import { notification } from "antd";
import { PUBLIC_PATH } from "shared/config";

export const UseRegister = () => {
  const { startLoading, finishLoading, isLoading } = useIsLoading();
  const navigate = useNavigate();

  const handleRegister = useCallback(
    async (values) => {
      try {
        startLoading();
        const { status } = await typicodeApi.auth.registerUser(values);
        if (status === 200) navigate(PUBLIC_PATH.ACTIVATE_EMAIL);
      } catch (error) {
        finishLoading();
        notification.error({
          message: "Произошла ошибка",
        });
      }
    },
    [finishLoading, navigate, startLoading]
  );

  return { handleRegister, isLoading };
};
