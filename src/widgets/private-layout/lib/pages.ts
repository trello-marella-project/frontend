import { PRIVATE_USER_PATH } from "shared/config";

export interface PageI {
  link: string;
  title: string;
}

export const pages: PageI[] = [
  {
    link: PRIVATE_USER_PATH.SPACES,
    title: "My spaces",
  },
  {
    link: PRIVATE_USER_PATH.SEARCH_SPACES,
    title: "Search spaces",
  },
  {
    link: PRIVATE_USER_PATH.PROFILE,
    title: "Profile",
  },
];
