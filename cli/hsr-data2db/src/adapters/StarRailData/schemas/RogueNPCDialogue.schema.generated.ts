import * as z from "zod";

export const RogueNpcDialogueValueSchema = z.object({
  RogueNPCID: z.number(),
  DialogueProgress: z.number(),
  DialoguePath: z.string(),
});
export type RogueNpcDialogueValue = z.infer<typeof RogueNpcDialogueValueSchema>;
