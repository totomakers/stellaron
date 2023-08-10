import * as z from "zod";

export const EndBlackSchema = z.enum(["NoPost", "NoPrePost"]);
export type EndBlack = z.infer<typeof EndBlackSchema>;

export const StartBlackSchema = z.enum(["Full", "NoPre", "NoPrePost"]);
export type StartBlack = z.infer<typeof StartBlackSchema>;

export const PerformanceVideoValueSchema = z.object({
  PerformanceID: z.number(),
  PerformancePath: z.string(),
  IsSkip: z.boolean(),
  StartBlack: z.union([StartBlackSchema, z.null()]).optional(),
  EndBlack: z.union([EndBlackSchema, z.null()]).optional(),
  PlaneID: z.number(),
  FloorID: z.number(),
  EndWithCrack: z.union([z.boolean(), z.null()]).optional(),
});
export type PerformanceVideoValue = z.infer<typeof PerformanceVideoValueSchema>;
