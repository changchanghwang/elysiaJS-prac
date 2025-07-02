import { randomUUIDv7 } from "bun";
import { Elysia } from "elysia";
import { Context } from "../libs/ddd/context";

export const dependencyInjector = new Elysia({
  name: "dependency-injector",
}).derive({ as: "global" }, ({ request }) => {
  const txId = request.headers.get("x-request-id") || randomUUIDv7();
  const context = Context.of(txId);

  return {
    context,
  };
});
