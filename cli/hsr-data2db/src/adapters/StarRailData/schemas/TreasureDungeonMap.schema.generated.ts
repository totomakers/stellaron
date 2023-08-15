import * as z from 'zod'

export const TreasureDungeonMapValueSchema = z.object({
  MapID: z.number(),
  MapInfo: z.array(z.number()),
})
export type TreasureDungeonMapValue = z.infer<
  typeof TreasureDungeonMapValueSchema
>
