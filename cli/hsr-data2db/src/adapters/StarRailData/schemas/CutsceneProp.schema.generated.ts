import * as z from 'zod'

export const CutscenePropValueSchema = z.object({
  PropID: z.string(),
  PropModelPath: z.string(),
  ResidentEffectKey: z.string(),
  ResidentPossessionKey: z.string(),
})
export type CutscenePropValue = z.infer<typeof CutscenePropValueSchema>
