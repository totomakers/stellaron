import * as z from 'zod'

export const ChallengeTargetTypeSchema = z.enum(['DEAD_AVATAR', 'ROUNDS_LEFT'])
export type ChallengeTargetType = z.infer<typeof ChallengeTargetTypeSchema>

export const ChallengeTargetNameSchema = z.object({
  Hash: z.number(),
})
export type ChallengeTargetName = z.infer<typeof ChallengeTargetNameSchema>

export const ChallengeTargetConfigValueSchema = z.object({
  ID: z.number(),
  ChallengeTargetType: ChallengeTargetTypeSchema,
  ChallengeTargetName: ChallengeTargetNameSchema,
  ChallengeTargetParam1: z.union([z.number(), z.null()]).optional(),
  RewardID: z.number(),
})
export type ChallengeTargetConfigValue = z.infer<
  typeof ChallengeTargetConfigValueSchema
>
