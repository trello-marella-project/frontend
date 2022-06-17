import { Routes } from "features/routing";
import * as pages from "pages";
import { PRIVATE_ADMIN_PATH } from "shared/config";

export const adminRoutes: Routes = [
  {
    path: PRIVATE_ADMIN_PATH.REPORTS,
    component: pages.admin.Reports,
    default: true,
  },
];
