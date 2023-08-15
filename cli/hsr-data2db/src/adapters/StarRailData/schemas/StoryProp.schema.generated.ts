import * as z from 'zod'

export const StoryPropValueSchema = z.object({
  StoryCharacterID: z.string(),
  StoryCharacterModelPath: z.string(),
  ConfigEntityPath: z.string(),
  StoryCharacterUniqueName: z.string(),
  JsonPath: z.string(),
})
export type StoryPropValue = z.infer<typeof StoryPropValueSchema>
