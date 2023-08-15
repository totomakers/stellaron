import * as z from 'zod'

export const FantasticStoryBuffSlotIdValueSchema = z.object({
  BuffSlotID: z.number(),
  UnlockChapterID: z.number(),
})
export type FantasticStoryBuffSlotIdValue = z.infer<
  typeof FantasticStoryBuffSlotIdValueSchema
>
