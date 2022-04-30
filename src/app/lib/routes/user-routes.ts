import { Routes } from "features/routing";
import * as pages from "pages";
import { PRIVATE_USER_PATH } from "shared/config";

export const userRoutes: Routes = [
  {
    path: PRIVATE_USER_PATH.REPORTS,
    component: pages.Reports,
    default: true,
  },
];
