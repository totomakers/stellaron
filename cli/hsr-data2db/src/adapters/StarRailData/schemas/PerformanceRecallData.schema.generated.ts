import * as z from 'zod'

export const TypeSchema = z.enum(['FinishMainMission'])
export type Type = z.infer<typeof TypeSchema>

export const UnlockConditionSchema = z.object({
  Type: TypeSchema,
  Param: z.string(),
})
export type UnlockCondition = z.infer<typeof UnlockConditionSchema>

export const NameSchema = z.object({
  Hash: z.number(),
})
export type Name = z.infer<typeof NameSchema>

export const PerformanceRecallDataValueSchema = z.object({
  ID: z.number(),
  Name: NameSchema,
  CategoryID: z.number(),
  ImgPath: z.string(),
  ImgPath_F: z.string(),
  ImgHeightSize: z.union([z.number(), z.null()]).optional(),
  UnlockCondition: z.array(UnlockConditionSchema),
  PerformanceID: z.union([z.number(), z.null()]).optional(),
  isVideo: z.union([z.boolean(), z.null()]).optional(),
  ImgPathWall: z.string(),
  ImgPathWall_F: z.string(),
})
export type PerformanceRecallDataValue = z.infer<
  typeof PerformanceRecallDataValueSchema
>
