import { typicodeApi } from "shared/api";
import { createEvent, createStore } from "effector";

type UserInfoT = {
  email: string;
  username: string;
};

const saveUserInfo = createEvent<UserInfoT>();

// const loginUserFx = createEffect(
//   (values: Parameters<typeof typicodeApi.auth.loginUser>["0"]) => {
//     return typicodeApi.auth.loginUser(values);
//   }
// );

export const $user = createStore({}).on(saveUserInfo, (_, payload) => ({
  ...payload,
}));

// export const effects = {
//   loginUserFx,
// };

export const events = {
  saveUserInfo,
};
