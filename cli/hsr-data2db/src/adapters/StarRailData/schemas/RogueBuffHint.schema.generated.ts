import * as z from 'zod'

export const HintTextMapSchema = z.object({
  Hash: z.number(),
})
export type HintTextMap = z.infer<typeof HintTextMapSchema>

export const RogueBuffHintValueSchema = z.object({
  HintID: z.number(),
  HintTextMap: HintTextMapSchema,
})
export type RogueBuffHintValue = z.infer<typeof RogueBuffHintValueSchema>
