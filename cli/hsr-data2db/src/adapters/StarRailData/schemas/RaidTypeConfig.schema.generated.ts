import * as z from "zod";

export const PunkLordSchema = z.object({
  RaidType: z.string(),
  FinishCountDown: z.number(),
});
export type PunkLord = z.infer<typeof PunkLordSchema>;

export const MissionSchema = z.object({
  RaidType: z.string(),
  FinishType: z.string(),
});
export type Mission = z.infer<typeof MissionSchema>;

export const EquilibriumTrialSchema = z.object({
  RaidType: z.string(),
  FinishType: z.string(),
  FinishCountDown: z.number(),
});
export type EquilibriumTrial = z.infer<typeof EquilibriumTrialSchema>;

export const ChallengeSchema = z.object({
  RaidType: z.string(),
});
export type Challenge = z.infer<typeof ChallengeSchema>;

export const RaidTypeConfigSchema = z.object({
  Mission: MissionSchema,
  Relic: ChallengeSchema,
  Challenge: ChallengeSchema,
  TreasureChallenge: MissionSchema,
  PunkLord: PunkLordSchema,
  SaveMission: ChallengeSchema,
  Trial: ChallengeSchema,
  EquilibriumTrial: EquilibriumTrialSchema,
});
export type RaidTypeConfig = z.infer<typeof RaidTypeConfigSchema>;
