import * as z from 'zod'

export const ItemComposeTagValueSchema = z.object({
  ItemComposeTagID: z.number(),
  BelongTypeID: z.number(),
  TagTextmapID: z.string(),
})
export type ItemComposeTagValue = z.infer<typeof ItemComposeTagValueSchema>
