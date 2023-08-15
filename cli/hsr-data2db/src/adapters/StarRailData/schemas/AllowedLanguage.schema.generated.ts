import * as z from "zod";

export const CnSchema = z.object({
  Area: z.string(),
  Type: z.number(),
  LanguageList: z.array(z.string()),
  DefaultLanguage: z.string(),
});
export type Cn = z.infer<typeof CnSchema>;

export const AllowedLanguageSchema = z.object({
  cn: z.record(z.string(), CnSchema),
  os: z.record(z.string(), CnSchema),
});
export type AllowedLanguage = z.infer<typeof AllowedLanguageSchema>;
