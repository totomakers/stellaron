import * as z from "zod";

export const CustomSkillTreeKeySchema = z.enum([
  "MaxWithInLevel",
  "None",
  "W0_Standard_20-30",
  "W1_Standard_30-40",
  "W2_Standard_40-50",
  "W3_Standard_50-60",
  "W4_Standard_60-70",
  "W5_Standard_70-80",
]);
export type CustomSkillTreeKey = z.infer<typeof CustomSkillTreeKeySchema>;

export const SkillTreeTemplateSchema = z.enum(["TYPE_CUSTOM"]);
export type SkillTreeTemplate = z.infer<typeof SkillTreeTemplateSchema>;

export const TypeSchema = z.enum(["TYPE_PLOT", "TYPE_TRIAL"]);
export type Type = z.infer<typeof TypeSchema>;

export const SpecialAvatarValueSchema = z.object({
  SpecialAvatarID: z.number(),
  WorldLevel: z.number(),
  PlayerID: z.number(),
  AvatarID: z.number(),
  Type: TypeSchema,
  LevelAreaPrefab: z.string(),
  AnchorName: z.string(),
  Level: z.number(),
  OverrideProperty: z.array(z.any()),
  HaveActionDelay: z.boolean(),
  SkillTreeTemplate: SkillTreeTemplateSchema,
  CustomSkillTreeKey: CustomSkillTreeKeySchema,
  EquipmentID: z.union([z.number(), z.null()]).optional(),
  EquipmentLevel: z.union([z.number(), z.null()]).optional(),
  EquipmentRank: z.union([z.number(), z.null()]).optional(),
  AbilityNameList: z.array(z.string()),
  PlayerJsonPath: z.string(),
  JsonPath: z.string(),
  DefaultAvatarModelPath: z.string(),
  Rank: z.union([z.number(), z.null()]).optional(),
  HasJoinHint: z.union([z.boolean(), z.null()]).optional(),
  IsUseWorldLevel: z.union([z.boolean(), z.null()]).optional(),
  Promotion: z.union([z.number(), z.null()]).optional(),
  EquipmentPromotion: z.union([z.number(), z.null()]).optional(),
  RelicPropertyType: z.union([z.number(), z.null()]).optional(),
  RelicMainValue: z.union([z.number(), z.null()]).optional(),
  RelicSubValue: z.union([z.number(), z.null()]).optional(),
  RelicPropertyTypeExtra: z.union([z.number(), z.null()]).optional(),
  HasLeaveHint: z.union([z.boolean(), z.null()]).optional(),
  IsAutoBattle: z.union([z.boolean(), z.null()]).optional(),
  IsProtected: z.union([z.boolean(), z.null()]).optional(),
});
export type SpecialAvatarValue = z.infer<typeof SpecialAvatarValueSchema>;
