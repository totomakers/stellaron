import * as z from 'zod'

export const FreeStyleMotionValueSchema = z.object({
  ID: z.number(),
  FreeStyleCharacterID: z.string(),
  StartMotion: z.string(),
  StartMotionPath: z.string(),
  LoopMotionPath: z.string(),
  StartMotionRibbonPath: z.string(),
  LoopMotionRibbonPath: z.string(),
})
export type FreeStyleMotionValue = z.infer<typeof FreeStyleMotionValueSchema>
