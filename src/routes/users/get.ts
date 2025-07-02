import { t } from "elysia";
import { newRouter } from "@libs/router";
import { badRequest, NaviaryError, notFound } from "../../libs/errors";

export const usersGetRoutes = newRouter()
  .state("user", {
    name: "John Doe",
  })
  .error({
    NaviaryError,
  })
  .get(
    "",
    ({ store, context }) => {
      // console.log("!!!", context.txId);
      // return {
      //   data: {
      //     user: store.user,
      //     count: 10,
      //   },
      // };
      throw notFound("server", {
        errorMessage: "client",
      });
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
      tags: ["User"],
      detail: {
        description: "유저 리스트 조회 API",
      },
    }
  );
