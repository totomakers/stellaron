import * as z from 'zod'

export const InBattleBindingTypeSchema = z.enum([
  'StageAbilityBeforeCharacterBorn',
])
export type InBattleBindingType = z.infer<typeof InBattleBindingTypeSchema>

export const MazeBuffTypeSchema = z.enum(['Level'])
export type MazeBuffType = z.infer<typeof MazeBuffTypeSchema>

export const ParamListSchema = z.object({
  Value: z.number(),
})
export type ParamList = z.infer<typeof ParamListSchema>

export const BuffSchema = z.object({
  Hash: z.number(),
})
export type Buff = z.infer<typeof BuffSchema>

export const RogueMazeBuffValueSchema = z.object({
  ID: z.number(),
  BuffSeries: z.number(),
  BuffRarity: z.number(),
  Lv: z.number(),
  LvMax: z.number(),
  ModifierName: z.string(),
  InBattleBindingType: InBattleBindingTypeSchema,
  InBattleBindingKey: z.string(),
  ParamList: z.array(ParamListSchema),
  BuffIcon: z.string(),
  BuffName: BuffSchema,
  BuffDesc: BuffSchema,
  BuffSimpleDesc: BuffSchema,
  BuffDescBattle: BuffSchema,
  BuffEffect: z.string(),
  MazeBuffType: MazeBuffTypeSchema,
})
export type RogueMazeBuffValue = z.infer<typeof RogueMazeBuffValueSchema>
