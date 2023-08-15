import * as z from 'zod'

export const IconPathSchema = z.enum([
  'SpriteOutput/TabIcon/Quest/QuestDailyIcon.png',
])
export type IconPath = z.infer<typeof IconPathSchema>

export const DailyMissionDataValueSchema = z.object({
  ID: z.number(),
  DailyMissionType: z.number(),
  GroupID: z.number(),
  UnlockMainMission: z.number(),
  IconPath: IconPathSchema,
  QuestID: z.number(),
})
export type DailyMissionDataValue = z.infer<typeof DailyMissionDataValueSchema>
