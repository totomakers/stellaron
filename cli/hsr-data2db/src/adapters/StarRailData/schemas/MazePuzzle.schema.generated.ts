import * as z from 'zod'

export const MazePuzzleValueSchema = z.object({
  MazePuzzleID: z.number(),
  NormalModeID: z.union([z.number(), z.null()]).optional(),
  IsResetable: z.union([z.number(), z.null()]).optional(),
  ProgressList: z.array(z.number()),
  IsShowToast: z.union([z.boolean(), z.null()]).optional(),
  IsShowWaypoint: z.union([z.boolean(), z.null()]).optional(),
  IsTopPriority: z.union([z.boolean(), z.null()]).optional(),
  SpecialModeID: z.union([z.number(), z.null()]).optional(),
  TutorialID: z.union([z.number(), z.null()]).optional(),
})
export type MazePuzzleValue = z.infer<typeof MazePuzzleValueSchema>
