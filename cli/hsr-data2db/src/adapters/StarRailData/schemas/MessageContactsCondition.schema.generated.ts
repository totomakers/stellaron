import * as z from 'zod'

export const MessageContactsConditionValueSchema = z.object({
  ID: z.number(),
  TruthMissionCondition: z.union([z.number(), z.null()]).optional(),
  FakeContactID: z.union([z.number(), z.null()]).optional(),
  FrozenMissionCondition: z.union([z.number(), z.null()]).optional(),
})
export type MessageContactsConditionValue = z.infer<
  typeof MessageContactsConditionValueSchema
>
