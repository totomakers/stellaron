import * as z from "zod";

export const PassengerBehaviorConfigValueSchema = z.object({
  BehaviorID: z.number(),
  FloorID: z.number(),
  AnchorID: z.number(),
  NPCGroupID: z.number(),
  NPCID: z.number(),
  NPCOverrideConfig: z.string(),
});
export type PassengerBehaviorConfigValue = z.infer<
  typeof PassengerBehaviorConfigValueSchema
>;
