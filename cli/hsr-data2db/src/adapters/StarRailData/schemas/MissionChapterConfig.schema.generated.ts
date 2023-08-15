import * as z from 'zod'

export const MissionChapterConfigValueSchema = z.object({
  ID: z.number(),
  ChapterName: z.string(),
  StageName: z.string(),
  ChapterDesc: z.string(),
  ChapterDisplayPriority: z.number(),
  ChapterIconPath: z.string(),
  ChapterFigureIconPath: z.string(),
  OriginMainMission: z.union([z.number(), z.null()]).optional(),
  FinalMainMission: z.union([z.number(), z.null()]).optional(),
})
export type MissionChapterConfigValue = z.infer<
  typeof MissionChapterConfigValueSchema
>
