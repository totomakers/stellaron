import * as z from "zod";

export const NpcSeriesValueSchema = z.object({
  SeriesID: z.number(),
});
export type NpcSeriesValue = z.infer<typeof NpcSeriesValueSchema>;
