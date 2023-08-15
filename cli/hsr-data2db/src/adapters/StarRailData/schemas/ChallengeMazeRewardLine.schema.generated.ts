import * as z from 'zod'

export const ChallengeMazeRewardLineValueSchema = z.object({
  GroupID: z.number(),
  StarCount: z.number(),
  RewardID: z.number(),
})
export type ChallengeMazeRewardLineValue = z.infer<
  typeof ChallengeMazeRewardLineValueSchema
>
