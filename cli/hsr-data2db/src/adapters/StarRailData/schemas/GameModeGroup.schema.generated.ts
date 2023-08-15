import * as z from 'zod'

export const GameModeGroupValueSchema = z.object({
  GameModeGroupID: z.number(),
  GamemodeList: z.array(z.string()),
})
export type GameModeGroupValue = z.infer<typeof GameModeGroupValueSchema>
