import * as z from 'zod'

export const ConstValueRogueValueSchema = z.object({
  ConstRogueName: z.string(),
  ConstValue: z.string(),
})
export type ConstValueRogueValue = z.infer<typeof ConstValueRogueValueSchema>
