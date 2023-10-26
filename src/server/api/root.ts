import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { companyRouter } from "./routers/company";
import { categoryRouter } from "./routers/category";
import { logoRouter } from "./routers/logo";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  company: companyRouter,
  category: categoryRouter,
  logo: logoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
