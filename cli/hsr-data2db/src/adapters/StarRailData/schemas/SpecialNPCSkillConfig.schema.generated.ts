import * as z from "zod";

export const SimpleSkillDescSchema = z.object({
  Hash: z.number(),
});
export type SimpleSkillDesc = z.infer<typeof SimpleSkillDescSchema>;

export const BpNeedSchema = z.object({
  Value: z.number(),
});
export type BpNeed = z.infer<typeof BpNeedSchema>;

export const The1Schema = z.object({
  SkillID: z.number(),
  SkillName: SimpleSkillDescSchema,
  SkillTag: SimpleSkillDescSchema,
  SkillTypeDesc: SimpleSkillDescSchema,
  Level: z.number(),
  MaxLevel: z.number(),
  SkillTriggerKey: z.string(),
  SkillIcon: z.string(),
  UltraSkillIcon: z.string(),
  LevelUpCostList: z.array(z.any()),
  SkillDesc: SimpleSkillDescSchema,
  SimpleSkillDesc: SimpleSkillDescSchema,
  RatedSkillTreeID: z.array(z.any()),
  RatedRankID: z.array(z.any()),
  ExtraEffectIDList: z.array(z.any()),
  SimpleExtraEffectIDList: z.array(z.any()),
  ShowStanceList: z.array(BpNeedSchema),
  ShowDamageList: z.array(z.any()),
  ShowHealList: z.array(z.any()),
  InitCoolDown: z.number(),
  CoolDown: z.number(),
  SPMultipleRatio: BpNeedSchema,
  BPNeed: BpNeedSchema,
  SkillNeed: SimpleSkillDescSchema,
  DelayRatio: BpNeedSchema,
  ParamList: z.array(BpNeedSchema),
  SimpleParamList: z.array(BpNeedSchema),
  StanceDamageType: z.string(),
  AttackType: z.string(),
  SkillEffect: z.string(),
});
export type The1 = z.infer<typeof The1Schema>;

export const SpecialNpcSkillConfigValueSchema = z.object({
  "1": The1Schema,
});
export type SpecialNpcSkillConfigValue = z.infer<
  typeof SpecialNpcSkillConfigValueSchema
>;
