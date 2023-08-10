import * as z from "zod";

export const BookSeriesSchema = z.object({
  Hash: z.number(),
});
export type BookSeries = z.infer<typeof BookSeriesSchema>;

export const BookSeriesConfigValueSchema = z.object({
  BookSeriesID: z.number(),
  BookSeries: BookSeriesSchema,
  BookSeriesComments: BookSeriesSchema,
  BookSeriesNum: z.number(),
  BookSeriesWorld: z.number(),
  IsShowInBookshelf: z.union([z.boolean(), z.null()]).optional(),
});
export type BookSeriesConfigValue = z.infer<typeof BookSeriesConfigValueSchema>;
