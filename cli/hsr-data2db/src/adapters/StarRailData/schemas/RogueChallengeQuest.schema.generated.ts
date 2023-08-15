import * as z from 'zod'

export const RogueChallengeQuestValueSchema = z.object({
  LevelID: z.number(),
  QuestIDList: z.array(z.number()),
})
export type RogueChallengeQuestValue = z.infer<
  typeof RogueChallengeQuestValueSchema
>
