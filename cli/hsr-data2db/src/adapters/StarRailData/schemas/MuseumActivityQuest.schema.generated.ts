import * as z from 'zod'

export const MuseumActivityQuestValueSchema = z.object({
  ID: z.number(),
  Name: z.string(),
  QuestIconPath: z.string(),
  QuestList: z.array(z.number()),
})
export type MuseumActivityQuestValue = z.infer<
  typeof MuseumActivityQuestValueSchema
>
