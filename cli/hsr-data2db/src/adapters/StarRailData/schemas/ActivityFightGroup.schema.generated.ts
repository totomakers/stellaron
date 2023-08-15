import * as z from "zod";

export const FightStageSchema = z.object({
  Hash: z.number(),
});
export type FightStage = z.infer<typeof FightStageSchema>;

export const ActivityFightGroupValueSchema = z.object({
  ActivityFightGroupID: z.number(),
  FightStageTitle: FightStageSchema,
  FightStageDesc: FightStageSchema,
  FightStageLimitDesc: FightStageSchema,
  ActivityFightGroupIconPath: z.string(),
  PlaneID: z.number(),
  FloorID: z.number(),
  BattleAreaGroupID: z.number(),
  BattleAreaID: z.number(),
  SpecialAvatarID: z.union([z.number(), z.null()]).optional(),
});
export type ActivityFightGroupValue = z.infer<
  typeof ActivityFightGroupValueSchema
>;
