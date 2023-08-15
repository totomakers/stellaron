import * as z from "zod";

export const LevelLockDescSchema = z.object({
  Hash: z.number(),
});
export type LevelLockDesc = z.infer<typeof LevelLockDescSchema>;

export const RogueChallengeLevelValueSchema = z.object({
  LevelID: z.number(),
  ActivityModuleID: z.number(),
  LevelName: LevelLockDescSchema,
  SupportUnlockQuest: z.number(),
  LevelIcon: z.string(),
  TypeIcon1: z.string(),
  TypeIcon2: z.string(),
  SupportUnlockHint: LevelLockDescSchema,
  LevelLockDesc: LevelLockDescSchema,
});
export type RogueChallengeLevelValue = z.infer<
  typeof RogueChallengeLevelValueSchema
>;
