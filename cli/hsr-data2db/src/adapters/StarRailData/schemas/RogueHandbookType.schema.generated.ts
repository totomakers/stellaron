import * as z from 'zod'

export const RogueHandBookSchema = z.object({
  Hash: z.number(),
})
export type RogueHandBook = z.infer<typeof RogueHandBookSchema>

export const RogueHandbookTypeValueSchema = z.object({
  HandBookType: z.number(),
  RogueHandBookType: RogueHandBookSchema,
  RogueHandBookDesc: RogueHandBookSchema,
  HandBookIconPath: z.string(),
})
export type RogueHandbookTypeValue = z.infer<
  typeof RogueHandbookTypeValueSchema
>
