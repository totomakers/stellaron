import * as z from "zod";

export const RaritySchema = z.enum(["High", "Low", "Mid"]);
export type Rarity = z.infer<typeof RaritySchema>;

export const ShowTypeSchema = z.enum(["HiddenDesc", "ShowAfterFinish"]);
export type ShowType = z.infer<typeof ShowTypeSchema>;

export const ParamListSchema = z.object({
  Value: z.number(),
});
export type ParamList = z.infer<typeof ParamListSchema>;

export const AchievementDescSchema = z.object({
  Hash: z.number(),
});
export type AchievementDesc = z.infer<typeof AchievementDescSchema>;

export const AchievementDataValueSchema = z.object({
  AchievementID: z.number(),
  SeriesID: z.number(),
  QuestID: z.number(),
  LinearQuestID: z.number(),
  AchievementTitle: AchievementDescSchema,
  AchievementDesc: AchievementDescSchema,
  HideAchievementDesc: AchievementDescSchema,
  AchievementDescPS: AchievementDescSchema,
  ParamList: z.array(ParamListSchema),
  Priority: z.number(),
  Rarity: RaritySchema,
  ShowType: z.union([ShowTypeSchema, z.null()]).optional(),
  PSTrophyID: z.string(),
  RecordText: AchievementDescSchema,
  RecordType: z.union([z.null(), z.string()]).optional(),
});
export type AchievementDataValue = z.infer<typeof AchievementDataValueSchema>;
