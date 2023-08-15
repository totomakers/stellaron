import * as z from 'zod'

export const CocoonSchema = z.object({
  MultipleDropType: z.string(),
  UnlockID: z.number(),
  SignIconPath: z.string(),
})
export type Cocoon = z.infer<typeof CocoonSchema>

export const MultipleDropFarmTypeSchema = z.object({
  COCOON: CocoonSchema,
  COCOON2: CocoonSchema,
  ELEMENT: CocoonSchema,
  RELIC: CocoonSchema,
  COCOON3: CocoonSchema,
  ROGUE: CocoonSchema,
})
export type MultipleDropFarmType = z.infer<typeof MultipleDropFarmTypeSchema>
