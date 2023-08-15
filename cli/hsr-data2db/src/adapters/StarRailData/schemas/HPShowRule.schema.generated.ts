import * as z from 'zod'

export const HpShowRuleValueSchema = z.object({
  ID: z.number(),
  Max: z.number(),
  Color: z.string(),
  IsDanger: z.union([z.boolean(), z.null()]).optional(),
})
export type HpShowRuleValue = z.infer<typeof HpShowRuleValueSchema>
