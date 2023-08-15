import * as z from 'zod'

export const HandBookSchema = z.object({
  GameplayGuideConstValueName: z.string(),
  Value: z.string(),
})
export type HandBook = z.infer<typeof HandBookSchema>

export const GameplayGuideConstValueSchema = z.object({
  HandBookRogueMappingInfo: HandBookSchema,
  HandBookRogueMapEntrance: HandBookSchema,
  HandBookMazeMappingInfo: HandBookSchema,
  HandBookMazeDisplayMappingInfo01: HandBookSchema,
  HandBookMazeDisplayMappingInfo02: HandBookSchema,
  HandBookMazeMapEntrance: HandBookSchema,
})
export type GameplayGuideConstValue = z.infer<
  typeof GameplayGuideConstValueSchema
>
