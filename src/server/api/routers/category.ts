import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { CreateCategorySchema } from "@/types";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const categoryRouter = createTRPCRouter({
  getAllForCategories: publicProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany({
      where: { status: "PUBLISHED" },
      orderBy: {
        name: "asc",
      },
      include: {
        companies: {
          where: {
            status: "PUBLISHED",
          },
          select: {
            logos: {
              select: {
                url: true,
              },
              take: 1,
              orderBy: {
                createdAt: "desc",
              },
            },
          },
          take: 1,
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  }),
  index: publicProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { name: "asc" },
      include: {
        _count: {
          select: {
            companies: {
              where: {
                status: "PUBLISHED",
              },
            },
          },
        },
      },
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
            where: {
              status: "PUBLISHED",
            },
            include: {
              logos: true,
            },
          },
        },
      });
    }),
  create: publicProcedure
    .input(CreateCategorySchema)
    .mutation(async ({ input, ctx }) => {
      const category = await ctx.db.category.findUnique({
        where: {
          name: input.name,
        },
      });
      if (category)
        switch (category.status) {
          case "PUBLISHED":
            throw new TRPCError({
              code: "CONFLICT",
              message: "Category already exists.",
            });
            break;

          case "PENDING":
            throw new TRPCError({
              code: "CONFLICT",
              message: "We are reviewing this category suggestion.",
            });

            break;

          default:
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: "An error has occured please try again later.",
            });
            break;
        }
      else
        return ctx.db.category.create({
          data: input,
        });
    }),
});
