import { api } from "./base";
import { Request, Response } from "../types";
import { routes } from "../routes";

export const loginUser = (values: Request.Login) =>
  api.post<Response.Login>(routes.login, values);

export const registerUser = (values: Request.Register) =>
  api.post(routes.register, values);
