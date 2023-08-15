import * as z from 'zod'

export const ActivityFindTrotterSchema = z.object({
  ConstValueName: z.string(),
  Value: z.string(),
})
export type ActivityFindTrotter = z.infer<typeof ActivityFindTrotterSchema>

export const ActivityConstantFindTrotterSchema = z.object({
  ActivityFindTrotter_Quest_Reward: ActivityFindTrotterSchema,
  ActivityFindTrotter_Catalogue_Submission: ActivityFindTrotterSchema,
  ActivityFindTrotter_EntranceID: ActivityFindTrotterSchema,
  ActivityFindTrotter_MappingInfoID: ActivityFindTrotterSchema,
})
export type ActivityConstantFindTrotter = z.infer<
  typeof ActivityConstantFindTrotterSchema
>
