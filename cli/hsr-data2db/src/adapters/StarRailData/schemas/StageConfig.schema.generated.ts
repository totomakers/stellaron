import * as z from 'zod'

export const LevelGraphPathSchema = z.enum([
  'Config/Level/StageCommonTemplate.json',
  'Config/Level/TestLevel/ATestLevel_1_1.json',
])
export type LevelGraphPath = z.infer<typeof LevelGraphPathSchema>

export const LevelLoseConditionSchema = z.enum([
  '[CDT_WaitCustomString:Level_SpecialLose]',
])
export type LevelLoseCondition = z.infer<typeof LevelLoseConditionSchema>

export const StageConfigDatumLfciilhabdoSchema = z.enum([
  '_BattleCondition',
  '_BGM',
  '_CloseBattleStartDialog',
  '_CreateBattleEvent',
  '_EnsureTeamAliveKey',
  '_IsEliteBattle',
  '_SpecialBattleStartCamera',
  '_StageInfiniteGroup',
  '_Wave',
])
export type StageConfigDatumLfciilhabdo = z.infer<
  typeof StageConfigDatumLfciilhabdoSchema
>

export const StageTypeSchema = z.enum([
  'BoxingClub',
  'Cocoon',
  'FantasticStory',
  'FarmElement',
  'FightActivity',
  'Mainline',
  'PunkLord',
  'RogueChallengeActivity',
  'TreasureDungeon',
  'Trial',
  'TrialAdventure',
  'VerseSimulation',
])
export type StageType = z.infer<typeof StageTypeSchema>

export const SubLevelGraphLfciilhabdoSchema = z.enum(['_DefaultSubStage'])
export type SubLevelGraphLfciilhabdo = z.infer<
  typeof SubLevelGraphLfciilhabdoSchema
>

export const SubLevelGraphSchema = z.object({
  LFCIILHABDO: SubLevelGraphLfciilhabdoSchema,
  BJALGPNCIKP: z.string(),
  AJIHCMFFAOB: z.union([z.null(), z.string()]).optional(),
  GGDMEGBGELI: z.union([z.null(), z.string()]).optional(),
})
export type SubLevelGraph = z.infer<typeof SubLevelGraphSchema>

export const StageNameSchema = z.object({
  Hash: z.number(),
})
export type StageName = z.infer<typeof StageNameSchema>

export const StageConfigDatumSchema = z.object({
  LFCIILHABDO: StageConfigDatumLfciilhabdoSchema,
  LGKGOMNMBAH: z.string(),
})
export type StageConfigDatum = z.infer<typeof StageConfigDatumSchema>

export const MonsterListSchema = z.object({
  Monster0: z.number(),
  Monster1: z.union([z.number(), z.null()]).optional(),
  Monster2: z.union([z.number(), z.null()]).optional(),
  Monster3: z.union([z.number(), z.null()]).optional(),
  Monster4: z.union([z.number(), z.null()]).optional(),
})
export type MonsterList = z.infer<typeof MonsterListSchema>

export const StageConfigValueSchema = z.object({
  StageID: z.number(),
  StageType: StageTypeSchema,
  StageName: StageNameSchema,
  HardLevelGroup: z.number(),
  Level: z.number(),
  LevelGraphPath: LevelGraphPathSchema,
  StageAbilityConfig: z.array(z.string()),
  SubLevelGraphs: z.array(SubLevelGraphSchema),
  StageConfigData: z.array(StageConfigDatumSchema),
  MonsterList: z.array(MonsterListSchema),
  LevelLoseCondition: z.array(LevelLoseConditionSchema),
  LevelWinCondition: z.array(z.string()),
  ForbidExitBattle: z.union([z.boolean(), z.null()]).optional(),
  TrialAvatarList: z.array(z.number()),
  Release: z.union([z.boolean(), z.null()]).optional(),
  ForbidAutoBattle: z.union([z.boolean(), z.null()]).optional(),
  EliteGroup: z.union([z.number(), z.null()]).optional(),
  MonsterWarningRatio: z.union([z.number(), z.null()]).optional(),
  BattleScoringGroup: z.union([z.number(), z.null()]).optional(),
  ResetBattleSpeed: z.union([z.boolean(), z.null()]).optional(),
})
export type StageConfigValue = z.infer<typeof StageConfigValueSchema>
