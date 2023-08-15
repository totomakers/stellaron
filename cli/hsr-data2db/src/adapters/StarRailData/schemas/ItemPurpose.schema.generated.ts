import * as z from 'zod'

export const PurposeTextSchema = z.object({
  Hash: z.number(),
})
export type PurposeText = z.infer<typeof PurposeTextSchema>

export const ItemPurposeValueSchema = z.object({
  ID: z.number(),
  PurposeText: PurposeTextSchema,
})
export type ItemPurposeValue = z.infer<typeof ItemPurposeValueSchema>
