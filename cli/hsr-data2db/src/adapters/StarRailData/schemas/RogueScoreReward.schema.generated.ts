import * as z from 'zod'

export const RogueScoreRewardValueSchema = z.object({
  RewardPoolID: z.number(),
  ScoreRow: z.number(),
  Score: z.number(),
  Reward: z.number(),
})
export type RogueScoreRewardValue = z.infer<typeof RogueScoreRewardValueSchema>
