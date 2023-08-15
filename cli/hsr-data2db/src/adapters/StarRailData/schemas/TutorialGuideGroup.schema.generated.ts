import * as z from 'zod'

export const TutorialShowTypeSchema = z.enum([
  'AutoShow',
  'AutoShowInMaze',
  'Hide',
  'NonTutorial',
])
export type TutorialShowType = z.infer<typeof TutorialShowTypeSchema>

export const MessageTextSchema = z.object({
  Hash: z.number(),
})
export type MessageText = z.infer<typeof MessageTextSchema>

export const TriggerParamSchema = z.object({
  TriggerType: z.string(),
  TriggerParam: z.string(),
})
export type TriggerParam = z.infer<typeof TriggerParamSchema>

export const TutorialGuideGroupValueSchema = z.object({
  GroupID: z.number(),
  TutorialGuideIDList: z.array(z.number()),
  TutorialType: z.number(),
  CanReview: z.union([z.boolean(), z.null()]).optional(),
  TutorialShowType: z.union([TutorialShowTypeSchema, z.null()]).optional(),
  Order: z.union([z.number(), z.null()]).optional(),
  TriggerParams: z.array(TriggerParamSchema),
  FinishTriggerParams: z.array(TriggerParamSchema),
  MessageText: MessageTextSchema,
  RewardID: z.union([z.number(), z.null()]).optional(),
})
export type TutorialGuideGroupValue = z.infer<
  typeof TutorialGuideGroupValueSchema
>
