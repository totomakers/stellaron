import * as z from 'zod'

export const AekobhcdidiSchema = z.enum(['Brow_00', 'Brow_01', 'Brow_02'])
export type Aekobhcdidi = z.infer<typeof AekobhcdidiSchema>

export const GphjkdlkialSchema = z.enum(['Mouth_00', 'Mouth_01'])
export type Gphjkdlkial = z.infer<typeof GphjkdlkialSchema>

export const ImongaibfodSchema = z.enum(['Eye_00', 'Eye_01', 'Eye_02'])
export type Imongaibfod = z.infer<typeof ImongaibfodSchema>

export const KpjbbpclpkkSchema = z.enum(['Close01_Eye'])
export type Kpjbbpclpkk = z.infer<typeof KpjbbpclpkkSchema>

export const ArtAvatarValueSchema = z.object({
  HJMIGPPJHAG: z.string(),
  LGMPKBGMDMP: z.union([z.null(), z.string()]).optional(),
  AEKOBHCDIDI: AekobhcdidiSchema,
  IMONGAIBFOD: ImongaibfodSchema,
  GPHJKDLKIAL: GphjkdlkialSchema,
  JICHIBPHDML: z.number(),
  PGDMEOBHILH: z.number(),
  OPHMALOJAMF: z.number(),
  KPJBBPCLPKK: KpjbbpclpkkSchema,
  GMBLKLHEDLN: z.number(),
  CCEGJKJFOAO: z.union([z.number(), z.null()]).optional(),
})
export type ArtAvatarValue = z.infer<typeof ArtAvatarValueSchema>
