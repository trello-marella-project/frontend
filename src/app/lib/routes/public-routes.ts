import { Routes } from "features/routing";
import * as pages from "pages";
import { PUBLIC_PATH } from "shared/config";

export const publicRoutes: Routes = [
  {
    path: PUBLIC_PATH.REGISTER,
    component: pages.Register,
  },
  {
    path: PUBLIC_PATH.LOGIN,
    component: pages.Login,
    default: true,
  },
  {
    path: PUBLIC_PATH.ACTIVATED_EMAIL,
    component: pages.ActivatedEmail,
  },
  {
    path: PUBLIC_PATH.NOT_ACTIVATED_EMAIL,
    component: pages.NotActivatedEmail,
  },
  {
    path: PUBLIC_PATH.ACTIVATE_EMAIL,
    component: pages.ActivateEmail,
  },
];
