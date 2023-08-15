import * as z from "zod";

export const FarmTypeSchema = z.enum(["COCOON", "COCOON2", "ELEMENT", "RELIC"]);
export type FarmType = z.infer<typeof FarmTypeSchema>;

export const TypeSchema = z.enum([
  "CHALLENGE_ENTRANCE",
  "RAID_ENTRANCE",
  "ROGUE_ENTRANCE",
  "WORLD_SHOP_ENTRANCE",
]);
export type Type = z.infer<typeof TypeSchema>;

export const DisplayItemListSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.union([z.number(), z.null()]).optional(),
});
export type DisplayItemList = z.infer<typeof DisplayItemListSchema>;

export const DescSchema = z.object({
  Hash: z.number(),
});
export type Desc = z.infer<typeof DescSchema>;

export const MappingInfoValueSchema = z.object({
  ID: z.number(),
  WorldLevel: z.number(),
  IsTeleport: z.union([z.boolean(), z.null()]).optional(),
  IsShowInFog: z.union([z.boolean(), z.null()]).optional(),
  PlaneID: z.union([z.number(), z.null()]).optional(),
  FloorID: z.union([z.number(), z.null()]).optional(),
  GroupID: z.union([z.number(), z.null()]).optional(),
  ConfigID: z.union([z.number(), z.null()]).optional(),
  InitialEnable: z.union([z.boolean(), z.null()]).optional(),
  Name: DescSchema,
  Desc: DescSchema,
  ShowMonsterList: z.array(z.number()),
  DisplayItemList: z.array(DisplayItemListSchema),
  FarmType: z.union([FarmTypeSchema, z.null()]).optional(),
  Type: z.union([TypeSchema, z.null()]).optional(),
  EntranceID: z.union([z.number(), z.null()]).optional(),
});
export type MappingInfoValue = z.infer<typeof MappingInfoValueSchema>;
