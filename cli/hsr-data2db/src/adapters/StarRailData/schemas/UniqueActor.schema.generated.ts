import * as z from "zod";

export const UniqueActorValueSchema = z.object({
  UniqueName: z.string(),
  ActorID: z.string(),
});
export type UniqueActorValue = z.infer<typeof UniqueActorValueSchema>;
