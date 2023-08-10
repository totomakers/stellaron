import * as z from "zod";

export const TypeSchema = z.enum([
  "AreaLevel",
  "ExhibitCnt",
  "PerfectTurn",
  "StuffCnt",
]);
export type Type = z.infer<typeof TypeSchema>;

export const MuseumMissionValueSchema = z.object({
  MuseumMissionID: z.number(),
  Type: TypeSchema,
  TypeParameter: z.array(z.number()),
});
export type MuseumMissionValue = z.infer<typeof MuseumMissionValueSchema>;
