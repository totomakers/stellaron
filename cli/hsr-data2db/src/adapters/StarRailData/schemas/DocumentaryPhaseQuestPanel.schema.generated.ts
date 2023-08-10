import * as z from "zod";

export const PanelSchema = z.object({
  Hash: z.number(),
});
export type Panel = z.infer<typeof PanelSchema>;

export const DocumentaryPhaseQuestPanelValueSchema = z.object({
  PhaseID: z.number(),
  NextPhase: z.union([z.number(), z.null()]).optional(),
  QuestList: z.array(z.number()),
  PanelTitle: PanelSchema,
  PanelDesc: PanelSchema,
  ExtraQuest: z.number(),
});
export type DocumentaryPhaseQuestPanelValue = z.infer<
  typeof DocumentaryPhaseQuestPanelValueSchema
>;
