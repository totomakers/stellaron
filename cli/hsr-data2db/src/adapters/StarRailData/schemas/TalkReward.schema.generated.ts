import * as z from 'zod'

export const TalkRewardValueSchema = z.object({
  ID: z.number(),
  PlaneID: z.number(),
  FloorID: z.number(),
  GroupID: z.number(),
  NPCConfigID: z.number(),
  RewardID: z.number(),
  VerificationID: z.number(),
})
export type TalkRewardValue = z.infer<typeof TalkRewardValueSchema>
