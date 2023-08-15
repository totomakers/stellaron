import * as z from "zod";

export const RelicExpTypeValueSchema = z.object({
  TypeID: z.number(),
  Level: z.number(),
  Exp: z.union([z.number(), z.null()]).optional(),
});
export type RelicExpTypeValue = z.infer<typeof RelicExpTypeValueSchema>;
