import * as z from 'zod'

export const DisplayItemListSchema = z.object({
  ItemID: z.number(),
})
export type DisplayItemList = z.infer<typeof DisplayItemListSchema>

export const AssignDescSchema = z.object({
  Hash: z.number(),
})
export type AssignDesc = z.infer<typeof AssignDescSchema>

export const ExpeditionDataValueSchema = z.object({
  ExpeditionID: z.number(),
  Name: AssignDescSchema,
  AssignerIDList: z.array(z.number()),
  AssignDesc: AssignDescSchema,
  GroupID: z.number(),
  AvatarNumMin: z.number(),
  AvatarNumMax: z.number(),
  DisplayItemList: z.array(DisplayItemListSchema),
  UnlockMission: z.number(),
  BonusDamageTypeList: z.array(z.string()),
  BonusBaseTypeList: z.array(z.string()),
})
export type ExpeditionDataValue = z.infer<typeof ExpeditionDataValueSchema>
