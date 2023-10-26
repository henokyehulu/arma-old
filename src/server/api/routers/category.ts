import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const categoryRouter = createTRPCRouter({
  index: publicProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),
  show: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(({ input, ctx }) => {
      return ctx.db.category.findUnique({
        where: {
          slug: input.slug,
        },
        include: {
          companies: true,
          _count: true,
        },
      });
    }),
});
