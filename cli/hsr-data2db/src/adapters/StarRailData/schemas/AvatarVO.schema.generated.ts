import * as z from 'zod'

export const TestSchema = z.object({
  VOTag: z.string(),
})
export type Test = z.infer<typeof TestSchema>

export const ArlanSchema = z.object({
  VOTag: z.string(),
  ActionBegin: z.number(),
  ActionBeginAdvantage: z.number(),
  ActionBeginHighThreat: z.number(),
  ReceiveHealing: z.number(),
  Revived: z.number(),
  UltraReady: z.union([z.number(), z.null()]).optional(),
  LightHit: z.number(),
  StandBy: z.number(),
})
export type Arlan = z.infer<typeof ArlanSchema>

export const AvatarVoSchema = z.object({
  mar7th: ArlanSchema,
  danheng: ArlanSchema,
  himeko: ArlanSchema,
  welt: ArlanSchema,
  asta: ArlanSchema,
  bronya: ArlanSchema,
  seele: ArlanSchema,
  gepard: ArlanSchema,
  natasha: ArlanSchema,
  pela: ArlanSchema,
  clara: ArlanSchema,
  sampo: ArlanSchema,
  hook: ArlanSchema,
  serval: ArlanSchema,
  kafka: ArlanSchema,
  silverwolf: ArlanSchema,
  arlan: ArlanSchema,
  herta: ArlanSchema,
  playerboy: ArlanSchema,
  playergirl: ArlanSchema,
  playerboy2: ArlanSchema,
  playergirl2: ArlanSchema,
  luocha: ArlanSchema,
  jingyuan: ArlanSchema,
  blade: ArlanSchema,
  sushang: ArlanSchema,
  fuxuan: ArlanSchema,
  tingyun: ArlanSchema,
  qingque: ArlanSchema,
  yanqing: ArlanSchema,
  yukong: ArlanSchema,
  bailu: ArlanSchema,
  danhengil: ArlanSchema,
  luka: ArlanSchema,
  test: TestSchema,
})
export type AvatarVo = z.infer<typeof AvatarVoSchema>
