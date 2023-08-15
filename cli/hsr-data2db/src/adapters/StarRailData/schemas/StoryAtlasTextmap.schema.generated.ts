import * as z from 'zod'

export const StoryNameSchema = z.object({
  Hash: z.number(),
})
export type StoryName = z.infer<typeof StoryNameSchema>

export const StoryAtlasTextmapValueSchema = z.object({
  StoryID: z.number(),
  StoryName: StoryNameSchema,
  UnlockDesc: StoryNameSchema,
})
export type StoryAtlasTextmapValue = z.infer<
  typeof StoryAtlasTextmapValueSchema
>
