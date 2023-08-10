import * as z from "zod";

export const EffectTypeSchema = z.enum(["LockAround", "ShowAtBegining"]);
export type EffectType = z.infer<typeof EffectTypeSchema>;

export const GridTypeSchema = z.enum([
  "Avatar",
  "Enemy",
  "FinalDoor",
  "Item",
  "ItemRandom",
  "Key",
  "KeyDoor",
  "Normal",
  "TrialAvatarRandom",
]);
export type GridType = z.infer<typeof GridTypeSchema>;

export const DescSchema = z.object({
  Hash: z.number(),
});
export type Desc = z.infer<typeof DescSchema>;

export const TreasureDungeonGridValueSchema = z.object({
  GridID: z.number(),
  GridType: GridTypeSchema,
  TypeParam: z.array(z.number()),
  Name: DescSchema,
  Desc: DescSchema,
  IconPath: z.string(),
  IconPath2D: z.string(),
  TutorialTriggerString: z.string(),
  ParamInt: z.union([z.number(), z.null()]).optional(),
  TutorialTriggerType: z.union([z.number(), z.null()]).optional(),
  EffectType: z.union([EffectTypeSchema, z.null()]).optional(),
  OpenBuff: z.union([z.number(), z.null()]).optional(),
  ReplaceGridID: z.union([z.number(), z.null()]).optional(),
  GridSubType: z.union([z.number(), z.null()]).optional(),
});
export type TreasureDungeonGridValue = z.infer<
  typeof TreasureDungeonGridValueSchema
>;
