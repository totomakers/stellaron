import * as z from "zod";

export const DescSchema = z.object({
  Hash: z.number(),
});
export type Desc = z.infer<typeof DescSchema>;

export const ItemComefromValueSchema = z.object({
  ID: z.number(),
  ComefromID: z.number(),
  Sort: z.number(),
  Desc: DescSchema,
  GotoID: z.union([z.number(), z.null()]).optional(),
  GotoParam: z.array(z.number()),
  NPCMonsterTrackID: z.union([z.number(), z.null()]).optional(),
});
export type ItemComefromValue = z.infer<typeof ItemComefromValueSchema>;
