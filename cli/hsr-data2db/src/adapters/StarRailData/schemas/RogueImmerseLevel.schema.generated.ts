import * as z from "zod";

export const BgDescSchema = z.object({
  Hash: z.number(),
});
export type BgDesc = z.infer<typeof BgDescSchema>;

export const RogueImmerseLevelValueSchema = z.object({
  Level: z.number(),
  UnlockID: z.number(),
  BGDesc: BgDescSchema,
  EffectTitle1: BgDescSchema,
  EffectDesc1: BgDescSchema,
  EffectTitle2: BgDescSchema,
  EffectDesc2: BgDescSchema,
  LevelUpTips1: BgDescSchema,
  LevelUpTips2: BgDescSchema,
});
export type RogueImmerseLevelValue = z.infer<
  typeof RogueImmerseLevelValueSchema
>;
