import * as z from 'zod'

export const ItemComposeTypeValueSchema = z.object({
  TypeID: z.number(),
  TypeTextmapID: z.string(),
  TypeIconPath: z.string(),
  IsMainType: z.union([z.boolean(), z.null()]).optional(),
  MainTypeOrder: z.union([z.number(), z.null()]).optional(),
  UnlockDescribe: z.string(),
  UnlockID: z.union([z.number(), z.null()]).optional(),
  MainTypeID: z.union([z.number(), z.null()]).optional(),
})
export type ItemComposeTypeValue = z.infer<typeof ItemComposeTypeValueSchema>
