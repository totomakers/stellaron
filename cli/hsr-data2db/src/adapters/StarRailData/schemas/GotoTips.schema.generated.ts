import * as z from "zod";

export const NameSchema = z.object({
  Hash: z.number(),
});
export type Name = z.infer<typeof NameSchema>;

export const FinishChallengeSchema = z.object({
  ID: z.string(),
  Name: NameSchema,
});
export type FinishChallenge = z.infer<typeof FinishChallengeSchema>;

export const GotoTipsSchema = z.object({
  FinishMainMission: FinishChallengeSchema,
  PlayerLevel: FinishChallengeSchema,
  WorldLevel: FinishChallengeSchema,
  FinishChallenge: FinishChallengeSchema,
});
export type GotoTips = z.infer<typeof GotoTipsSchema>;
