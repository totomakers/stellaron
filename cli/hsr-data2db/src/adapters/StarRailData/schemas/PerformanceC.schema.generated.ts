import * as z from 'zod'

export const BlackSchema = z.enum(['Full', 'NoPost', 'NoPre', 'NoPrePost'])
export type Black = z.infer<typeof BlackSchema>

export const PerformanceCValueSchema = z.object({
  PerformanceID: z.number(),
  PerformancePath: z.string(),
  IsSkip: z.union([z.boolean(), z.null()]).optional(),
  StartBlack: z.union([BlackSchema, z.null()]).optional(),
  EndBlack: z.union([BlackSchema, z.null()]).optional(),
  PlaneID: z.number(),
  FloorID: z.number(),
  EndWithCrack: z.union([z.boolean(), z.null()]).optional(),
})
export type PerformanceCValue = z.infer<typeof PerformanceCValueSchema>
