import * as z from 'zod'

export const BookDisplayTypeValueSchema = z.object({
  BookDisplayTypeID: z.number(),
  Alignment: z.number(),
})
export type BookDisplayTypeValue = z.infer<typeof BookDisplayTypeValueSchema>
