import * as z from 'zod'

export const DescSchema = z.object({
  Hash: z.number(),
})
export type Desc = z.infer<typeof DescSchema>

export const DecalConfigValueSchema = z.object({
  DecalID: z.number(),
  Comment: z.string(),
  TextureMapPath: z.string(),
  Name: DescSchema,
  Desc: DescSchema,
  IconPath: z.string(),
  FigurePath: z.string(),
  BgPath: z.string(),
  UnlockMission: z.number(),
})
export type DecalConfigValue = z.infer<typeof DecalConfigValueSchema>
