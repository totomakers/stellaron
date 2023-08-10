import * as z from "zod";

export const RogueChallengeScoreValueSchema = z.object({
  Grade: z.number(),
  Score: z.number(),
  ActivityRankID: z.number(),
});
export type RogueChallengeScoreValue = z.infer<
  typeof RogueChallengeScoreValueSchema
>;
