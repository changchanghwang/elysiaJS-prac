import Elysia from "elysia";
import { dependencyInjector } from "@plugins";
import { NaviaryError } from "../errors";

export function newRouter() {
  return new Elysia()
    .use(dependencyInjector)
    .onAfterResponse(({ context }) => {
      context.dispose();
    })
    .error({
      NaviaryError,
    })
    .onError(({ code, error }) => {
      if (code === "NaviaryError") {
        console.log("Error: ", error.stack);
        return {
          error,
        };
      }

      return {
        status: 500,
        body: {
          message: "Internal Server Error",
        },
      };
    });
}
