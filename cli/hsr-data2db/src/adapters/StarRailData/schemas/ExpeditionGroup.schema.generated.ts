import * as z from 'zod'

export const NameSchema = z.object({
  Hash: z.number(),
})
export type Name = z.infer<typeof NameSchema>

export const ExpeditionGroupValueSchema = z.object({
  GroupID: z.number(),
  Name: NameSchema,
  IconPath: z.string(),
})
export type ExpeditionGroupValue = z.infer<typeof ExpeditionGroupValueSchema>
