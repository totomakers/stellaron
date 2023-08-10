import * as z from "zod";

export const PropertyNameSchema = z.object({
  Hash: z.number(),
});
export type PropertyName = z.infer<typeof PropertyNameSchema>;

export const AvatarPropertyConfigValueSchema = z.object({
  PropertyType: z.string(),
  PropertyName: PropertyNameSchema,
  PropertyNameSkillTree: PropertyNameSchema,
  PropertyNameRelic: PropertyNameSchema,
  PropertyNameFilter: PropertyNameSchema,
  IsDisplay: z.union([z.boolean(), z.null()]).optional(),
  isBattleDisplay: z.union([z.boolean(), z.null()]).optional(),
  Order: z.number(),
  IconPath: z.string(),
  MainRelicFilter: z.union([z.number(), z.null()]).optional(),
  SubRelicFilter: z.union([z.number(), z.null()]).optional(),
  PropertyInstructionID: z.union([z.number(), z.null()]).optional(),
  PropertyClassify: z.union([z.number(), z.null()]).optional(),
});
export type AvatarPropertyConfigValue = z.infer<
  typeof AvatarPropertyConfigValueSchema
>;
