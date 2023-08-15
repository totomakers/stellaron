import * as z from 'zod'

export const FinishTypeConfigValueSchema = z.object({
  FinishType: z.string(),
})
export type FinishTypeConfigValue = z.infer<typeof FinishTypeConfigValueSchema>
