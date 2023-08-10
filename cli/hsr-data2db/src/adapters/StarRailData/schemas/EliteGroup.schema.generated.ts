import * as z from "zod";

export const RatioSchema = z.object({
  Value: z.number(),
});
export type Ratio = z.infer<typeof RatioSchema>;

export const EliteGroupValueSchema = z.object({
  EliteGroup: z.number(),
  AttackRatio: RatioSchema,
  DefenceRatio: RatioSchema,
  HPRatio: RatioSchema,
  SpeedRatio: RatioSchema,
  StanceRatio: RatioSchema,
});
export type EliteGroupValue = z.infer<typeof EliteGroupValueSchema>;
