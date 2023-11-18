// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import example from "./example";
import auth from "./auth";
import item from "./item";

export const appRouter = router({
  example,
  auth,
  item,
});

// export type definition of API
export type AppRouter = typeof appRouter;
