import * as z from 'zod'

export const ActivityBonusRewardPunkLordValueSchema = z.object({
  BonusID: z.number(),
  BonusType: z.number(),
  DisplayItemID: z.union([z.number(), z.null()]).optional(),
  DropList: z.array(z.number()),
})
export type ActivityBonusRewardPunkLordValue = z.infer<
  typeof ActivityBonusRewardPunkLordValueSchema
>
