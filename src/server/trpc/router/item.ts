import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export default router({
    get: publicProcedure
        .input(z.object({id: z.string()}))
        .query(({ctx, input}) => ctx.prisma.item.findUnique({where: {id: input.id}})),

    hello: publicProcedure
      .input(z.object({ text: z.string().nullish() }).nullish())
      .query(({ input }) => ({
        greeting: `Hello ${input?.text ?? "world"}`,
      })),
    getAll: publicProcedure.query(({ ctx }) => ctx.prisma.example.findMany()),
  });