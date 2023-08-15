import * as z from 'zod'

export const The1Schema = z.object({
  ID: z.number(),
  Distance: z.number(),
})
export type The1 = z.infer<typeof The1Schema>

export const TalkVerificationDistanceSchema = z.object({
  '1': The1Schema,
})
export type TalkVerificationDistance = z.infer<
  typeof TalkVerificationDistanceSchema
>
