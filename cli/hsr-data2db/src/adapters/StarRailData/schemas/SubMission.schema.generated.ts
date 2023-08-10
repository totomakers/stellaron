import * as z from "zod";

export const TextSchema = z.object({
  Hash: z.number(),
});
export type Text = z.infer<typeof TextSchema>;

export const SubMissionValueSchema = z.object({
  SubMissionID: z.number(),
  TargetText: TextSchema,
  DescrptionText: TextSchema,
});
export type SubMissionValue = z.infer<typeof SubMissionValueSchema>;
