import * as z from 'zod'

export const PlaneTypeSchema = z.enum([
  'Challenge',
  'Maze',
  'Raid',
  'Rogue',
  'Town',
  'Train',
  'TrialActivity',
])
export type PlaneType = z.infer<typeof PlaneTypeSchema>

export const PlaneNameSchema = z.object({
  Hash: z.number(),
})
export type PlaneName = z.infer<typeof PlaneNameSchema>

export const MazePlaneValueSchema = z.object({
  PlaneID: z.number(),
  PlaneType: PlaneTypeSchema,
  SubType: z.number(),
  MazePoolType: z.number(),
  WorldID: z.number(),
  PlaneName: PlaneNameSchema,
  StartFloorID: z.number(),
  FloorIDList: z.array(z.number()),
})
export type MazePlaneValue = z.infer<typeof MazePlaneValueSchema>
