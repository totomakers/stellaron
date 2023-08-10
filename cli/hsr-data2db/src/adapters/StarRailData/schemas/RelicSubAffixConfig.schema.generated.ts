import * as z from "zod";

export const ValueSchema = z.object({
  Value: z.number(),
});
export type Value = z.infer<typeof ValueSchema>;

export const RelicSubAffixConfigValueSchema = z.object({
  GroupID: z.number(),
  AffixID: z.number(),
  Property: z.string(),
  BaseValue: ValueSchema,
  StepValue: ValueSchema,
  StepNum: z.number(),
});
export type RelicSubAffixConfigValue = z.infer<
  typeof RelicSubAffixConfigValueSchema
>;
