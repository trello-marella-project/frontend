import { tapicodeApi } from "shared/api";
import { createEffect, createStore } from "effector";
import { Request } from "shared/api/types";

const loginUserFx = createEffect((values: Request.Login) => {
  return tapicodeApi.auth.loginUser(values);
});

export const $user = createStore({}).on(loginUserFx.doneData, (_, payload) => ({
  ...payload,
}));
