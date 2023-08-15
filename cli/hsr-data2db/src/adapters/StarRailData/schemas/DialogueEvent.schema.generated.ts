import * as z from 'zod'

export const ConditionNameSchema = z.enum(['CompareRogueBuffNumberInGroup', ''])
export type ConditionName = z.infer<typeof ConditionNameSchema>

export const CostTypeSchema = z.enum([
  'CostHpCurrentPercent',
  'CostHpMaxPercent',
  'CostItemPercent',
  'CostItemValue',
])
export type CostType = z.infer<typeof CostTypeSchema>

export const EffectTypeSchema = z.enum([
  'GetAllRogueBuffInGroup',
  'GetItem',
  'GetRogueMiracle',
  'RecoverLineup',
  'TriggerBattle',
  'TriggerDialogueEventList',
  'TriggerRandomEvent',
  'TriggerRandomResult',
  'TriggerRogueBuffReforge',
  'TriggerRogueBuffSelect',
  'TriggerRogueMiracleSelect',
  'TriggerRogueMiracleTrade',
  'UpRogueBuffLevel',
])
export type EffectType = z.infer<typeof EffectTypeSchema>

export const EventSchema = z.object({
  Hash: z.number(),
})
export type Event = z.infer<typeof EventSchema>

export const ConditionParamSchema = z.object({
  BuffGroupID: z.union([z.number(), z.null()]).optional(),
  Number: z.union([z.number(), z.null()]).optional(),
})
export type ConditionParam = z.infer<typeof ConditionParamSchema>

export const DialogueEventValueSchema = z.object({
  EventID: z.number(),
  EventTitle: EventSchema,
  EventDesc: EventSchema,
  EventDetailDesc: EventSchema,
  EffectType: z.union([EffectTypeSchema, z.null()]).optional(),
  EffectParamList: z.array(z.number()),
  CostParamList: z.array(z.number()),
  ConditionName: ConditionNameSchema,
  ConditionParam: ConditionParamSchema,
  CostType: z.union([CostTypeSchema, z.null()]).optional(),
  DescValue: z.union([z.number(), z.null()]).optional(),
  DynamicContentID: z.union([z.number(), z.null()]).optional(),
})
export type DialogueEventValue = z.infer<typeof DialogueEventValueSchema>
