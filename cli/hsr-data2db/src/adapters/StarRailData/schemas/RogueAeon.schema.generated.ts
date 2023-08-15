import * as z from 'zod'

export const EffectDesc1Schema = z.object({
  Hash: z.number(),
})
export type EffectDesc1 = z.infer<typeof EffectDesc1Schema>

export const The1Schema = z.object({
  AeonID: z.number(),
  RogueVersion: z.number(),
  Sort: z.number(),
  RogueAeonName: EffectDesc1Schema,
  RogueAeonPathName: EffectDesc1Schema,
  RogueAeonPathName2: EffectDesc1Schema,
  AeonBuffIcon: z.string(),
  AeonImage: z.string(),
  AeonIcon: z.string(),
  AeonFigure: z.string(),
  EffectDesc1: EffectDesc1Schema,
  EffectDesc2: EffectDesc1Schema,
  RogueBuffType: z.number(),
  ArrivedTalkDialogueGroupID: z.number(),
  BattleEventBuffGroup: z.number(),
  BattleEventEnhanceBuffGroup: z.number(),
  UnlockID: z.union([z.number(), z.null()]).optional(),
})
export type The1 = z.infer<typeof The1Schema>

export const RogueAeonValueSchema = z.object({
  '1': The1Schema,
})
export type RogueAeonValue = z.infer<typeof RogueAeonValueSchema>
