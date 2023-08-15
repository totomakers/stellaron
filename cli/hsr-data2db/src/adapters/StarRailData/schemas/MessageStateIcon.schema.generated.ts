import * as z from 'zod'

export const FinishedSchema = z.object({
  ID: z.string(),
  IconPath: z.string(),
})
export type Finished = z.infer<typeof FinishedSchema>

export const MessageStateIconSchema = z.object({
  Normal: FinishedSchema,
  WaitingReply: FinishedSchema,
  Finished: FinishedSchema,
  HasMission: FinishedSchema,
})
export type MessageStateIcon = z.infer<typeof MessageStateIconSchema>
