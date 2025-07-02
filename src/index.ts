import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
  .use(swagger())
  .state("user", {
    name: "John Doe",
  })
  .get("/", ({ store }) => {
    return store;
  })
  .post(
    "/hello",
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
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
