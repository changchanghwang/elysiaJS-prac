import Elysia, { t } from "elysia";

export const usersPostRoutes = new Elysia().post(
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
  }
);
