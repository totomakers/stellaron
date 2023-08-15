import * as z from 'zod'

export const VisitorBehaviorConfigValueSchema = z.object({
  VisitorID: z.number(),
  BehaviorID: z.number(),
  NPCGroupID: z.number(),
  NPCID: z.number(),
  AnchorID: z.number(),
  NPCOverrideConfig: z.string(),
  PerformanceID: z.number(),
  DefaultPerformanceID: z.number(),
  NpcBubbleTalkSentenceID: z.number(),
})
export type VisitorBehaviorConfigValue = z.infer<
  typeof VisitorBehaviorConfigValueSchema
>
