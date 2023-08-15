import * as z from "zod";

export const BlackSchema = z.enum(["Full", "NoPost", "NoPre", "NoPrePost"]);
export type Black = z.infer<typeof BlackSchema>;

export const PerformanceCharacterSchema = z.enum([
  "",
  "NPC_Avatar_Lad_DanHeng_00",
]);
export type PerformanceCharacter = z.infer<typeof PerformanceCharacterSchema>;

export const PerformanceDValueSchema = z.object({
  PerformanceID: z.number(),
  PerformancePath: z.string(),
  IsSkip: z.union([z.boolean(), z.null()]).optional(),
  PerformanceCharacter: PerformanceCharacterSchema,
  StartBlack: z.union([BlackSchema, z.null()]).optional(),
  EndBlack: z.union([BlackSchema, z.null()]).optional(),
  PlaneID: z.number(),
  FloorID: z.number(),
  IsChangePlayer: z.union([z.boolean(), z.null()]).optional(),
  EndWithCrack: z.union([z.boolean(), z.null()]).optional(),
});
export type PerformanceDValue = z.infer<typeof PerformanceDValueSchema>;
