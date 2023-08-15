import * as z from 'zod'

export const NameSchema = z.object({
  Hash: z.number(),
})
export type Name = z.infer<typeof NameSchema>

export const AvatarCampValueSchema = z.object({
  ID: z.number(),
  SortID: z.number(),
  Name: NameSchema,
  IconPath: z.string(),
})
export type AvatarCampValue = z.infer<typeof AvatarCampValueSchema>
