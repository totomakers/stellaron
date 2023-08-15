import * as z from 'zod'

export const ActivityPanelSingeQuestValueSchema = z.object({
  ID: z.number(),
  AvatarID: z.number(),
  GotoID: z.number(),
  QuestList: z.array(z.number()),
})
export type ActivityPanelSingeQuestValue = z.infer<
  typeof ActivityPanelSingeQuestValueSchema
>
