import * as z from "zod";

export const DifficultyLevelSchema = z.enum(["Easy", "Hard", "Normal"]);
export type DifficultyLevel = z.infer<typeof DifficultyLevelSchema>;

export const HardSchema = z.object({
  ActivityFightGroupID: z.number(),
  DifficultyLevel: DifficultyLevelSchema,
  FightEventID: z.number(),
  RewardID: z.number(),
  RewardWave: z.union([z.number(), z.null()]).optional(),
  RewardWave2: z.union([z.number(), z.null()]).optional(),
  TotalWave: z.union([z.number(), z.null()]).optional(),
  RewardQuest: z.union([z.number(), z.null()]).optional(),
  RoundsLimit: z.number(),
  OffsetLevel: z.number(),
});
export type Hard = z.infer<typeof HardSchema>;

export const EasySchema = z.object({
  ActivityFightGroupID: z.number(),
  DifficultyLevel: DifficultyLevelSchema,
  FightEventID: z.number(),
  RewardID: z.number(),
  RewardWave: z.union([z.number(), z.null()]).optional(),
  RoundsLimit: z.number(),
  OffsetLevel: z.number(),
});
export type Easy = z.infer<typeof EasySchema>;

export const ActivityFightConfigValueSchema = z.object({
  Easy: EasySchema,
  Normal: EasySchema,
  Hard: HardSchema,
});
export type ActivityFightConfigValue = z.infer<
  typeof ActivityFightConfigValueSchema
>;
