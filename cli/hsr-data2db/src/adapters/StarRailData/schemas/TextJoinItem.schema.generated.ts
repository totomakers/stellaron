import * as z from 'zod'

export const TextJoinTextSchema = z.object({
  Hash: z.number(),
})
export type TextJoinText = z.infer<typeof TextJoinTextSchema>

export const TextJoinItemValueSchema = z.object({
  TextJoinItemID: z.number(),
  TextJoinText: TextJoinTextSchema,
})
export type TextJoinItemValue = z.infer<typeof TextJoinItemValueSchema>
