import * as z from "zod";

export const EllipsisSchema = z.enum(["…"]);
export type Ellipsis = z.infer<typeof EllipsisSchema>;

export const ShowStringSchema = z.object({
  Hash: z.number(),
});
export type ShowString = z.infer<typeof ShowStringSchema>;

export const ChtSchema = z.object({
  TextLanguageKey: z.string(),
  SDKkey: z.string(),
  LanguageType: z.number(),
  ShowString: ShowStringSchema,
  Font: z.string(),
  CondensedFont: z.string(),
  FontName: z.string(),
  CondensedFontName: z.string(),
  SDFPath: z.string(),
  PCSDFPath: z.string(),
  LogoImgPath: z.string(),
  LanguageCultureCode: z.string(),
  NoLeading: z.string(),
  Ellipsis: EllipsisSchema,
  NoWrap: z.boolean(),
  FontGrowSize: z.union([z.number(), z.null()]).optional(),
});
export type Cht = z.infer<typeof ChtSchema>;

export const AllowedTextLanguageSchema = z.object({
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
export type AllowedTextLanguage = z.infer<typeof AllowedTextLanguageSchema>;
