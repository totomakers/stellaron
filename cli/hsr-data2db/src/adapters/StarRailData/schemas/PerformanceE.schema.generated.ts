import * as z from 'zod'

export const PerformanceCharacterSchema = z.enum([
  '',
  'NPC_Avatar_Boy_Yanqing_00',
  'NPC_Avatar_Lad_DanHeng_00',
])
export type PerformanceCharacter = z.infer<typeof PerformanceCharacterSchema>

export const StartBlackSchema = z.enum(['NoPre', 'NoPrePost'])
export type StartBlack = z.infer<typeof StartBlackSchema>

export const PerformanceEValueSchema = z.object({
  PerformanceID: z.number(),
  PerformancePath: z.string(),
  PerformanceCharacter: PerformanceCharacterSchema,
  PlaneID: z.union([z.number(), z.null()]).optional(),
  FloorID: z.union([z.number(), z.null()]).optional(),
  IsIntroDialogue: z.union([z.boolean(), z.null()]).optional(),
  IsSkip: z.union([z.boolean(), z.null()]).optional(),
  IsChangePlayer: z.union([z.boolean(), z.null()]).optional(),
  EndWithCrack: z.union([z.boolean(), z.null()]).optional(),
  StartBlack: z.union([StartBlackSchema, z.null()]).optional(),
  EndBlack: z.union([z.null(), z.string()]).optional(),
})
export type PerformanceEValue = z.infer<typeof PerformanceEValueSchema>
