import * as z from "zod";

export const DescSchema = z.object({
  Hash: z.number(),
});
export type Desc = z.infer<typeof DescSchema>;

export const TreasureDungeonConfigValueSchema = z.object({
  DungeonID: z.number(),
  GroupID: z.number(),
  InitialExplore: z.number(),
  MaxExplore: z.number(),
  GridExploreCost: z.number(),
  ExploreSubHpRatio: z.number(),
  SpecialAvatarIDList: z.array(z.number()),
  Name: DescSchema,
  Desc: DescSchema,
  ImgPath: z.string(),
  EntranceIconPath: z.string(),
  DisplayMonsterIDList: z.array(z.number()),
  DisplayEventID: z.number(),
  RecommendNature: z.array(z.string()),
  PreDungeonID: z.union([z.number(), z.null()]).optional(),
  UnlockID: z.union([z.number(), z.null()]).optional(),
  GridPrefabType: z.union([z.number(), z.null()]).optional(),
});
export type TreasureDungeonConfigValue = z.infer<
  typeof TreasureDungeonConfigValueSchema
>;
