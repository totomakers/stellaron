import * as z from 'zod'

export const DescriptionSchema = z.object({
  Hash: z.number(),
})
export type Description = z.infer<typeof DescriptionSchema>

export const PsActivityValueSchema = z.object({
  ActivityID: z.number(),
  ObjectIDList: z.array(z.number()),
  name: DescriptionSchema,
  description: DescriptionSchema,
  task: DescriptionSchema,
})
export type PsActivityValue = z.infer<typeof PsActivityValueSchema>
