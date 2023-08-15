import * as z from 'zod'

export const AreaItemNoTextIdSchema = z.object({
  Hash: z.number(),
})
export type AreaItemNoTextId = z.infer<typeof AreaItemNoTextIdSchema>

export const MuseumAreaConfigValueSchema = z.object({
  AreaID: z.number(),
  MuseumAreaName: AreaItemNoTextIdSchema,
  FirstWorldText: z.string(),
  MuseumAreaTabIcon: z.string(),
  MuseumAreaHintIcon: z.string(),
  AreaItemNoTextID: AreaItemNoTextIdSchema,
})
export type MuseumAreaConfigValue = z.infer<typeof MuseumAreaConfigValueSchema>
