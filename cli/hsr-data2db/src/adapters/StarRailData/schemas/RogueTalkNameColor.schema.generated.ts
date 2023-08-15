import * as z from 'zod'

export const TextmapIdSchema = z.object({
  Hash: z.number(),
})
export type TextmapId = z.infer<typeof TextmapIdSchema>

export const RogueTalkNameColorValueSchema = z.object({
  TextmapID: TextmapIdSchema,
  Color: z.string(),
})
export type RogueTalkNameColorValue = z.infer<
  typeof RogueTalkNameColorValueSchema
>
