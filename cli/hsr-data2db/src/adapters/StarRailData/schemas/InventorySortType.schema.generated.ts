import * as z from "zod";

export const SortTypeNameSchema = z.object({
  Hash: z.number(),
});
export type SortTypeName = z.infer<typeof SortTypeNameSchema>;

export const InventorySortTypeValueSchema = z.object({
  SortType: z.string(),
  SortTypeName: SortTypeNameSchema,
});
export type InventorySortTypeValue = z.infer<
  typeof InventorySortTypeValueSchema
>;
