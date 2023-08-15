import * as z from 'zod'

export const GmAccountConfigSchema = z.object({})
export type GmAccountConfig = z.infer<typeof GmAccountConfigSchema>
