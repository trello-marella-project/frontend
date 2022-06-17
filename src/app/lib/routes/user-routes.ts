import { Routes } from "features/routing";
import * as pages from "pages";
import { PRIVATE_USER_PATH } from "shared/config";

export const userRoutes: Routes = [
  {
    path: PRIVATE_USER_PATH.SPACES,
    component: pages.user.Spaces,
    default: true,
  },
  {
    path: PRIVATE_USER_PATH.SEARCH_SPACES,
    component: pages.user.SearchSpaces,
  },
  {
    path: PRIVATE_USER_PATH.PROFILE,
    component: pages.user.Profile,
  },
];
