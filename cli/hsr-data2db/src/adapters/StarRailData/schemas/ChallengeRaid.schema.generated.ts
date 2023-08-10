import * as z from "zod";

export const ChallengeRaidValueSchema = z.object({
  ChallengeID: z.number(),
  MonsterList: z.array(z.number()),
  ScoringGroupID: z.number(),
  IconPath: z.string(),
});
export type ChallengeRaidValue = z.infer<typeof ChallengeRaidValueSchema>;
