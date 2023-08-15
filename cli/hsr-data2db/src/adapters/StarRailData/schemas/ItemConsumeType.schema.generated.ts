import * as z from 'zod'

export const ItemConsumeTypeValueSchema = z.object({
  TypeID: z.number(),
  TypeIconPath: z.string(),
})
export type ItemConsumeTypeValue = z.infer<typeof ItemConsumeTypeValueSchema>
