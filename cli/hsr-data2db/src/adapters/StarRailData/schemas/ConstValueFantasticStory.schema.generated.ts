import * as z from 'zod'

export const ConstValueFantasticStoryValueSchema = z.object({
  ConstValueName: z.string(),
  Value: z.string(),
})
export type ConstValueFantasticStoryValue = z.infer<
  typeof ConstValueFantasticStoryValueSchema
>
