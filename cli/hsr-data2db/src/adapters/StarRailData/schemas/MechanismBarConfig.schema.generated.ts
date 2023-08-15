import * as z from 'zod'

export const NameSchema = z.object({
  Hash: z.number(),
})
export type Name = z.infer<typeof NameSchema>

export const MechanismBarConfigValueSchema = z.object({
  ID: z.number(),
  Name: NameSchema,
  MaxValue: z.number(),
  IconPath: z.string(),
  FloorIDList: z.array(z.number()),
})
export type MechanismBarConfigValue = z.infer<
  typeof MechanismBarConfigValueSchema
>
