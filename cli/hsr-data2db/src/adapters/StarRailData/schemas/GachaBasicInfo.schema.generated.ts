import * as z from "zod";

export const GachaBarSchema = z.enum([
  "CharacterGachaPage",
  "LightconeGachaPage",
  "StandardGachaPage",
]);
export type GachaBar = z.infer<typeof GachaBarSchema>;

export const GachaTypeSchema = z.enum([
  "AvatarUp",
  "Newbie",
  "Normal",
  "WeaponUp",
]);
export type GachaType = z.infer<typeof GachaTypeSchema>;

export const PoolDescSchema = z.object({
  Hash: z.number(),
});
export type PoolDesc = z.infer<typeof PoolDescSchema>;

export const BuyPosSchema = z.object({
  ShopID: z.number(),
  ShopGoodID: z.number(),
});
export type BuyPos = z.infer<typeof BuyPosSchema>;

export const GachaBasicInfoValueSchema = z.object({
  GachaID: z.number(),
  GachaType: GachaTypeSchema,
  SortID: z.number(),
  StartTime: z.string(),
  EndTime: z.string(),
  PrefabPath: z.string(),
  ItemCosume: z.number(),
  ItemPrice: z.number(),
  DiamondID: z.number(),
  PoolName: PoolDescSchema,
  PoolDesc: PoolDescSchema,
  PoolLabelIcon: z.string(),
  PoolLabelIconSelected: z.string(),
  GachaBar: GachaBarSchema,
  BuyPos: BuyPosSchema,
  TypeTitle: PoolDescSchema,
  UpPropability: z.union([z.number(), z.null()]).optional(),
});
export type GachaBasicInfoValue = z.infer<typeof GachaBasicInfoValueSchema>;
