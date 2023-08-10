import * as z from "zod";

export const DialogueIconValueSchema = z.object({
  Type: z.string(),
  IconPath: z.string(),
});
export type DialogueIconValue = z.infer<typeof DialogueIconValueSchema>;
