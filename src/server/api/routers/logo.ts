import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const logoRouter = createTRPCRouter({
  show: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(({ input, ctx }) => {
      return ctx.db.logo.findUnique({
        where: {
          id: input.id,
        },
        include: {
          company: true,
        },
      });
    }),
});
