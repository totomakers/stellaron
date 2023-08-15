import * as z from 'zod'

export const ShowFuncBtnHintSchema = z.object({
  Hash: z.number(),
})
export type ShowFuncBtnHint = z.infer<typeof ShowFuncBtnHintSchema>

export const IdentifySchema = z.object({
  PuzzleFuncType: z.string(),
  IconPath: z.string(),
  ShowFuncBtnHint: ShowFuncBtnHintSchema,
  DefaultCDDuration: z.union([z.number(), z.null()]).optional(),
})
export type Identify = z.infer<typeof IdentifySchema>

export const MazePuzzleConfigSchema = z.object({
  Info: IdentifySchema,
  Probe: IdentifySchema,
  SpecialVision: IdentifySchema,
  RemoteControlRelease: IdentifySchema,
  TriggerCustomString: IdentifySchema,
  Identify: IdentifySchema,
  Match7thGuessTheSilhouette: IdentifySchema,
})
export type MazePuzzleConfig = z.infer<typeof MazePuzzleConfigSchema>
