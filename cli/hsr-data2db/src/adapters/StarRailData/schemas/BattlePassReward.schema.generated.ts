import * as z from "zod";

export const BattlePassRewardValueSchema = z.object({
  ID: z.number(),
  RewardItem: z.number(),
  RewardIcon: z.string(),
  NumShow: z.union([z.boolean(), z.null()]).optional(),
});
export type BattlePassRewardValue = z.infer<typeof BattlePassRewardValueSchema>;
