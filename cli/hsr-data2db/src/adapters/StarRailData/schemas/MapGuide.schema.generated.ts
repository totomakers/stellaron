import * as z from 'zod'

export const MapGuideNameSchema = z.object({
  Hash: z.number(),
})
export type MapGuideName = z.infer<typeof MapGuideNameSchema>

export const MapGuideValueSchema = z.object({
  ID: z.number(),
  WorldID: z.number(),
  MapGuideName: MapGuideNameSchema,
  SheetID: z.number(),
  SheetType: z.number(),
  MapGuideIconPath: z.string(),
})
export type MapGuideValue = z.infer<typeof MapGuideValueSchema>
