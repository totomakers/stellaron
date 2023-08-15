import * as z from 'zod'

export const RogueRoomValueSchema = z.object({
  RogueRoomID: z.number(),
  RogueRoomType: z.number(),
  MapEntrance: z.number(),
  GroupID: z.number(),
  GroupWithContent: z.record(z.string(), z.number()),
  RogueRoomSections: z.array(z.number()),
})
export type RogueRoomValue = z.infer<typeof RogueRoomValueSchema>
