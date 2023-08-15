import * as z from 'zod'

export const MailSchema = z.object({
  Hash: z.number(),
})
export type Mail = z.infer<typeof MailSchema>

export const SysMailConfigValueSchema = z.object({
  MailID: z.number(),
  MailTitle: MailSchema,
  MailSender: MailSchema,
  MailDetail: MailSchema,
  MailLifeTime: z.number(),
})
export type SysMailConfigValue = z.infer<typeof SysMailConfigValueSchema>
