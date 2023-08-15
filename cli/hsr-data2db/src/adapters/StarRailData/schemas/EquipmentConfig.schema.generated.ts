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

export const RaritySchema = z.enum([
  'CombatPowerLightconeRarity3',
  'CombatPowerLightconeRarity4',
  'CombatPowerLightconeRarity5',
])
export type Rarity = z.infer<typeof RaritySchema>

export const EquipmentSchema = z.object({
  Hash: z.number(),
})
export type Equipment = z.infer<typeof EquipmentSchema>

export const EquipmentConfigValueSchema = z.object({
  EquipmentID: z.number(),
  Release: z.boolean(),
  EquipmentName: EquipmentSchema,
  EquipmentDesc: EquipmentSchema,
  Rarity: RaritySchema,
  AvatarBaseType: AvatarBaseTypeSchema,
  MaxPromotion: z.number(),
  MaxRank: z.number(),
  ExpType: z.number(),
  SkillID: z.number(),
  ExpProvide: z.number(),
  CoinCost: z.number(),
  RankUpCostList: z.array(z.number()),
  ThumbnailPath: z.string(),
  ImagePath: z.string(),
  ItemRightPanelOffset: z.array(z.number()),
  AvatarDetailOffset: z.array(z.number()),
  BattleDialogOffset: z.array(z.number()),
  GachaResultOffset: z.array(z.number()),
})
export type EquipmentConfigValue = z.infer<typeof EquipmentConfigValueSchema>
