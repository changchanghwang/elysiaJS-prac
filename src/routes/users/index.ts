import Elysia from "elysia";
import { usersGetRoutes } from "./get";
import { usersPostRoutes } from "./post";

export const usersRoutes = new Elysia().group("/users", (app) =>
  app.use(usersGetRoutes).use(usersPostRoutes)
);
