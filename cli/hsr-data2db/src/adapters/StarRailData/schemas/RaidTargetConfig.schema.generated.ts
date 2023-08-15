import * as z from "zod";

export const ParamTypeSchema = z.enum(["GreaterEqual", "Less", "LessEqual"]);
export type ParamType = z.infer<typeof ParamTypeSchema>;

export const TargetTypeSchema = z.enum([
  "BattleRoundCount",
  "ClientCount",
  "DeadAvatarCount",
  "KillMonster",
  "ShieldBreakCount",
]);
export type TargetType = z.infer<typeof TargetTypeSchema>;

export const TargetNameSchema = z.object({
  Hash: z.number(),
});
export type TargetName = z.infer<typeof TargetNameSchema>;

export const ParamListSchema = z.object({
  Value: z.number(),
});
export type ParamList = z.infer<typeof ParamListSchema>;

export const RaidTargetConfigValueSchema = z.object({
  ID: z.number(),
  AbilityName: z.string(),
  ParamList: z.array(ParamListSchema),
  TargetType: TargetTypeSchema,
  ParamType: ParamTypeSchema,
  TargetParam1: z.number(),
  HintStep: z.array(z.number()),
  IsShowProgress: z.union([z.number(), z.null()]).optional(),
  RewardID: z.number(),
  TargetName: TargetNameSchema,
  TargetNameSimple: TargetNameSchema,
  IsInBattle: z.union([z.boolean(), z.null()]).optional(),
  TargetParam2: z.union([z.number(), z.null()]).optional(),
});
export type RaidTargetConfigValue = z.infer<typeof RaidTargetConfigValueSchema>;
