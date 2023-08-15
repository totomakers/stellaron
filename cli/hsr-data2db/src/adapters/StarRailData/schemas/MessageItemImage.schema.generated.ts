import * as z from 'zod'

export const MessageItemImageValueSchema = z.object({
  ID: z.number(),
  ImagePath: z.string(),
})
export type MessageItemImageValue = z.infer<typeof MessageItemImageValueSchema>
