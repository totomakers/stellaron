import * as z from "zod";

export const VoiceTypeSchema = z.enum([
  "Archive",
  "Cutscene",
  "NPC_Far",
  "NPC_Near",
  "NPC_Normal",
]);
export type VoiceType = z.infer<typeof VoiceTypeSchema>;

export const VoiceConfigValueSchema = z.object({
  VoiceID: z.number(),
  IsPlayerInvolved: z.union([z.boolean(), z.null()]).optional(),
  VoicePath: z.string(),
  VoiceType: z.union([VoiceTypeSchema, z.null()]).optional(),
});
export type VoiceConfigValue = z.infer<typeof VoiceConfigValueSchema>;
