import * as z from "zod";

export const TreasureDungeonFloorValueSchema = z.object({
  DungeonID: z.number(),
  FloorID: z.number(),
  MapID: z.array(z.number()),
  DungeonBuffID: z.array(z.number()),
  HardLevelGroupID: z.number(),
  HardLevelList: z.array(z.number()),
  EliteGroup2: z.number(),
  AddExploreValue: z.union([z.number(), z.null()]).optional(),
});
export type TreasureDungeonFloorValue = z.infer<
  typeof TreasureDungeonFloorValueSchema
>;
