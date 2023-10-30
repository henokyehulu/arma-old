import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const categoryRouter = createTRPCRouter({
  index: publicProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany({
      orderBy: { name: "asc" },
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
          companies: {
            include: {
              logos: true,
            },
          },
          _count: true,
        },
      });
    }),
});
