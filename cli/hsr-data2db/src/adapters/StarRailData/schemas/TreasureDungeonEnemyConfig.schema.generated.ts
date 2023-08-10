import * as z from "zod";

export const TreasureDungeonEnemyConfigValueSchema = z.object({
  EnemyID: z.number(),
  EnemyLevel: z.number(),
  StageEventList: z.array(z.number()),
  SpecialMonsterID: z.union([z.number(), z.null()]).optional(),
});
export type TreasureDungeonEnemyConfigValue = z.infer<
  typeof TreasureDungeonEnemyConfigValueSchema
>;
