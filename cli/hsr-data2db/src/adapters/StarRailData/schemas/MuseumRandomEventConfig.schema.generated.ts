import * as z from 'zod'

export const EventTypeSchema = z.enum([
  'ExhibitMission',
  'Market',
  'Operate',
  'StuffMission',
])
export type EventType = z.infer<typeof EventTypeSchema>

export const EventSchema = z.object({
  Hash: z.number(),
})
export type Event = z.infer<typeof EventSchema>

export const MuseumRandomEventConfigValueSchema = z.object({
  RandomEventID: z.number(),
  EventType: EventTypeSchema,
  EventTypeParameter: z.array(z.number()),
  TriggerTypeParameter: z.array(z.number()),
  EventTitle: EventSchema,
  Event: EventSchema,
})
export type MuseumRandomEventConfigValue = z.infer<
  typeof MuseumRandomEventConfigValueSchema
>
