import * as z from "zod";

export const ExpTypeValueSchema = z.object({
  TypeID: z.number(),
  Level: z.number(),
  Exp: z.union([z.number(), z.null()]).optional(),
});
export type ExpTypeValue = z.infer<typeof ExpTypeValueSchema>;
