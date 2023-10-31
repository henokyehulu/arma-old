import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { SCreateCategory } from "@/types/form";
import { z } from "zod";

export const categoryRouter = createTRPCRouter({
  index: publicProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany({
      where: { status: "PUBLISHED" },
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
          status: {
            in: ["PUBLISHED", "PENDING"],
          },
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
  create: publicProcedure.input(SCreateCategory).mutation(({ input, ctx }) => {
    return ctx.db.category.create({
      data: { ...input },
    });
  }),
});
