import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { usersRoutes } from "./users";

export const globalRoutes = new Elysia().use(swagger()).use(usersRoutes);
