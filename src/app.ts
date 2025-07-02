import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { globalRoutes } from "./routes";

const app = new Elysia().use(globalRoutes).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
