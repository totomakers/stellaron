import * as z from "zod";

export const EventContentTextIdSchema = z.object({
  Hash: z.number(),
});
export type EventContentTextId = z.infer<typeof EventContentTextIdSchema>;

export const EventMuseumItemConfigValueSchema = z.object({
  EventMuseumItemID: z.number(),
  MuseumItemID: z.number(),
  MissionID: z.number(),
  EventContentTextID: EventContentTextIdSchema,
  MissionStartString: z.string(),
  ForceComplete: z.union([z.boolean(), z.null()]).optional(),
  IsTargetReward: z.union([z.boolean(), z.null()]).optional(),
});
export type EventMuseumItemConfigValue = z.infer<
  typeof EventMuseumItemConfigValueSchema
>;
