import * as z from 'zod'

export const DescSchema = z.object({
  Hash: z.number(),
})
export type Desc = z.infer<typeof DescSchema>

export const ActivityNewbiePromoteValueSchema = z.object({
  ID: z.number(),
  Desc: DescSchema,
  DisplayItem: z.number(),
  FinishQuest: z.number(),
  SortID: z.number(),
})
export type ActivityNewbiePromoteValue = z.infer<
  typeof ActivityNewbiePromoteValueSchema
>
