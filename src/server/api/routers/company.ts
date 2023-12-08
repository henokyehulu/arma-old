import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { CreateCompanySchema } from "@/types";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const companyRouter = createTRPCRouter({
  browse: publicProcedure.query(({ ctx }) => {
    return ctx.db.company.findMany({
      where: {
        status: "PUBLISHED",
      },
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
  create: publicProcedure
    .input(CreateCompanySchema)
    .mutation(async ({ input, ctx }) => {
      const company = await ctx.db.company.findFirst({
        where: {
          name: input.name,
        },
      });
      if (company)
        switch (company.status) {
          case "PUBLISHED":
            throw new TRPCError({
              code: "CONFLICT",
              message: "Company already exists.",
            });
            break;

          case "PENDING":
            throw new TRPCError({
              code: "CONFLICT",
              message: "We are reviewing this company suggestion.",
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
        return ctx.db.company.create({
          data: {
            ...input,
            logos: {
              createMany: {
                data: input.logos.map((logo) => ({
                  url: logo,
                })),
                skipDuplicates: true,
              },
            },
          },
        });
    }),
});
