import * as z from "zod";

export const InteractCostTypeSchema = z.enum(["CheckItem", "CostItem"]);
export type InteractCostType = z.infer<typeof InteractCostTypeSchema>;

export const ItemCostListSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
});
export type ItemCostList = z.infer<typeof ItemCostListSchema>;

export const InteractDescSchema = z.object({
  Hash: z.number(),
});
export type InteractDesc = z.infer<typeof InteractDescSchema>;

export const InteractConfigValueSchema = z.object({
  InteractID: z.number(),
  TargetState: z.union([z.null(), z.string()]).optional(),
  ItemCostList: z.array(ItemCostListSchema),
  InteractDesc: InteractDescSchema,
  SrcState: z.union([z.null(), z.string()]).optional(),
  IsEvent: z.union([z.boolean(), z.null()]).optional(),
  InteractCostType: z.union([InteractCostTypeSchema, z.null()]).optional(),
});
export type InteractConfigValue = z.infer<typeof InteractConfigValueSchema>;
