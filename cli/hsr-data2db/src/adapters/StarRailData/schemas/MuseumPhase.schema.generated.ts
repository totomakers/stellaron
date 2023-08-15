import * as z from "zod";

export const PhaseSchema = z.object({
  Hash: z.number(),
});
export type Phase = z.infer<typeof PhaseSchema>;

export const MuseumPhaseValueSchema = z.object({
  MuseumPhaseID: z.number(),
  RenewPointCost: z.number(),
  UnlockMissionID: z.union([z.number(), z.null()]).optional(),
  UnlockAreaID: z.union([z.number(), z.null()]).optional(),
  PhaseQuestID: z.number(),
  PhaseTextID: PhaseSchema,
  PhaseIconPath: z.string(),
  PhaseName: PhaseSchema,
  PhaseFund: z.union([z.number(), z.null()]).optional(),
});
export type MuseumPhaseValue = z.infer<typeof MuseumPhaseValueSchema>;
