import Elysia, { t } from "elysia";

export const usersGetRoutes = new Elysia()
  .state("user", {
    name: "John Doe",
  })
  .get(
    "",
    ({ store }) => {
      return {
        data: {
          user: store.user,
          count: 10,
        },
      };
    },
    {
      response: {
        200: t.Object({
          data: t.Object({
            user: t.Object({
              name: t.String(),
            }),
            count: t.Number(),
          }),
        }),
      },
    }
  );
