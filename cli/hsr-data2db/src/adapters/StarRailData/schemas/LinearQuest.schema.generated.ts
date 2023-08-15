import * as z from 'zod'

export const LinearQuestValueSchema = z.object({
  LinearID: z.number(),
  QuestList: z.array(z.number()),
  MinLevel: z.number(),
  MaxLevel: z.number(),
})
export type LinearQuestValue = z.infer<typeof LinearQuestValueSchema>
