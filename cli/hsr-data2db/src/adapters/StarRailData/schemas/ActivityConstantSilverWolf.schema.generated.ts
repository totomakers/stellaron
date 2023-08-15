import * as z from 'zod'

export const ActivityConstantSilverWolfValueSchema = z.object({
  ConstValueName: z.string(),
  Value: z.string(),
})
export type ActivityConstantSilverWolfValue = z.infer<
  typeof ActivityConstantSilverWolfValueSchema
>
