import * as z from 'zod'

export const AeonStorySchema = z.object({
  Hash: z.number(),
})
export type AeonStory = z.infer<typeof AeonStorySchema>

export const RogueAeonLevelConfigValueSchema = z.object({
  RogueAeonID: z.number(),
  AeonStoryID: z.number(),
  Level: z.number(),
  AeonStory: AeonStorySchema,
  AeonStory_Name: AeonStorySchema,
  Exp: z.union([z.number(), z.null()]).optional(),
  UnlockID: z.union([z.number(), z.null()]).optional(),
})
export type RogueAeonLevelConfigValue = z.infer<
  typeof RogueAeonLevelConfigValueSchema
>
