import * as z from "zod";

export const BaseValueSchema = z.object({
  Value: z.number(),
});
export type BaseValue = z.infer<typeof BaseValueSchema>;

export const RelicMainAffixConfigValueSchema = z.object({
  GroupID: z.number(),
  AffixID: z.number(),
  Property: z.string(),
  BaseValue: BaseValueSchema,
  LevelAdd: BaseValueSchema,
  IsAvailable: z.boolean(),
});
export type RelicMainAffixConfigValue = z.infer<
  typeof RelicMainAffixConfigValueSchema
>;
