import * as z from 'zod'

export const DialogueTypeSchema = z.enum(['Event', 'Story'])
export type DialogueType = z.infer<typeof DialogueTypeSchema>

export const TriggerTypeSchema = z.enum(['Single'])
export type TriggerType = z.infer<typeof TriggerTypeSchema>

export const RogueNpcValueSchema = z.object({
  RogueNPCID: z.number(),
  NPCID: z.number(),
  TriggerType: TriggerTypeSchema,
  DialogueType: DialogueTypeSchema,
})
export type RogueNpcValue = z.infer<typeof RogueNpcValueSchema>
