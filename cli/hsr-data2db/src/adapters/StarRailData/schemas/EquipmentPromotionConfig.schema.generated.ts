import * as z from "zod";

export const PromotionCostListSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
});
export type PromotionCostList = z.infer<typeof PromotionCostListSchema>;

export const BaseSchema = z.object({
  Value: z.number(),
});
export type Base = z.infer<typeof BaseSchema>;

export const EquipmentPromotionConfigValueSchema = z.object({
  EquipmentID: z.number(),
  Promotion: z.number(),
  PromotionCostList: z.array(PromotionCostListSchema),
  PlayerLevelRequire: z.union([z.number(), z.null()]).optional(),
  MaxLevel: z.number(),
  BaseHP: BaseSchema,
  BaseHPAdd: BaseSchema,
  BaseAttack: BaseSchema,
  BaseAttackAdd: BaseSchema,
  BaseDefence: BaseSchema,
  BaseDefenceAdd: BaseSchema,
  WorldLevelRequire: z.union([z.number(), z.null()]).optional(),
});
export type EquipmentPromotionConfigValue = z.infer<
  typeof EquipmentPromotionConfigValueSchema
>;
