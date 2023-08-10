import * as z from "zod";

export const TypeSchema = z.enum([
  "BaseStatsIncPercent",
  "GainFunds",
  "StatsNeedDecAbs",
  "StatsNeedDecPercent",
]);
export type Type = z.infer<typeof TypeSchema>;

export const SkillDescSchema = z.object({
  Hash: z.number(),
});
export type SkillDesc = z.infer<typeof SkillDescSchema>;

export const MuseumItemSkillConfigValueSchema = z.object({
  ItemSkillID: z.number(),
  Type: TypeSchema,
  TypeParameter: z.array(z.number()),
  SkillDesc: SkillDescSchema,
});
export type MuseumItemSkillConfigValue = z.infer<
  typeof MuseumItemSkillConfigValueSchema
>;
