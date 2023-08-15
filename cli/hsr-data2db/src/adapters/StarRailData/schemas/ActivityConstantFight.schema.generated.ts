import * as z from "zod";

export const ActivityFightSchema = z.object({
  ConstValueName: z.string(),
  Value: z.string(),
});
export type ActivityFight = z.infer<typeof ActivityFightSchema>;

export const ActivityConstantFightSchema = z.object({
  ActivityFight_Unlock_Mission_Goto: ActivityFightSchema,
  ActivityFight_Unlock_Mission_Complete: ActivityFightSchema,
  ActivityFight_Quest_Reward: ActivityFightSchema,
  ActivityFight_Quest_Mission_Message: ActivityFightSchema,
  ActivityFight_Quest_Message: ActivityFightSchema,
  ActivityFight_MonsterBoostWave: ActivityFightSchema,
  ActivityFight_MonsterBoostToastTime: ActivityFightSchema,
});
export type ActivityConstantFight = z.infer<typeof ActivityConstantFightSchema>;
