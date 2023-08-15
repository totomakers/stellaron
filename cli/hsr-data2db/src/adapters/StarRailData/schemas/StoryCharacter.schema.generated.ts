import * as z from 'zod'

export const SubTypeSchema = z.enum(['Avatar', 'Monster', 'Special'])
export type SubType = z.infer<typeof SubTypeSchema>

export const StoryCharacterValueSchema = z.object({
  StoryCharacterID: z.string(),
  SubType: z.union([SubTypeSchema, z.null()]).optional(),
  ConfigEntityPath: z.string(),
  JsonPath: z.string(),
})
export type StoryCharacterValue = z.infer<typeof StoryCharacterValueSchema>
