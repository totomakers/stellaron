import * as z from 'zod'

export const Cocoon3GoToSchema = z.object({
  PlayerReturnConstValueName: z.string(),
  Value: z.string(),
})
export type Cocoon3GoTo = z.infer<typeof Cocoon3GoToSchema>

export const PlayerReturnConstValueSchema = z.object({
  Cocoon_GoTo: Cocoon3GoToSchema,
  Cocoon_PicPath: Cocoon3GoToSchema,
  Cocoon3_GoTo: Cocoon3GoToSchema,
  Cocoon3_PicPath: Cocoon3GoToSchema,
  QuestionnairePicPath: Cocoon3GoToSchema,
  HandbookPicPath: Cocoon3GoToSchema,
  InformationPicPath: Cocoon3GoToSchema,
  QuestionnaireRewardShow: Cocoon3GoToSchema,
})
export type PlayerReturnConstValue = z.infer<
  typeof PlayerReturnConstValueSchema
>
