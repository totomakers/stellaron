import * as z from 'zod'

export const AvatarRarityValueSchema = z.object({
  ID: z.number(),
  RarityIconPath: z.string(),
  RarityName: z.string(),
})
export type AvatarRarityValue = z.infer<typeof AvatarRarityValueSchema>
