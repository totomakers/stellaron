import * as z from 'zod'

export const The10012Schema = z.object({
  ActivityID: z.number(),
  ChallengeList: z.array(z.number()),
  ActivityRewardList: z.array(z.number()),
  MarkScoreList: z.array(z.number()),
})
export type The10012 = z.infer<typeof The10012Schema>

export const ChallengeActivityConfigSchema = z.object({
  '10012': The10012Schema,
})
export type ChallengeActivityConfig = z.infer<
  typeof ChallengeActivityConfigSchema
>
