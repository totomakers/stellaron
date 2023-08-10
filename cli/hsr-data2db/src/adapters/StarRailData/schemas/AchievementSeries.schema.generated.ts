import * as z from "zod";

export const SeriesTitleSchema = z.object({
  Hash: z.number(),
});
export type SeriesTitle = z.infer<typeof SeriesTitleSchema>;

export const AchievementSeriesValueSchema = z.object({
  SeriesID: z.number(),
  SeriesTitle: SeriesTitleSchema,
  MainIconPath: z.string(),
  IconPath: z.string(),
  GoldIconPath: z.string(),
  SilverIconPath: z.string(),
  CopperIconPath: z.string(),
  Priority: z.number(),
});
export type AchievementSeriesValue = z.infer<
  typeof AchievementSeriesValueSchema
>;
