import * as z from "zod";

export const FgbojaiofijSchema = z.enum([
  "AttackAddedRatio",
  "AttackDelta",
  "BreakDamageAddedRatioBase",
  "CriticalChanceBase",
  "CriticalDamageBase",
  "DefenceAddedRatio",
  "DefenceDelta",
  "FireAddedRatio",
  "HealRatioBase",
  "HPAddedRatio",
  "HPDelta",
  "IceAddedRatio",
  "ImaginaryAddedRatio",
  "PhysicalAddedRatio",
  "QuantumAddedRatio",
  "SPRatioBase",
  "SpeedDelta",
  "StatusProbabilityBase",
  "StatusResistanceBase",
  "ThunderAddedRatio",
  "WindAddedRatio",
]);
export type Fgbojaiofij = z.infer<typeof FgbojaiofijSchema>;

export const LgkgomnmbahSchema = z.object({
  Value: z.number(),
});
export type Lgkgomnmbah = z.infer<typeof LgkgomnmbahSchema>;

export const SubValueSchema = z.object({
  FGBOJAIOFIJ: FgbojaiofijSchema,
  LGKGOMNMBAH: z.union([LgkgomnmbahSchema, z.null()]).optional(),
});
export type SubValue = z.infer<typeof SubValueSchema>;

export const SpecialAvatarRelicSubValueValueSchema = z.object({
  RelicSubValueType: z.number(),
  SubValue: z.array(SubValueSchema),
});
export type SpecialAvatarRelicSubValueValue = z.infer<
  typeof SpecialAvatarRelicSubValueValueSchema
>;
