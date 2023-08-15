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
  "Bounce",
  "Defence",
  "Enhance",
  "Impair",
  "MazeAttack",
  "Restore",
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
  "Fire",
  "Ice",
  "Imaginary",
  "Physical",
  "Quantum",
  "Thunder",
  "Wind",
]);
export type StanceDamageType = z.infer<typeof StanceDamageTypeSchema>;

export const UltraSkillIconSchema = z.enum([
  "",
  "SpriteOutput/SkillIcons/1001/SkillIcon_1001_Ultra_on.png",
  "SpriteOutput/SkillIcons/1002/SkillIcon_1002_Ultra_on.png",
  "SpriteOutput/SkillIcons/1003/SkillIcon_1003_Ultra_on.png",
  "SpriteOutput/SkillIcons/1004/SkillIcon_1004_Ultra_on.png",
  "SpriteOutput/SkillIcons/1005/SkillIcon_1005_Ultra_on.png",
  "SpriteOutput/SkillIcons/1006/SkillIcon_1006_Ultra_on.png",
  "SpriteOutput/SkillIcons/1008/SkillIcon_1008_Ultra_on.png",
  "SpriteOutput/SkillIcons/1009/SkillIcon_1009_Ultra_on.png",
  "SpriteOutput/SkillIcons/1013/SkillIcon_1013_Ultra_on.png",
  "SpriteOutput/SkillIcons/1101/SkillIcon_1101_Ultra_on.png",
  "SpriteOutput/SkillIcons/1102/SkillIcon_1102_Ultra_on.png",
  "SpriteOutput/SkillIcons/1103/SkillIcon_1103_Ultra_on.png",
  "SpriteOutput/SkillIcons/1104/SkillIcon_1104_Ultra_on.png",
  "SpriteOutput/SkillIcons/1105/SkillIcon_1105_Ultra_on.png",
  "SpriteOutput/SkillIcons/1106/SkillIcon_1106_Ultra_on.png",
  "SpriteOutput/SkillIcons/1107/SkillIcon_1107_Ultra_on.png",
  "SpriteOutput/SkillIcons/1108/SkillIcon_1108_Ultra_on.png",
  "SpriteOutput/SkillIcons/1109/SkillIcon_1109_Ultra_on.png",
  "SpriteOutput/SkillIcons/1111/SkillIcon_1111_Ultra_on.png",
  "SpriteOutput/SkillIcons/1201/SkillIcon_1201_Ultra_on.png",
  "SpriteOutput/SkillIcons/1202/SkillIcon_1202_Ultra_on.png",
  "SpriteOutput/SkillIcons/1203/SkillIcon_1203_Ultra_on.png",
  "SpriteOutput/SkillIcons/1204/SkillIcon_1204_Ultra_on.png",
  "SpriteOutput/SkillIcons/1205/SkillIcon_1205_Ultra_on.png",
  "SpriteOutput/SkillIcons/1206/SkillIcon_1206_Ultra_on.png",
  "SpriteOutput/SkillIcons/1207/SkillIcon_1207_Ultra_on.png",
  "SpriteOutput/SkillIcons/1209/SkillIcon_1209_Ultra_on.png",
  "SpriteOutput/SkillIcons/1211/SkillIcon_1211_Ultra_on.png",
  "SpriteOutput/SkillIcons/1213/SkillIcon_1213_Ultra_on.png",
  "SpriteOutput/SkillIcons/8001/SkillIcon_8001_BP02.png",
  "SpriteOutput/SkillIcons/8001/SkillIcon_8001_Normal02.png",
  "SpriteOutput/SkillIcons/8001/SkillIcon_8001_Ultra_on.png",
  "SpriteOutput/SkillIcons/8003/SkillIcon_8003_Ultra_on.png",
]);
export type UltraSkillIcon = z.infer<typeof UltraSkillIconSchema>;

export const SimpleSkillDescSchema = z.object({
  Hash: z.number(),
});
export type SimpleSkillDesc = z.infer<typeof SimpleSkillDescSchema>;

export const DelayRatioSchema = z.object({
  Value: z.number(),
});
export type DelayRatio = z.infer<typeof DelayRatioSchema>;

export const AvatarSkillConfigValueSchema = z.object({
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
  RatedSkillTreeID: z.array(z.number()),
  RatedRankID: z.array(z.number()),
  ExtraEffectIDList: z.array(z.number()),
  SimpleExtraEffectIDList: z.array(z.number()),
  ShowStanceList: z.array(DelayRatioSchema),
  ShowDamageList: z.array(z.any()),
  ShowHealList: z.array(z.any()),
  InitCoolDown: z.number(),
  CoolDown: z.number(),
  SPBase: z.union([DelayRatioSchema, z.null()]).optional(),
  SPMultipleRatio: DelayRatioSchema,
  BPNeed: z.union([DelayRatioSchema, z.null()]).optional(),
  BPAdd: z.union([DelayRatioSchema, z.null()]).optional(),
  SkillNeed: SimpleSkillDescSchema,
  DelayRatio: DelayRatioSchema,
  ParamList: z.array(DelayRatioSchema),
  SimpleParamList: z.array(DelayRatioSchema),
  StanceDamageType: z.union([StanceDamageTypeSchema, z.null()]).optional(),
  AttackType: z.union([AttackTypeSchema, z.null()]).optional(),
  SkillEffect: SkillEffectSchema,
  SkillComboValueDelta: z.union([DelayRatioSchema, z.null()]).optional(),
  SPNeed: z.union([DelayRatioSchema, z.null()]).optional(),
});
export type AvatarSkillConfigValue = z.infer<
  typeof AvatarSkillConfigValueSchema
>;
