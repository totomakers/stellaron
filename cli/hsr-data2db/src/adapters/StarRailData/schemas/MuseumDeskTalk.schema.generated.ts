import * as z from 'zod'

export const TriggerTypeSchema = z.enum([
  'EnterOpenDay',
  'Market',
  'ReturnOpenDay',
])
export type TriggerType = z.infer<typeof TriggerTypeSchema>

export const TextIdListSchema = z.object({
  Hash: z.number(),
})
export type TextIdList = z.infer<typeof TextIdListSchema>

export const MuseumDeskTalkValueSchema = z.object({
  TalkID: z.number(),
  TriggerType: TriggerTypeSchema,
  TalkType: z.string(),
  TalkTypeParameter: z.string(),
  TextIDList: z.array(TextIdListSchema),
  Priority: z.number(),
  CustomString: z.string(),
})
export type MuseumDeskTalkValue = z.infer<typeof MuseumDeskTalkValueSchema>
