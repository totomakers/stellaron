import * as z from 'zod'

export const PlatformTypeSchema = z.enum(['Default', 'Mobile', 'PS'])
export type PlatformType = z.infer<typeof PlatformTypeSchema>

export const DescTextSchema = z.object({
  Hash: z.number(),
})
export type DescText = z.infer<typeof DescTextSchema>

export const DefaultSchema = z.object({
  ID: z.number(),
  PlatformType: PlatformTypeSchema,
  ImagePath: z.string(),
  DescText: DescTextSchema,
})
export type Default = z.infer<typeof DefaultSchema>

export const TutorialGuideDataValueSchema = z.object({
  Default: DefaultSchema,
  PS: z.union([DefaultSchema, z.null()]).optional(),
  Mobile: z.union([DefaultSchema, z.null()]).optional(),
})
export type TutorialGuideDataValue = z.infer<
  typeof TutorialGuideDataValueSchema
>
