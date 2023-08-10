import * as z from "zod";

export const FgbojaiofijSchema = z.enum([
  "AttackAddedRatio",
  "AttackDelta",
  "BreakDamageAddedRatioBase",
  "CriticalChanceBase",
  "CriticalDamageBase",
  "DefenceAddedRatio",
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
  "ThunderAddedRatio",
  "WindAddedRatio",
]);
export type Fgbojaiofij = z.infer<typeof FgbojaiofijSchema>;

export const LgkgomnmbahSchema = z.object({
  Value: z.number(),
});
export type Lgkgomnmbah = z.infer<typeof LgkgomnmbahSchema>;

export const MainValueSchema = z.object({
  FGBOJAIOFIJ: FgbojaiofijSchema,
  LGKGOMNMBAH: LgkgomnmbahSchema,
});
export type MainValue = z.infer<typeof MainValueSchema>;

export const SpecialAvatarRelicMainValueValueSchema = z.object({
  RelicMainValueType: z.number(),
  MainValue: z.array(MainValueSchema),
});
export type SpecialAvatarRelicMainValueValue = z.infer<
  typeof SpecialAvatarRelicMainValueValueSchema
>;
