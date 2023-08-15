import * as z from 'zod'

export const AttackSchema = z.object({
  ID: z.string(),
  ButtonPath: z.string(),
  ButtonReadyPath: z.string(),
  CutinPath: z.string(),
})
export type Attack = z.infer<typeof AttackSchema>

export const BattleEventButtonTypeConfigSchema = z.object({
  Attack: AttackSchema,
  Buff: AttackSchema,
  Debuff: AttackSchema,
})
export type BattleEventButtonTypeConfig = z.infer<
  typeof BattleEventButtonTypeConfigSchema
>
