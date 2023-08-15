import * as z from 'zod'

export const MessageGroupConfigValueSchema = z.object({
  ID: z.number(),
  MessageContactsID: z.number(),
  MessageSectionIDList: z.array(z.number()),
  ActivityModuleID: z.union([z.number(), z.null()]).optional(),
})
export type MessageGroupConfigValue = z.infer<
  typeof MessageGroupConfigValueSchema
>
