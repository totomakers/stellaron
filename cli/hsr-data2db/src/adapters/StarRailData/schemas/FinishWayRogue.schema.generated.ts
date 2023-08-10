import * as z from "zod";

export const FinishTypeSchema = z.enum([
  "FinishMission",
  "PlayerLevel",
  "RogueAeonLevel",
  "RogueFinishUnlock",
  "RogueKillMonster",
  "RogueKillMonsterWithRoomLevel",
  "RoguePassAreaProgress",
  "RogueTalentEnable",
  "RogueUnlockBuff",
  "WorldLevel",
]);
export type FinishType = z.infer<typeof FinishTypeSchema>;

export const ParamTypeSchema = z.enum([
  "Equal",
  "EqualOrZeroAny",
  "ListContain",
  "NoPara",
]);
export type ParamType = z.infer<typeof ParamTypeSchema>;

export const FinishWayRogueValueSchema = z.object({
  ID: z.number(),
  FinishType: FinishTypeSchema,
  ParamType: ParamTypeSchema,
  ParamInt1: z.union([z.number(), z.null()]).optional(),
  ParamStr1: z.string(),
  ParamIntList: z.array(z.number()),
  ParamItemList: z.array(z.any()),
  Progress: z.number(),
  IsBackTrack: z.union([z.boolean(), z.null()]).optional(),
  ParamInt2: z.union([z.number(), z.null()]).optional(),
  ParamInt3: z.union([z.number(), z.null()]).optional(),
});
export type FinishWayRogueValue = z.infer<typeof FinishWayRogueValueSchema>;
