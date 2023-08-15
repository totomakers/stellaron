import * as z from 'zod'

export const GotoConfigValueSchema = z.object({
  ID: z.number(),
  GotoType: z.number(),
  ParamIntList: z.array(z.number()),
  ParamStringList: z.array(z.string()),
  UnlockID: z.union([z.number(), z.null()]).optional(),
  UnlockMainMission: z.union([z.number(), z.null()]).optional(),
})
export type GotoConfigValue = z.infer<typeof GotoConfigValueSchema>
