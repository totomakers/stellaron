import * as z from 'zod'

export const DefaultMouseTypeSchema = z.enum([
  '',
  'LeftButton',
  'NegativeScrollWheel',
  'NegativeX',
  'NegativeY',
  'PositiveScrollWheel',
  'PositiveX',
  'PositiveY',
  'RightButton',
])
export type DefaultMouseType = z.infer<typeof DefaultMouseTypeSchema>

export const ActionTextmapIdSchema = z.object({
  Hash: z.number(),
})
export type ActionTextmapId = z.infer<typeof ActionTextmapIdSchema>

export const InControlActionMapValueSchema = z.object({
  actionName: z.string(),
  actionTextmapID: ActionTextmapIdSchema,
  actionTypeList: z.array(z.number()),
  defaultKey: z.string(),
  defaultMouseType: DefaultMouseTypeSchema,
  defaultInControlTypes: z.array(z.string()),
  FuncGotoIDList: z.array(z.number()),
})
export type InControlActionMapValue = z.infer<
  typeof InControlActionMapValueSchema
>
