import * as z from 'zod'

export const QuestKeyPointRewardValueSchema = z.object({
  ID: z.number(),
  QuestKeyPoint: z.number(),
  QuestKeyPointReward: z.union([z.number(), z.null()]).optional(),
  QuestKeyPointItem: z.union([z.number(), z.null()]).optional(),
})
export type QuestKeyPointRewardValue = z.infer<
  typeof QuestKeyPointRewardValueSchema
>
