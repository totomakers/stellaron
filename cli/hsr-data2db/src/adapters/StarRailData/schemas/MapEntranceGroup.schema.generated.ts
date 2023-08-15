import * as z from 'zod'

export const GroupNameSchema = z.object({
  Hash: z.number(),
})
export type GroupName = z.infer<typeof GroupNameSchema>

export const MapEntranceGroupValueSchema = z.object({
  ID: z.number(),
  MapGuideID: z.number(),
  Type: z.number(),
  GroupName: GroupNameSchema,
})
export type MapEntranceGroupValue = z.infer<typeof MapEntranceGroupValueSchema>
