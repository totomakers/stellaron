import * as z from 'zod'

export const ProgressNameSchema = z.object({
  Hash: z.number(),
})
export type ProgressName = z.infer<typeof ProgressNameSchema>

export const ChestMonsterSchema = z.object({
  ID: z.string(),
  IconPath: z.string(),
  ProgressName: ProgressNameSchema,
})
export type ChestMonster = z.infer<typeof ChestMonsterSchema>

export const MapProgressConfigSchema = z.object({
  Normal: ChestMonsterSchema,
  Raid: ChestMonsterSchema,
  ChestMonster: ChestMonsterSchema,
})
export type MapProgressConfig = z.infer<typeof MapProgressConfigSchema>
