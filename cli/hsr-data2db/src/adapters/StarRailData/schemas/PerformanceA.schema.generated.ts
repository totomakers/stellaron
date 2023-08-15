import * as z from 'zod'

export const EndBlackSchema = z.enum(['NoPost', 'NoPre', 'NoPrePost'])
export type EndBlack = z.infer<typeof EndBlackSchema>

export const StartBlackSchema = z.enum(['Full', 'NoPre', 'NoPrePost'])
export type StartBlack = z.infer<typeof StartBlackSchema>

export const PerformanceAValueSchema = z.object({
  PerformanceID: z.number(),
  PerformancePath: z.string(),
  IsSkip: z.union([z.boolean(), z.null()]).optional(),
  StartBlack: z.union([StartBlackSchema, z.null()]).optional(),
  EndWithCrack: z.union([z.boolean(), z.null()]).optional(),
  PlaneID: z.number(),
  FloorID: z.number(),
  EndBlack: z.union([EndBlackSchema, z.null()]).optional(),
})
export type PerformanceAValue = z.infer<typeof PerformanceAValueSchema>
