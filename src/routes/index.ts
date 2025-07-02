import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { usersRoutes } from "./users";

export const globalRoutes = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "Naviary API",
          version: "0.0.1",
          description: "요호호호",
        },
        tags: [
          {
            name: "User",
            description: "유저 관련 API",
          },
        ],
      },
    })
  )
  .use(usersRoutes);
