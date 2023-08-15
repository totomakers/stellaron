import * as z from "zod";

export const AttackTypeSchema = z.enum([
  "BPSkill",
  "Maze",
  "MazeNormal",
  "Normal",
  "Ultra",
]);
export type AttackType = z.infer<typeof AttackTypeSchema>;

export const SkillEffectSchema = z.enum([
  "AoEAttack",
  "Blast",
  "Enhance",
  "Impair",
  "MazeAttack",
  "SingleAttack",
  "Support",
]);
export type SkillEffect = z.infer<typeof SkillEffectSchema>;

export const SkillTriggerKeySchema = z.enum([
  "",
  "Skill01",
  "Skill02",
  "Skill03",
  "Skill11",
  "Skill12",
  "Skill13",
  "Skill21",
  "SkillMaze",
  "SkillP01",
]);
export type SkillTriggerKey = z.infer<typeof SkillTriggerKeySchema>;

export const StanceDamageTypeSchema = z.enum([
  "Ice",
  "Imaginary",
  "Quantum",
  "Thunder",
  "Wind",
]);
export type StanceDamageType = z.infer<typeof StanceDamageTypeSchema>;

export const UltraSkillIconSchema = z.enum([
  "",
  "SpriteOutput/SkillIcons/1005/SkillIcon_1005_Ultra_on.png",
  "SpriteOutput/SkillIcons/1006/SkillIcon_1006_Ultra_on.png",
  "SpriteOutput/SkillIcons/1205/SkillIcon_1205_Ultra_on.png",
  "SpriteOutput/SkillIcons/1212/SkillIcon_1212_Ultra_on.png",
  "SpriteOutput/SkillIcons/1213/SkillIcon_1213_Ultra_on.png",
]);
export type UltraSkillIcon = z.infer<typeof UltraSkillIconSchema>;

export const SimpleSkillDescSchema = z.object({
  Hash: z.number(),
});
export type SimpleSkillDesc = z.infer<typeof SimpleSkillDescSchema>;

export const BpNeedSchema = z.object({
  Value: z.number(),
});
export type BpNeed = z.infer<typeof BpNeedSchema>;

export const AvatarSkillConfigTrialValueSchema = z.object({
  SkillID: z.number(),
  SkillName: SimpleSkillDescSchema,
  SkillTag: SimpleSkillDescSchema,
  SkillTypeDesc: SimpleSkillDescSchema,
  Level: z.number(),
  MaxLevel: z.number(),
  SkillTriggerKey: SkillTriggerKeySchema,
  SkillIcon: z.string(),
  UltraSkillIcon: UltraSkillIconSchema,
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
  SPBase: z.union([BpNeedSchema, z.null()]).optional(),
  SPMultipleRatio: BpNeedSchema,
  BPNeed: BpNeedSchema,
  BPAdd: z.union([BpNeedSchema, z.null()]).optional(),
  SkillNeed: SimpleSkillDescSchema,
  DelayRatio: BpNeedSchema,
  ParamList: z.array(BpNeedSchema),
  SimpleParamList: z.array(BpNeedSchema),
  StanceDamageType: z.union([StanceDamageTypeSchema, z.null()]).optional(),
  AttackType: z.union([AttackTypeSchema, z.null()]).optional(),
  SkillEffect: SkillEffectSchema,
  SkillComboValueDelta: z.union([BpNeedSchema, z.null()]).optional(),
  SPNeed: z.union([BpNeedSchema, z.null()]).optional(),
});
export type AvatarSkillConfigTrialValue = z.infer<
  typeof AvatarSkillConfigTrialValueSchema
>;
