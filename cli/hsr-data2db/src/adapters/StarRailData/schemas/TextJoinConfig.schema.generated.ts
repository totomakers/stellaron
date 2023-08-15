import * as z from 'zod'

export const TextJoinConfigValueSchema = z.object({
  TextJoinID: z.number(),
  DefaultItem: z.number(),
  TextJoinItemList: z.array(z.number()),
  IsOverride: z.union([z.boolean(), z.null()]).optional(),
  Type: z.union([z.null(), z.string()]).optional(),
})
export type TextJoinConfigValue = z.infer<typeof TextJoinConfigValueSchema>
