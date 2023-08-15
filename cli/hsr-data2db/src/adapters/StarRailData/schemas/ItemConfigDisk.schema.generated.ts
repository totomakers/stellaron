import * as z from "zod";

export const ItemIconPathSchema = z.enum(["SpriteOutput/ItemIcon/210001.png"]);
export type ItemIconPath = z.infer<typeof ItemIconPathSchema>;

export const ItemFigureIconPathSchema = z.enum([
  "SpriteOutput/ItemFigures/210001.png",
]);
export type ItemFigureIconPath = z.infer<typeof ItemFigureIconPathSchema>;

export const ItemMainTypeSchema = z.enum(["Usable"]);
export type ItemMainType = z.infer<typeof ItemMainTypeSchema>;

export const ItemSubTypeSchema = z.enum(["MusicAlbum"]);
export type ItemSubType = z.infer<typeof ItemSubTypeSchema>;

export const RaritySchema = z.enum(["Rare"]);
export type Rarity = z.infer<typeof RaritySchema>;

export const ItemSchema = z.object({
  Hash: z.number(),
});
export type Item = z.infer<typeof ItemSchema>;

export const ItemConfigDiskValueSchema = z.object({
  ID: z.number(),
  ItemMainType: ItemMainTypeSchema,
  ItemSubType: ItemSubTypeSchema,
  InventoryDisplayTag: z.number(),
  Rarity: RaritySchema,
  PurposeType: z.number(),
  isVisible: z.boolean(),
  ItemName: ItemSchema,
  ItemDesc: ItemSchema,
  ItemBGDesc: ItemSchema,
  ItemIconPath: ItemIconPathSchema,
  ItemFigureIconPath: ItemFigureIconPathSchema,
  ItemCurrencyIconPath: ItemIconPathSchema,
  ItemAvatarIconPath: z.string(),
  PileLimit: z.number(),
  CustomDataList: z.array(z.any()),
  ReturnItemIDList: z.array(z.any()),
});
export type ItemConfigDiskValue = z.infer<typeof ItemConfigDiskValueSchema>;
