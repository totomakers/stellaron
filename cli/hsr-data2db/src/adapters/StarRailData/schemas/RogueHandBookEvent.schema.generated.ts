import * as z from 'zod'

export const EventSchema = z.object({
  Hash: z.number(),
})
export type Event = z.infer<typeof EventSchema>

export const RogueHandBookEventValueSchema = z.object({
  EventID: z.number(),
  EventTitle: EventSchema,
  EventType: EventSchema,
  EventDesc: EventSchema,
  EventImage: z.string(),
  EventReward: z.number(),
  Order: z.number(),
})
export type RogueHandBookEventValue = z.infer<
  typeof RogueHandBookEventValueSchema
>
