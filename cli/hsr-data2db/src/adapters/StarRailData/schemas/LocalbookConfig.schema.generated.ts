import * as z from 'zod'

export const BookSchema = z.object({
  Hash: z.number(),
})
export type Book = z.infer<typeof BookSchema>

export const LocalbookConfigValueSchema = z.object({
  BookID: z.number(),
  BookSeriesID: z.number(),
  BookSeriesInsideID: z.number(),
  BookInsideName: BookSchema,
  BookContent: BookSchema,
  BookDisplayType: z.number(),
  LocalBookImagePath: z.array(z.string()),
})
export type LocalbookConfigValue = z.infer<typeof LocalbookConfigValueSchema>
