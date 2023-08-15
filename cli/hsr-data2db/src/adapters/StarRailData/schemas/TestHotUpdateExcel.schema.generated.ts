import * as z from 'zod'

export const TestHotUpdateExcelValueSchema = z.object({
  AvatarID: z.number(),
  AvatarName: z.string(),
})
export type TestHotUpdateExcelValue = z.infer<
  typeof TestHotUpdateExcelValueSchema
>
