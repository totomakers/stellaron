import * as z from "zod";

export const EffectDescParamListSchema = z.object({
  Value: z.number(),
});
export type EffectDescParamList = z.infer<typeof EffectDescParamListSchema>;

export const EffectSchema = z.object({
  Hash: z.number(),
});
export type Effect = z.infer<typeof EffectSchema>;

export const CostSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
});
export type Cost = z.infer<typeof CostSchema>;

export const RogueTalentValueSchema = z.object({
  TalentID: z.number(),
  IsImportant: z.union([z.boolean(), z.null()]).optional(),
  NextTalentIDList: z.array(z.number()),
  Cost: z.array(CostSchema),
  UnlockIDList: z.array(z.number()),
  Icon: z.string(),
  EffectTag: EffectSchema,
  EffectTitle: EffectSchema,
  EffectDesc: EffectSchema,
  EffectDescParamList: z.array(EffectDescParamListSchema),
});
export type RogueTalentValue = z.infer<typeof RogueTalentValueSchema>;
