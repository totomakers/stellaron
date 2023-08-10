import * as z from "zod";

export const AngrySchema = z.object({
  PamMood: z.string(),
  MaxMoodPoint: z.number(),
  PerformanceID: z.number(),
  EmotionClipPath: z.string(),
  MinMoodPoint: z.union([z.number(), z.null()]).optional(),
});
export type Angry = z.infer<typeof AngrySchema>;

export const PamMoodSchema = z.object({
  Happy: AngrySchema,
  Like: AngrySchema,
  Pleasure: AngrySchema,
  Normal: AngrySchema,
  Sad: AngrySchema,
  Confuse: AngrySchema,
  Angry: AngrySchema,
});
export type PamMood = z.infer<typeof PamMoodSchema>;
