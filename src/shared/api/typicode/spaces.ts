import { api } from "./base";
import { Response } from "../types";
import { routes } from "../routes";

export interface SpacesParamsI {
  page?: number;
  limit?: number;
}

export const getYoursSpaces = (params: SpacesParamsI) =>
  api.get<Response.YoursSpaces>(routes.spacesYours, { params });

export const getRecentSpaces = (params: SpacesParamsI) =>
  api.get<Response.RecentSpaces>(routes.spacesRecent, { params });

export const getPermittedSpaces = (params: SpacesParamsI) =>
  api.get<Response.PermittedSpaces>(routes.spacesPermitted, { params });
