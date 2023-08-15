import * as z from 'zod'

export const HudUiInfoTemplateValueSchema = z.object({
  ID: z.number(),
  HideHudUINodeList: z.array(z.string()),
  ShowHudUINodeList: z.array(z.string()),
  LockGotoTypeList: z.array(z.string()),
  LockInputActionName: z.array(z.string()),
  ActionOperationSetID: z.number(),
})
export type HudUiInfoTemplateValue = z.infer<
  typeof HudUiInfoTemplateValueSchema
>
