import * as z from "zod";

export const ItemMainTypeSchema = z.enum([
  "Display",
  "Material",
  "Mission",
  "Usable",
  "Virtual",
]);
export type ItemMainType = z.infer<typeof ItemMainTypeSchema>;

export const TypeSchema = z.enum([
  "Book",
  "ChatBubble",
  "Food",
  "ForceOpitonalGift",
  "Formula",
  "Gift",
  "Material",
  "Mission",
  "MuseumExhibit",
  "MuseumStuff",
  "RelicRarityShowOnly",
  "RelicSetShowOnly",
  "Treasure",
  "Virtual",
]);
export type Type = z.infer<typeof TypeSchema>;

export const RaritySchema = z.enum([
  "Normal",
  "NotNormal",
  "Rare",
  "SuperRare",
  "VeryRare",
]);
export type Rarity = z.infer<typeof RaritySchema>;

export const SellTypeSchema = z.enum(["Destroy"]);
export type SellType = z.infer<typeof SellTypeSchema>;

export const ItemSchema = z.object({
  Hash: z.number(),
});
export type Item = z.infer<typeof ItemSchema>;

export const ItemConfigValueSchema = z.object({
  ID: z.number(),
  ItemMainType: ItemMainTypeSchema,
  ItemSubType: TypeSchema,
  InventoryDisplayTag: z.number(),
  Rarity: RaritySchema,
  PurposeType: z.union([z.number(), z.null()]).optional(),
  ItemName: ItemSchema,
  ItemDesc: ItemSchema,
  ItemBGDesc: ItemSchema,
  ItemIconPath: z.string(),
  ItemFigureIconPath: z.string(),
  ItemCurrencyIconPath: z.string(),
  ItemAvatarIconPath: z.string(),
  PileLimit: z.number(),
  CustomDataList: z.array(z.number()),
  ReturnItemIDList: z.array(z.any()),
  isVisible: z.union([z.boolean(), z.null()]).optional(),
  UseType: z.union([TypeSchema, z.null()]).optional(),
  UseDataID: z.union([z.number(), z.null()]).optional(),
  ItemGroup: z.union([z.number(), z.null()]).optional(),
  SellType: z.union([SellTypeSchema, z.null()]).optional(),
  IsShowRedDot: z.union([z.boolean(), z.null()]).optional(),
  IsAutoUse: z.union([z.boolean(), z.null()]).optional(),
});
export type ItemConfigValue = z.infer<typeof ItemConfigValueSchema>;
