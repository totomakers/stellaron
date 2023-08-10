import * as z from "zod";

export const ChallengeTipSchema = z.object({
  Hash: z.number(),
});
export type ChallengeTip = z.infer<typeof ChallengeTipSchema>;

export const BoxingClubChallengeValueSchema = z.object({
  ChallengeID: z.number(),
  StageGroupList: z.array(z.number()),
  FirstPassRewardID: z.number(),
  ActivityModuleID: z.number(),
  Name: ChallengeTipSchema,
  IconPath: z.string(),
  DamageType: z.array(z.string()),
  ChallengeTurnLimit: z.number(),
  ChallengeBuff: z.number(),
  ChallengeTip: ChallengeTipSchema,
  SpecialAvatarIDList: z.array(z.number()),
  SpecialAvatarActivityModule: z.number(),
  PreChallengeID: z.union([z.number(), z.null()]).optional(),
  IsSpecialChallenge: z.union([z.boolean(), z.null()]).optional(),
});
export type BoxingClubChallengeValue = z.infer<
  typeof BoxingClubChallengeValueSchema
>;
