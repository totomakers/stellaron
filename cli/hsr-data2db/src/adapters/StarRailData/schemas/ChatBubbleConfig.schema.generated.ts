import * as z from 'zod'

export const ChatBubbleConfigValueSchema = z.object({
  ID: z.number(),
  ShowType: z.string(),
  ShowParam: z.union([z.number(), z.null()]).optional(),
  PanelID: z.union([z.number(), z.null()]).optional(),
})
export type ChatBubbleConfigValue = z.infer<typeof ChatBubbleConfigValueSchema>
