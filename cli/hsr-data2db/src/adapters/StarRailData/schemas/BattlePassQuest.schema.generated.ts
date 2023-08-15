import * as z from 'zod'

export const BattlePassQuestValueSchema = z.object({
  ID: z.number(),
  ShowTime: z.boolean(),
})
export type BattlePassQuestValue = z.infer<typeof BattlePassQuestValueSchema>
