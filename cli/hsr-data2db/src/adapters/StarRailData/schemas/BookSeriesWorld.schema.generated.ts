import * as z from 'zod'

export const BookSeriesWorldTextmapIdSchema = z.object({
  Hash: z.number(),
})
export type BookSeriesWorldTextmapId = z.infer<
  typeof BookSeriesWorldTextmapIdSchema
>

export const BookSeriesWorldValueSchema = z.object({
  BookSeriesWorld: z.number(),
  BookSeriesWorldTextmapID: BookSeriesWorldTextmapIdSchema,
  BookSeriesWorldIconPath: z.string(),
  BookSeriesWorldBackgroundPath: z.string(),
})
export type BookSeriesWorldValue = z.infer<typeof BookSeriesWorldValueSchema>
