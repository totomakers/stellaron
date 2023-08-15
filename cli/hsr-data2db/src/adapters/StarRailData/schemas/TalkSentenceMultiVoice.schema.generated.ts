import * as z from 'zod'

export const TalkSentenceMultiVoiceValueSchema = z.object({
  TalkSentenceID: z.number(),
  VoiceIDList: z.array(z.number()),
})
export type TalkSentenceMultiVoiceValue = z.infer<
  typeof TalkSentenceMultiVoiceValueSchema
>
