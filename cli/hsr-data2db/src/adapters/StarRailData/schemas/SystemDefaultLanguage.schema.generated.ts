import * as z from "zod";

export const ChtSchema = z.object({
  SystemLanguage: z.string(),
  DefaultTextLanguage: z.string(),
  DefaultAudioLanguage: z.string(),
});
export type Cht = z.infer<typeof ChtSchema>;

export const SystemDefaultLanguageSchema = z.object({
  cn: ChtSchema,
  cht: ChtSchema,
  en: ChtSchema,
  kr: ChtSchema,
  jp: ChtSchema,
  es: ChtSchema,
  ru: ChtSchema,
  th: ChtSchema,
  vi: ChtSchema,
  id: ChtSchema,
  fr: ChtSchema,
  de: ChtSchema,
  pt: ChtSchema,
});
export type SystemDefaultLanguage = z.infer<typeof SystemDefaultLanguageSchema>;
