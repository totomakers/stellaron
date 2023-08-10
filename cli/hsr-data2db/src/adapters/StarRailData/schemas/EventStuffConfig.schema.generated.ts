import * as z from "zod";

export const EventContentTextIdSchema = z.object({
  Hash: z.number(),
});
export type EventContentTextId = z.infer<typeof EventContentTextIdSchema>;

export const EventStuffConfigValueSchema = z.object({
  EventStuffID: z.number(),
  StuffID: z.number(),
  MissionID: z.number(),
  EventContentTextID: EventContentTextIdSchema,
  MissionStartString: z.string(),
});
export type EventStuffConfigValue = z.infer<typeof EventStuffConfigValueSchema>;
