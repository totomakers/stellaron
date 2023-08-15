import * as z from 'zod'

export const PlaneEventValueSchema = z.object({
  EventID: z.number(),
  WorldLevel: z.number(),
  StageID: z.union([z.number(), z.null()]).optional(),
  DropList: z.array(z.number()),
  DisplayItemList: z.array(z.any()),
  IsUseMonsterDrop: z.union([z.boolean(), z.null()]).optional(),
  Reward: z.union([z.number(), z.null()]).optional(),
})
export type PlaneEventValue = z.infer<typeof PlaneEventValueSchema>
