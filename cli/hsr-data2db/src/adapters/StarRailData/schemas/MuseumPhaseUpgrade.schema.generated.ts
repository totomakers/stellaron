import * as z from "zod";

export const MuseumPhaseUpgradeValueSchema = z.object({
  MuseumPhaseID: z.number(),
  AreaID: z.number(),
});
export type MuseumPhaseUpgradeValue = z.infer<
  typeof MuseumPhaseUpgradeValueSchema
>;
