import * as z from 'zod'

export const PlayerReturnQuestValueSchema = z.object({
  ID: z.number(),
  LinearQuestID: z.number(),
  GroupID: z.number(),
})
export type PlayerReturnQuestValue = z.infer<
  typeof PlayerReturnQuestValueSchema
>
