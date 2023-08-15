import * as z from 'zod'

export const StringValueSchema = z.enum(['LabelID', 'PID'])
export type StringValue = z.infer<typeof StringValueSchema>

export const ArrayValueTypeSchema = z.enum(['INT', 'STRING'])
export type ArrayValueType = z.infer<typeof ArrayValueTypeSchema>

export const ParamsTypeSchema = z.enum(['ARRAY'])
export type ParamsType = z.infer<typeof ParamsTypeSchema>

export const ArrayValueSchema = z.object({
  Type: ArrayValueTypeSchema,
  StringValue: z.union([StringValueSchema, z.null()]).optional(),
  IntValue: z.union([z.number(), z.null()]).optional(),
})
export type ArrayValue = z.infer<typeof ArrayValueSchema>

export const ParamsSchema = z.object({
  Type: ParamsTypeSchema,
  ArrayValue: z.array(ArrayValueSchema),
})
export type Params = z.infer<typeof ParamsSchema>

export const ClientLogConfigValueSchema = z.object({
  ID: z.number(),
  Actionid: z.number(),
  Params: ParamsSchema,
  IsWhiteMode: z.union([z.boolean(), z.null()]).optional(),
})
export type ClientLogConfigValue = z.infer<typeof ClientLogConfigValueSchema>
