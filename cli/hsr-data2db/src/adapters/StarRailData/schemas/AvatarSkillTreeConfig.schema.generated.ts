import * as z from "zod";

export const AnchorSchema = z.enum([
  "Point01",
  "Point02",
  "Point03",
  "Point04",
  "Point05",
  "Point06",
  "Point07",
  "Point08",
  "Point09",
  "Point10",
  "Point11",
  "Point12",
  "Point13",
  "Point14",
  "Point15",
  "Point16",
  "Point17",
  "Point18",
]);
export type Anchor = z.infer<typeof AnchorSchema>;

export const PropertyTypeSchema = z.enum([
  "AttackAddedRatio",
  "CriticalChanceBase",
  "CriticalDamageBase",
  "DefenceAddedRatio",
  "FireAddedRatio",
  "HPAddedRatio",
  "IceAddedRatio",
  "ImaginaryAddedRatio",
  "PhysicalAddedRatio",
  "QuantumAddedRatio",
  "StatusProbabilityBase",
  "StatusResistanceBase",
  "ThunderAddedRatio",
  "WindAddedRatio",
]);
export type PropertyType = z.infer<typeof PropertyTypeSchema>;

export const StatusAddListSchema = z.object({
  PropertyType: PropertyTypeSchema,
  Value: ParamListSchema,
});
export type StatusAddList = z.infer<typeof StatusAddListSchema>;

export const PointTriggerKeySchema = z.object({
  Hash: z.number(),
});
export type PointTriggerKey = z.infer<typeof PointTriggerKeySchema>;

export const ParamListSchema = z.object({
  Value: z.number(),
});
export type ParamList = z.infer<typeof ParamListSchema>;

export const MaterialListSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
});
export type MaterialList = z.infer<typeof MaterialListSchema>;

export const AvatarSkillTreeConfigValueSchema = z.object({
  PointID: z.number(),
  Level: z.number(),
  AvatarID: z.number(),
  PointType: z.number(),
  Anchor: AnchorSchema,
  MaxLevel: z.number(),
  DefaultUnlock: z.union([z.boolean(), z.null()]).optional(),
  PrePoint: z.array(z.number()),
  StatusAddList: z.array(StatusAddListSchema),
  MaterialList: z.array(MaterialListSchema),
  LevelUpSkillID: z.array(z.number()),
  IconPath: z.string(),
  PointName: z.string(),
  PointDesc: z.string(),
  AbilityName: z.string(),
  PointTriggerKey: PointTriggerKeySchema,
  ParamList: z.array(ParamListSchema),
  AvatarPromotionLimit: z.union([z.number(), z.null()]).optional(),
  AvatarLevelLimit: z.union([z.number(), z.null()]).optional(),
});
export type AvatarSkillTreeConfigValue = z.infer<
  typeof AvatarSkillTreeConfigValueSchema
>;
