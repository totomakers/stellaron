import * as z from 'zod'

export const DialogueSchema = z.object({
  Hash: z.number(),
})
export type Dialogue = z.infer<typeof DialogueSchema>

export const TreasureDungeonAvatarValueSchema = z.object({
  AvatarPickID: z.number(),
  SpecialAvataID: z.number(),
  Dialogue1: DialogueSchema,
  Dialogue2: DialogueSchema,
  Dialogue3: DialogueSchema,
  FigureDiff: z.array(z.number()),
  FigureScale: z.number(),
})
export type TreasureDungeonAvatarValue = z.infer<
  typeof TreasureDungeonAvatarValueSchema
>
