import * as z from "zod";

export const ActivityRewardValueSchema = z.object({
  ActivityRewardID: z.number(),
  RewardIconPath: z.string(),
  Count: z.number(),
  Reward: z.number(),
});
export type ActivityRewardValue = z.infer<typeof ActivityRewardValueSchema>;
