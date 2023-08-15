import * as z from 'zod'

export const BubbleTalkEnemySchema = z.object({
  Hash: z.number(),
})
export type BubbleTalkEnemy = z.infer<typeof BubbleTalkEnemySchema>

export const BoxingClubStageValueSchema = z.object({
  EventID: z.number(),
  BuffID: z.union([z.number(), z.null()]).optional(),
  Name: BubbleTalkEnemySchema,
  BubbleTalkPlayer: BubbleTalkEnemySchema,
  BubbleTalkEnemy: BubbleTalkEnemySchema,
  MonsterWaveIndex: z.union([z.number(), z.null()]).optional(),
})
export type BoxingClubStageValue = z.infer<typeof BoxingClubStageValueSchema>
