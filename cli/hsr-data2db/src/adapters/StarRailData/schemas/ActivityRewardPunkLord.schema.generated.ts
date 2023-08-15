import * as z from 'zod'

export const RewardLevelNameSchema = z.object({
  Hash: z.number(),
})
export type RewardLevelName = z.infer<typeof RewardLevelNameSchema>

export const ActivityRewardPunkLordValueSchema = z.object({
  RewardLevel: z.number(),
  RewardLevelName: RewardLevelNameSchema,
  RewardPoint: z.number(),
  RewardID: z.number(),
})
export type ActivityRewardPunkLordValue = z.infer<
  typeof ActivityRewardPunkLordValueSchema
>
