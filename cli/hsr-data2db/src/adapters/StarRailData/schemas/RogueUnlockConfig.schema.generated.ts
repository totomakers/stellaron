import * as z from "zod";

export const RogueUnlockDetailSchema = z.object({
  Hash: z.number(),
});
export type RogueUnlockDetail = z.infer<typeof RogueUnlockDetailSchema>;

export const RogueUnlockConfigValueSchema = z.object({
  RogueUnlockID: z.number(),
  UnlockFinishWay: z.number(),
  RogueUnlockDetail: RogueUnlockDetailSchema,
});
export type RogueUnlockConfigValue = z.infer<
  typeof RogueUnlockConfigValueSchema
>;
