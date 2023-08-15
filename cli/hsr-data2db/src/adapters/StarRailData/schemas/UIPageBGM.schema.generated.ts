import * as z from 'zod'

export const BattleLineupUiSchema = z.object({
  PagePrefab: z.string(),
  BGMEvent: z.string(),
})
export type BattleLineupUi = z.infer<typeof BattleLineupUiSchema>

export const UiPageBgmSchema = z.object({
  BattleLineupUI: BattleLineupUiSchema,
  RenderTestPage: BattleLineupUiSchema,
  RenderTestPage2: BattleLineupUiSchema,
  RenderTestPage3: BattleLineupUiSchema,
})
export type UiPageBgm = z.infer<typeof UiPageBgmSchema>
