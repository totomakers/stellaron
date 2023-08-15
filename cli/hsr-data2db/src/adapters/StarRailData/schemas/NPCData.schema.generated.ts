import * as z from 'zod'

export const LodNameSchema = z.enum([
  'NPC_Avatar',
  'NPC_MonsterLD',
  'NPC_Normal',
])
export type LodName = z.infer<typeof LodNameSchema>

export const SubTypeSchema = z.enum([
  'Avatar',
  'Monster',
  'PlayerAvatar',
  'Special',
])
export type SubType = z.infer<typeof SubTypeSchema>

export const DefaultNpcSchema = z.object({
  Hash: z.number(),
})
export type DefaultNpc = z.infer<typeof DefaultNpcSchema>

export const NpcDataValueSchema = z.object({
  ID: z.number(),
  DefaultNPCName: DefaultNpcSchema,
  ConfigEntityPath: z.string(),
  DefaultNPCTitle: DefaultNpcSchema,
  JsonPath: z.string(),
  DefaultAIPath: z.string(),
  SubType: z.union([SubTypeSchema, z.null()]).optional(),
  LodName: LodNameSchema,
  SeriesID: z.union([z.number(), z.null()]).optional(),
  AnimGroupID: z.union([z.number(), z.null()]).optional(),
})
export type NpcDataValue = z.infer<typeof NpcDataValueSchema>
