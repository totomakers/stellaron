import * as z from "zod";

export const CutsceneActorValueSchema = z.object({
  ActorID: z.string(),
  ActorModelPath: z.string(),
  ResidentEffectKey: z.string(),
  ResidentPossessionKey: z.string(),
});
export type CutsceneActorValue = z.infer<typeof CutsceneActorValueSchema>;
