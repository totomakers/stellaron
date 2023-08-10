import * as z from "zod";

export const SSchema = z.object({
  GroupType: z.string(),
  MonsterRare: z.string(),
});
export type S = z.infer<typeof SSchema>;

export const PreparatorySchema = z.object({
  S: SSchema,
  A: ASchema,
  B: ASchema,
});
export type Preparatory = z.infer<typeof PreparatorySchema>;

export const ASchema = z.object({
  GroupType: z.string(),
  MonsterRare: z.string(),
  Weight: z.number(),
});
export type A = z.infer<typeof ASchema>;

export const CommonSchema = z.object({
  S: ASchema,
  A: ASchema,
  B: ASchema,
});
export type Common = z.infer<typeof CommonSchema>;

export const ActivityRareConfigPunkLordSchema = z.object({
  Common: CommonSchema,
  Preparatory: PreparatorySchema,
});
export type ActivityRareConfigPunkLord = z.infer<
  typeof ActivityRareConfigPunkLordSchema
>;
