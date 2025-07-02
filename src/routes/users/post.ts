import { t } from "elysia";
import { newRouter } from "@libs/router";

export const usersPostRoutes = newRouter().post(
  "",
  ({ body }) => {
    return {
      message: `Hello, ${body.name}!`,
    };
  },
  {
    body: t.Object({
      name: t.String(),
    }),
    tags: ["User"],
  }
);
