import * as z from "zod";

export const ExpeditionTeamValueSchema = z.object({
  TeamID: z.number(),
  UnlockMission: z.union([z.number(), z.null()]).optional(),
});
export type ExpeditionTeamValue = z.infer<typeof ExpeditionTeamValueSchema>;
