import * as z from "zod";

export const ItemTypeSchema = z.enum(["AvatarCard"]);
export type ItemType = z.infer<typeof ItemTypeSchema>;

export const RaritySchema = z.enum(["SuperRare", "VeryRare"]);
export type Rarity = z.infer<typeof RaritySchema>;

export const ItemSchema = z.object({
  Hash: z.number(),
});
export type Item = z.infer<typeof ItemSchema>;

export const ItemConfigAvatarValueSchema = z.object({
  ID: z.number(),
  ItemMainType: ItemTypeSchema,
  ItemSubType: ItemTypeSchema,
  InventoryDisplayTag: z.number(),
  Rarity: RaritySchema,
  ItemName: ItemSchema,
  ItemDesc: ItemSchema,
  ItemBGDesc: ItemSchema,
  ItemIconPath: z.string(),
  ItemFigureIconPath: z.string(),
  ItemCurrencyIconPath: z.string(),
  ItemAvatarIconPath: z.string(),
  PileLimit: z.number(),
  CustomDataList: z.array(z.any()),
  ReturnItemIDList: z.array(z.any()),
});
export type ItemConfigAvatarValue = z.infer<typeof ItemConfigAvatarValueSchema>;
