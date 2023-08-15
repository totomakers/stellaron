import * as z from 'zod'

export const ActivityFarmMultipleDropValueSchema = z.object({
  ID: z.number(),
  Type: z.string(),
  HintText: z.string(),
  MultipleDropTypeList: z.array(z.string()),
  DropMultiple: z.number(),
  CountValue: z.number(),
  ActivityModuleID: z.union([z.number(), z.null()]).optional(),
  CountRefreshType: z.union([z.null(), z.string()]).optional(),
})
export type ActivityFarmMultipleDropValue = z.infer<
  typeof ActivityFarmMultipleDropValueSchema
>
