import * as z from "zod";

export const StanceWeakListSchema = z.enum([
  "Fire",
  "Ice",
  "Imaginary",
  "Physical",
  "Quantum",
  "Thunder",
  "Wind",
]);
export type StanceWeakList = z.infer<typeof StanceWeakListSchema>;

export const KeySchema = z.enum([
  "STAT_Confine",
  "STAT_CTRL",
  "STAT_CTRL_Frozen",
  "STAT_DOT_Burn",
  "STAT_DOT_Electric",
  "STAT_DOT_Poison",
  "STAT_Entangle",
]);
export type Key = z.infer<typeof KeySchema>;

export const OverrideAiPathSchema = z.enum([
  "Config/ConfigAI/Monster_AML_Elite01_00_AI_B.json",
  "Config/ConfigAI/Monster_AML_Minion03_00_AI_A.json",
  "Config/ConfigAI/Monster_Common_SequenceThree_AI.json",
  "Config/ConfigAI/Monster_W1_Mecha01_00_AI_A.json",
  "Config/ConfigAI/Monster_W1_Mecha03_00_AI_B.json",
  "Config/ConfigAI/Monster_W1_Mecha03_00_VanishTest_AI.json",
  "Config/ConfigAI/Monster_W1_Mecha04_00_VanishTest_AI.json",
  "Config/ConfigAI/Monster_W1_Soldier01_03_AI_A.json",
  "Config/ConfigAI/Monster_W1_Soldier03_00_AI_B.json",
  "Config/ConfigAI/Monster_W1_Soldier03_00_AI_C.json",
  "Config/ConfigAI/Monster_W1_Svarog_00_AI_A.json",
  "Config/ConfigAI/Monster_W2_Abomi01_00_AI_DanHeng.json",
  "Config/ConfigAI/Monster_W2_Abomi04_00_AI_DanHeng.json",
  "Config/ConfigAI/Monster_W2_Abomi04_00_AI_Yanqing.json",
  "Config/ConfigAI/Monster_W2_Kafka_00_AI_A.json",
  "Config/ConfigAI/Monster_W2_Kafka_00_AI_B.json",
  "Config/ConfigAI/Monster_W2_Yanqing_00_AI_MainBattle.json",
  "Config/ConfigAI/Monster_XP_Elite01_00_AI_B.json",
  "Config/ConfigAI/Monster_XP_Minion04_00_AI_A.json",
  "",
]);
export type OverrideAiPath = z.infer<typeof OverrideAiPathSchema>;

export const OverrideAiSkillSequenceSchema = z.object({
  MNMACAIHJCE: z.number(),
});
export type OverrideAiSkillSequence = z.infer<
  typeof OverrideAiSkillSequenceSchema
>;

export const MonsterSchema = z.object({
  Hash: z.number(),
});
export type Monster = z.infer<typeof MonsterSchema>;

export const DebuffResistSchema = z.object({
  Key: KeySchema,
  Value: AttackModifyRatioSchema,
});
export type DebuffResist = z.infer<typeof DebuffResistSchema>;

export const DamageTypeResistanceSchema = z.object({
  DamageType: StanceWeakListSchema,
  Value: AttackModifyRatioSchema,
});
export type DamageTypeResistance = z.infer<typeof DamageTypeResistanceSchema>;

export const CustomValueSchema = z.object({
  LFCIILHABDO: z.string(),
  LGKGOMNMBAH: z.number(),
});
export type CustomValue = z.infer<typeof CustomValueSchema>;

export const AttackModifyRatioSchema = z.object({
  Value: z.number(),
});
export type AttackModifyRatio = z.infer<typeof AttackModifyRatioSchema>;

export const MonsterConfigValueSchema = z.object({
  MonsterID: z.number(),
  MonsterTemplateID: z.number(),
  MonsterName: MonsterSchema,
  MonsterIntroduction: MonsterSchema,
  MonsterBattleIntroduction: MonsterSchema,
  HardLevelGroup: z.number(),
  EliteGroup: z.number(),
  AttackModifyRatio: AttackModifyRatioSchema,
  DefenceModifyRatio: AttackModifyRatioSchema,
  HPModifyRatio: AttackModifyRatioSchema,
  SpeedModifyRatio: AttackModifyRatioSchema,
  StanceModifyRatio: AttackModifyRatioSchema,
  SkillList: z.array(z.number()),
  CustomValues: z.array(CustomValueSchema),
  DynamicValues: z.array(z.any()),
  DebuffResist: z.array(DebuffResistSchema),
  CustomValueTags: z.array(z.string()),
  StanceWeakList: z.array(StanceWeakListSchema),
  DamageTypeResistance: z.array(DamageTypeResistanceSchema),
  AbilityNameList: z.array(z.string()),
  OverrideAIPath: OverrideAiPathSchema,
  OverrideAISkillSequence: z.array(OverrideAiSkillSequenceSchema),
  SpeedModifyValue: z.union([AttackModifyRatioSchema, z.null()]).optional(),
  StanceModifyValue: z.union([AttackModifyRatioSchema, z.null()]).optional(),
});
export type MonsterConfigValue = z.infer<typeof MonsterConfigValueSchema>;
