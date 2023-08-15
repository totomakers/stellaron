import * as z from "zod";

export const AttackRatioSchema = z.object({
  Value: z.number(),
});
export type AttackRatio = z.infer<typeof AttackRatioSchema>;

export const HardLevelGroupValueSchema = z.object({
  HardLevelGroup: z.number(),
  Level: z.number(),
  AttackRatio: AttackRatioSchema,
  DefenceRatio: AttackRatioSchema,
  HPRatio: AttackRatioSchema,
  SpeedRatio: AttackRatioSchema,
  StanceRatio: AttackRatioSchema,
  CombatPowerList: z.array(AttackRatioSchema),
  StatusProbability: z.union([AttackRatioSchema, z.null()]).optional(),
  StatusResistance: z.union([AttackRatioSchema, z.null()]).optional(),
});
export type HardLevelGroupValue = z.infer<typeof HardLevelGroupValueSchema>;
