import * as z from 'zod'

export const CommentSchema = z.object({
  Hash: z.number(),
})
export type Comment = z.infer<typeof CommentSchema>

export const MuseumCommentsValueSchema = z.object({
  CommentID: z.number(),
  AreaID: z.number(),
  IsPositive: z.union([z.boolean(), z.null()]).optional(),
  CommentName: CommentSchema,
  CommentContent: CommentSchema,
  CommentIconPath: z.string(),
})
export type MuseumCommentsValue = z.infer<typeof MuseumCommentsValueSchema>
