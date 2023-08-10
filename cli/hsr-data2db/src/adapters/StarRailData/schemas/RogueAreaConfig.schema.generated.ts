import * as z from "zod";

export const RecommendNatureSchema = z.enum([
  "Fire",
  "Ice",
  "Imaginary",
  "Physical",
  "Quantum",
  "Thunder",
  "Wind",
]);
export type RecommendNature = z.infer<typeof RecommendNatureSchema>;

export const MonsterDisplayItemListSchema = z.object({
  ItemID: z.number(),
});
export type MonsterDisplayItemList = z.infer<
  typeof MonsterDisplayItemListSchema
>;

export const DisplayItemListSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.union([z.number(), z.null()]).optional(),
});
export type DisplayItemList = z.infer<typeof DisplayItemListSchema>;

export const AreaNameIdSchema = z.object({
  Hash: z.number(),
});
export type AreaNameId = z.infer<typeof AreaNameIdSchema>;

export const RogueAreaConfigValueSchema = z.object({
  RogueAreaID: z.number(),
  Difficulty: z.number(),
  AreaEnvironment: z.array(z.any()),
  RecommendLevel: z.number(),
  RecommendNature: z.array(RecommendNatureSchema),
  AreaNameID: AreaNameIdSchema,
  AreaIcon: z.string(),
  AreaFigure: z.string(),
  DisplayMonsterMap: z.record(z.string(), z.number()),
  DisplayMonsterMap2: z.record(z.string(), z.number()),
  MapDisplayItemList: z.array(DisplayItemListSchema),
  ChestDisplayItemList: z.array(DisplayItemListSchema),
  MonsterDisplayItemList: z.array(MonsterDisplayItemListSchema),
  ScoreMap: z.record(z.string(), z.number()),
  AreaProgress: z.union([z.number(), z.null()]).optional(),
  FirstReward: z.union([z.number(), z.null()]).optional(),
  UnlockID: z.union([z.number(), z.null()]).optional(),
  RecommendSkillTreePoints: z.union([z.number(), z.null()]).optional(),
});
export type RogueAreaConfigValue = z.infer<typeof RogueAreaConfigValueSchema>;
