import * as z from 'zod'

export const AssignerNameSchema = z.object({
  Hash: z.number(),
})
export type AssignerName = z.infer<typeof AssignerNameSchema>

export const ExpeditionAssignerValueSchema = z.object({
  AssignerID: z.number(),
  AssignerName: AssignerNameSchema,
})
export type ExpeditionAssignerValue = z.infer<
  typeof ExpeditionAssignerValueSchema
>
