import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const companyRouter = createTRPCRouter({
  index: publicProcedure.query(({ ctx }) => {
    return ctx.db.company.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),
  browse: publicProcedure.query(({ ctx }) => {
    return ctx.db.company.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        logos: {
          orderBy: {
            createdAt: "desc",
          },
          take: 4,
        },
      },
    });
  }),
  show: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(({ input, ctx }) => {
      return ctx.db.company.findUnique({
        where: {
          id: input.id,
        },
        include: {
          category: true,
          logos: true,
        },
      });
    }),
});
