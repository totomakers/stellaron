import * as z from 'zod'

export const ActivityModuleFightValueSchema = z.object({
  ActivityFightGroupID: z.number(),
  ActivityModuleID: z.number(),
})
export type ActivityModuleFightValue = z.infer<
  typeof ActivityModuleFightValueSchema
>
