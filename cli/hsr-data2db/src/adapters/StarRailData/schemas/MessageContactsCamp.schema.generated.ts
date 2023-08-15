import * as z from 'zod'

export const NameSchema = z.object({
  Hash: z.number(),
})
export type Name = z.infer<typeof NameSchema>

export const MessageContactsCampValueSchema = z.object({
  ContactsCamp: z.number(),
  Name: NameSchema,
  SortID: z.number(),
})
export type MessageContactsCampValue = z.infer<
  typeof MessageContactsCampValueSchema
>
