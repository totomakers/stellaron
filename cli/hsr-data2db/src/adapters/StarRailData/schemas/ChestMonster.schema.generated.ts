import * as z from 'zod'

export const ChestMonsterValueSchema = z.object({
  ID: z.number(),
  PlaneID: z.number(),
  FloorID: z.number(),
  GroupID: z.number(),
  ConfigID: z.number(),
  EventID: z.number(),
})
export type ChestMonsterValue = z.infer<typeof ChestMonsterValueSchema>
