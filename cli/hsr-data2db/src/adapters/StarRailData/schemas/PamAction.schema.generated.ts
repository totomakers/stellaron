import * as z from "zod";

export const PamActionValueSchema = z.object({
  PamAction: z.string(),
  AnimGroupName: z.string(),
  MaxMoodPoint: z.number(),
  MaxStrengthPoint: z.number(),
  Weight: z.number(),
  Settle: z.array(z.number()),
  AnyDirection: z.union([z.boolean(), z.null()]).optional(),
  WithoutAnchor: z.union([z.boolean(), z.null()]).optional(),
  PamMood: z.union([z.null(), z.string()]).optional(),
  PerformanceID: z.number(),
  MinMoodPoint: z.union([z.number(), z.null()]).optional(),
  MinStrengthPoint: z.union([z.number(), z.null()]).optional(),
});
export type PamActionValue = z.infer<typeof PamActionValueSchema>;
