import * as z from 'zod'

export const CategorySchema = z.object({
  Hash: z.number(),
})
export type Category = z.infer<typeof CategorySchema>

export const PerformanceCategoryDataValueSchema = z.object({
  CategoryID: z.number(),
  Category: CategorySchema,
  IconPath: z.string(),
  isSubCategory: z.union([z.boolean(), z.null()]).optional(),
})
export type PerformanceCategoryDataValue = z.infer<
  typeof PerformanceCategoryDataValueSchema
>
