import * as z from "zod";

export const TabNameSchema = z.object({
  Hash: z.number(),
});
export type TabName = z.infer<typeof TabNameSchema>;

export const InventoryTabDataValueSchema = z.object({
  ID: z.number(),
  TabName: TabNameSchema,
  IconImagePath: z.string(),
  DisplayInventoryType: z.string(),
  DisplayItemSubType: z.array(z.string()),
  InventoryDisplayTag: z.number(),
  TabSortWeight: z.number(),
  ItemSortTypeList: z.array(z.string()),
  SellType: z.union([z.null(), z.string()]).optional(),
  DisplayCapacityLimit: z.union([z.number(), z.null()]).optional(),
});
export type InventoryTabDataValue = z.infer<typeof InventoryTabDataValueSchema>;
