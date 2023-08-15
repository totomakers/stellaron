import * as z from 'zod'

export const TypeSchema = z.enum(['BattleAddMazeBuff', 'ShowGridsAtBegining'])
export type Type = z.infer<typeof TypeSchema>

export const BattleTargetBounsSchema = z.object({
  Hash: z.number(),
})
export type BattleTargetBouns = z.infer<typeof BattleTargetBounsSchema>

export const TreasureDungeonBuffValueSchema = z.object({
  BuffID: z.number(),
  BuffGroupID: z.union([z.number(), z.null()]).optional(),
  UseTime: z.union([z.number(), z.null()]).optional(),
  Type: z.union([TypeSchema, z.null()]).optional(),
  TypeParam: z.array(z.number()),
  ParamInt: z.union([z.number(), z.null()]).optional(),
  IsSaveNextFloor: z.union([z.boolean(), z.null()]).optional(),
  Name: BattleTargetBounsSchema,
  Desc: BattleTargetBounsSchema,
  BgDesc: BattleTargetBounsSchema,
  DisplayRarity: z.number(),
  FigurePath: z.string(),
  BattleTargetBouns: BattleTargetBounsSchema,
  BattleTargetID: z.union([z.number(), z.null()]).optional(),
  TargetBounsParam: z.union([z.number(), z.null()]).optional(),
})
export type TreasureDungeonBuffValue = z.infer<
  typeof TreasureDungeonBuffValueSchema
>
