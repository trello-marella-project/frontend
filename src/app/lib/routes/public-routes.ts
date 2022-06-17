import { Routes } from "features/routing";
import * as pages from "pages";
import { PUBLIC_PATH } from "shared/config";

export const publicRoutes: Routes = [
  {
    path: PUBLIC_PATH.REGISTER,
    component: pages.pub.Register,
  },
  {
    path: PUBLIC_PATH.LOGIN,
    component: pages.pub.Login,
    default: true,
  },
  {
    path: PUBLIC_PATH.ACTIVATED_EMAIL,
    component: pages.pub.ActivatedEmail,
  },
  {
    path: PUBLIC_PATH.NOT_ACTIVATED_EMAIL,
    component: pages.pub.NotActivatedEmail,
  },
  {
    path: PUBLIC_PATH.ACTIVATE_EMAIL,
    component: pages.pub.ActivateEmail,
  },
];
