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

export const DescSchema = z.enum([
  'HeroPathDesc_190',
  'HeroPathDesc_191',
  'HeroPathDesc_192',
  'HeroPathDesc_193',
  'HeroPathDesc_194',
  'HeroPathDesc_195',
  'HeroPathDesc_196',
])
export type Desc = z.infer<typeof DescSchema>

export const NameSchema = z.enum([
  'HeroPathName_190',
  'HeroPathName_191',
  'HeroPathName_192',
  'HeroPathName_193',
  'HeroPathName_194',
  'HeroPathName_195',
  'HeroPathName_196',
])
export type Name = z.infer<typeof NameSchema>

export const PropertySchema = z.enum([
  'AllDamageTypeAddedRatio',
  'AttackAddedRatio',
  'CriticalDamageBase',
  'DefenceAddedRatio',
  'HPAddedRatio',
  'SPRatioBase',
  'StatusProbabilityBase',
])
export type Property = z.infer<typeof PropertySchema>

export const ValueSchema = z.object({
  Value: z.number(),
})
export type Value = z.infer<typeof ValueSchema>

export const HeroPathConfigValueSchema = z.object({
  ID: z.number(),
  Level: z.number(),
  Name: NameSchema,
  Desc: DescSchema,
  LevelComment: z.string(),
  MaxLevel: z.number(),
  ExpRequire: z.union([z.number(), z.null()]).optional(),
  AvatarBaseType: AvatarBaseTypeSchema,
  Property: PropertySchema,
  Value: z.union([ValueSchema, z.null()]).optional(),
})
export type HeroPathConfigValue = z.infer<typeof HeroPathConfigValueSchema>
