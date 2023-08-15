import * as z from 'zod'

export const AvatarBaseTypeSchema = z.enum([
  'Knight',
  'Mage',
  'Priest',
  'Rogue',
  'Shaman',
  'Warlock',
  'Warrior',
])
export type AvatarBaseType = z.infer<typeof AvatarBaseTypeSchema>

export const KnightSchema = z.object({
  AvatarBaseType: AvatarBaseTypeSchema,
  PointID: z.number(),
  Up: z.union([z.number(), z.null()]).optional(),
  Down: z.union([z.number(), z.null()]).optional(),
  Left: z.union([z.number(), z.null()]).optional(),
  Right: z.union([z.number(), z.null()]).optional(),
})
export type Knight = z.infer<typeof KnightSchema>

export const SKillNavigationConfigSchema = z.object({
  Warrior: z.record(z.string(), KnightSchema),
  Rogue: z.record(z.string(), KnightSchema),
  Mage: z.record(z.string(), KnightSchema),
  Shaman: z.record(z.string(), KnightSchema),
  Warlock: z.record(z.string(), KnightSchema),
  Knight: z.record(z.string(), KnightSchema),
  Priest: z.record(z.string(), KnightSchema),
})
export type SKillNavigationConfig = z.infer<typeof SKillNavigationConfigSchema>
