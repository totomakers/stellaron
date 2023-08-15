import * as z from "zod";

export const PlayerReturnLoginRewardValueSchema = z.object({
  ID: z.number(),
  LoginReward: z.number(),
  FirstWordText: z.string(),
});
export type PlayerReturnLoginRewardValue = z.infer<
  typeof PlayerReturnLoginRewardValueSchema
>;
