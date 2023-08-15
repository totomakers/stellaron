import * as z from 'zod'

export const TypeSchema = z.enum(['INT'])
export type Type = z.infer<typeof TypeSchema>

export const PunkLordPreparePoolSwitchValueSchema = z.object({
  Type: z.string(),
  BoolValue: z.boolean(),
})
export type PunkLordPreparePoolSwitchValue = z.infer<
  typeof PunkLordPreparePoolSwitchValueSchema
>

export const PunkLordPreparePoolSwitchSchema = z.object({
  ConstValueName: z.string(),
  Value: PunkLordPreparePoolSwitchValueSchema,
})
export type PunkLordPreparePoolSwitch = z.infer<
  typeof PunkLordPreparePoolSwitchSchema
>

export const PunkLordAutoSupplyMonsterNumClassSchema = z.object({
  ConstValueName: z.string(),
  Value: ValueSchema,
})
export type PunkLordAutoSupplyMonsterNumClass = z.infer<
  typeof PunkLordAutoSupplyMonsterNumClassSchema
>

export const ValueSchema = z.object({
  Type: TypeSchema,
  IntValue: z.number(),
})
export type Value = z.infer<typeof ValueSchema>

export const PunkLordActivityPanelRewardValueSchema = z.object({
  Type: z.string(),
  ArrayValue: z.array(ValueSchema),
})
export type PunkLordActivityPanelRewardValue = z.infer<
  typeof PunkLordActivityPanelRewardValueSchema
>

export const PunkLordActivityPanelRewardClassSchema = z.object({
  ConstValueName: z.string(),
  Value: PunkLordActivityPanelRewardValueSchema,
})
export type PunkLordActivityPanelRewardClass = z.infer<
  typeof PunkLordActivityPanelRewardClassSchema
>

export const ActivityConstantPunkLordSchema = z.object({
  PunkLord_Search_Count: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Battle_Count: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Support_Limit: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Support_RecoverTime: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_MonsterShare_MaxNum: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_MonsterList_Limit: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_StrangerPool_Threshold: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_PreparePool_Threshold: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_PreparePool_Fit_Num: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_PreparePool_Switch: PunkLordPreparePoolSwitchSchema,
  PunkLord_BattleReport_KillList_Limit: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_BattleReport_FightList_Limit:
    PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_BattleReport_FailList_Limit: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_RewardDecline_Level: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Daily_QuestList: PunkLordActivityPanelRewardClassSchema,
  PunkLord_BattleTime_Limit: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Available_WorldLevel: PunkLordActivityPanelRewardClassSchema,
  PunkLord_MonsterData_Refresh_CD: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Operation_CD: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Record_Time: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_OverBonus_Reward: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_OverBonus_DropList: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_OverBonus_DropDisplayItem: PunkLordActivityPanelRewardClassSchema,
  PunkLord_OverBonus_Point: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_OverBonus_Reward_Limit: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Prize_Item: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Search_Time: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Activity_Panel_Reward: PunkLordActivityPanelRewardClassSchema,
  PunkLord_Mission_Unlock: PunkLordActivityPanelRewardClassSchema,
  PunkLord_Stamina_Charge: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Support_Daily: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_PowerAttack_Buff: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_PowerAttack_Cost_Num: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_PrizeItem_Score: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_BattleRecord_Request_PerSecond:
    PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_Repaly_Max_Limit: PunkLordAutoSupplyMonsterNumClassSchema,
  PunkLord_AutoSupply_Monster_Num: PunkLordAutoSupplyMonsterNumClassSchema,
})
export type ActivityConstantPunkLord = z.infer<
  typeof ActivityConstantPunkLordSchema
>
