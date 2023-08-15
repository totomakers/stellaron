import * as z from 'zod'

export const LoopCgConfigValueSchema = z.object({
  VideoID: z.number(),
  VideoPath: z.string(),
  IsPlayerInvolved: z.union([z.boolean(), z.null()]).optional(),
})
export type LoopCgConfigValue = z.infer<typeof LoopCgConfigValueSchema>
