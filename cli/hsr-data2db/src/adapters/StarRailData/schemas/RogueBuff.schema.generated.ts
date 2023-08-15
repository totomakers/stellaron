import * as z from 'zod'

export const BattleEventBuffTypeSchema = z.enum([
  'BattleEventBuff',
  'BattleEventBuffEnhance',
])
export type BattleEventBuffType = z.infer<typeof BattleEventBuffTypeSchema>

export const RogueBuffValueSchema = z.object({
  MazeBuffID: z.number(),
  MazeBuffLevel: z.number(),
  RogueBuffType: z.number(),
  RogueBuffRarity: z.number(),
  RogueBuffTag: z.number(),
  ExtraEffectIDList: z.array(z.number()),
  RogueVersion: z.number(),
  UnlockIDList: z.array(z.number()),
  IsShow: z.union([z.boolean(), z.null()]).optional(),
  AeonID: z.union([z.number(), z.null()]).optional(),
  BattleEventBuffType: z
    .union([BattleEventBuffTypeSchema, z.null()])
    .optional(),
})
export type RogueBuffValue = z.infer<typeof RogueBuffValueSchema>
