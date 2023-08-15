import * as z from 'zod'

export const ArrayValueTypeSchema = z.enum(['INT'])
export type ArrayValueType = z.infer<typeof ArrayValueTypeSchema>

export const PurpleTypeSchema = z.enum(['FLOAT'])
export type PurpleType = z.infer<typeof PurpleTypeSchema>

export const FluffyTypeSchema = z.enum(['STRING'])
export type FluffyType = z.infer<typeof FluffyTypeSchema>

export const StorySkipCloseValueSchema = z.object({
  Type: z.string(),
  BoolValue: z.boolean(),
})
export type StorySkipCloseValue = z.infer<typeof StorySkipCloseValueSchema>

export const StorySkipCloseSchema = z.object({
  ConstValueName: z.string(),
  Value: StorySkipCloseValueSchema,
})
export type StorySkipClose = z.infer<typeof StorySkipCloseSchema>

export const DefaultNicknameChsValueSchema = z.object({
  Type: FluffyTypeSchema,
  StringValue: z.string(),
})
export type DefaultNicknameChsValue = z.infer<
  typeof DefaultNicknameChsValueSchema
>

export const DefaultNicknameChsSchema = z.object({
  ConstValueName: z.string(),
  Value: DefaultNicknameChsValueSchema,
})
export type DefaultNicknameChs = z.infer<typeof DefaultNicknameChsSchema>

export const CombatPowerAvatarBaseValueSchema = z.object({
  Type: PurpleTypeSchema,
  FloatValue: z.number(),
})
export type CombatPowerAvatarBaseValue = z.infer<
  typeof CombatPowerAvatarBaseValueSchema
>

export const CombatPowerAvatarBaseSchema = z.object({
  ConstValueName: z.string(),
  Value: CombatPowerAvatarBaseValueSchema,
})
export type CombatPowerAvatarBase = z.infer<typeof CombatPowerAvatarBaseSchema>

export const BpEquipmentIdValueSchema = z.object({
  Type: z.string(),
  ArrayValue: z.array(ValueSchema),
})
export type BpEquipmentIdValue = z.infer<typeof BpEquipmentIdValueSchema>

export const BpEquipmentIdSchema = z.object({
  ConstValueName: z.string(),
  Value: BpEquipmentIdValueSchema,
})
export type BpEquipmentId = z.infer<typeof BpEquipmentIdSchema>

export const ValueSchema = z.object({
  Type: ArrayValueTypeSchema,
  IntValue: z.number(),
})
export type Value = z.infer<typeof ValueSchema>

export const ActivityDayTimeOffsetSchema = z.object({
  ConstValueName: z.string(),
  Value: ValueSchema,
})
export type ActivityDayTimeOffset = z.infer<typeof ActivityDayTimeOffsetSchema>

export const ConstValueCommonSchema = z.object({
  Equipment_Exp_Recyle_Ratio: ActivityDayTimeOffsetSchema,
  Equipment_Material_Select_Limit: ActivityDayTimeOffsetSchema,
  Exp_SoftCoin_Cost: ActivityDayTimeOffsetSchema,
  SimpleTalk_Text_IntervalTime: CombatPowerAvatarBaseSchema,
  SimpleTalk_Voice_IntervalTime: CombatPowerAvatarBaseSchema,
  SimpleTalk_ProtectTime: CombatPowerAvatarBaseSchema,
  Dialogue_Button_CD: CombatPowerAvatarBaseSchema,
  Prop_Button_CD: CombatPowerAvatarBaseSchema,
  FrameItemRarityPath: DefaultNicknameChsSchema,
  Equipment_Maximum_Num: ActivityDayTimeOffsetSchema,
  Equipment_Maximum_Num_Hard: ActivityDayTimeOffsetSchema,
  PlayerName_Max: ActivityDayTimeOffsetSchema,
  Stamina_Auto_Recover_Interval: ActivityDayTimeOffsetSchema,
  Maze_MP_Max: ActivityDayTimeOffsetSchema,
  Maze_MP_Max_Init: ActivityDayTimeOffsetSchema,
  Maze_MP_Init: ActivityDayTimeOffsetSchema,
  Maze_Refresh_CD: ActivityDayTimeOffsetSchema,
  Maze_Recover_Refresh_CD: ActivityDayTimeOffsetSchema,
  Maze_Recover_Refresh_Times: ActivityDayTimeOffsetSchema,
  Maze_Recover_Refresh_InitialTimes: ActivityDayTimeOffsetSchema,
  Maze_FastRunRatio: CombatPowerAvatarBaseSchema,
  FrameAvatarDamageTypePath: DefaultNicknameChsSchema,
  FrameAvatarRarityPath: DefaultNicknameChsSchema,
  Food_SatietyValue_Limit: ActivityDayTimeOffsetSchema,
  Food_SatietyValue_Reduce_PerBattle: ActivityDayTimeOffsetSchema,
  Food_SatietyValue_Reduce_Interval: ActivityDayTimeOffsetSchema,
  Maze_MonsterAlert_DisplayRange: CombatPowerAvatarBaseSchema,
  UI_SortMomory_Open: StorySkipCloseSchema,
  TeamName_Max: ActivityDayTimeOffsetSchema,
  TextID_TeamDefaltName: DefaultNicknameChsSchema,
  Maze_FPS_Upload_Time_Interval: ActivityDayTimeOffsetSchema,
  Battle_FPS_Upload_Time_Interval: ActivityDayTimeOffsetSchema,
  Maze_FPS_Upload_Time_Interval_Android: ActivityDayTimeOffsetSchema,
  Battle_FPS_Upload_Time_Interval_Android: ActivityDayTimeOffsetSchema,
  Maze_FPS_Upload_Time_Interval_IOS: ActivityDayTimeOffsetSchema,
  Battle_FPS_Upload_Time_Interval_IOS: ActivityDayTimeOffsetSchema,
  Maze_FPS_Upload_Time_Interval_PC: ActivityDayTimeOffsetSchema,
  Battle_FPS_Upload_Time_Interval_PC: ActivityDayTimeOffsetSchema,
  Battle_FPS_Upload_Max_Count: ActivityDayTimeOffsetSchema,
  Story_Skip_Close: StorySkipCloseSchema,
  Text_Format_Symbol: DefaultNicknameChsSchema,
  HangUpConstTime: ActivityDayTimeOffsetSchema,
  Combat_Power_Avatar_Base: CombatPowerAvatarBaseSchema,
  Combat_Power_Avatar_PerLevel: CombatPowerAvatarBaseSchema,
  Combat_Power_Avatar_PerPromotion: CombatPowerAvatarBaseSchema,
  Combat_Power_Avatar_Rarity4: CombatPowerAvatarBaseSchema,
  Combat_Power_Avatar_Rarity5: CombatPowerAvatarBaseSchema,
  Combat_Power_Avatar_Rank: CombatPowerAvatarBaseSchema,
  Combat_Power_PerSkillTree_Level: CombatPowerAvatarBaseSchema,
  Combat_Power_LightCone_Base: CombatPowerAvatarBaseSchema,
  Combat_Power_LightCone_PerLevel: CombatPowerAvatarBaseSchema,
  Combat_Power_LightCone_PerPromotion: CombatPowerAvatarBaseSchema,
  Combat_Power_LightCone_Rarity3: CombatPowerAvatarBaseSchema,
  Combat_Power_LightCone_Rarity4: CombatPowerAvatarBaseSchema,
  Combat_Power_LightCone_Rarity5: CombatPowerAvatarBaseSchema,
  Combat_Power_LightCone_SkillPerRank: CombatPowerAvatarBaseSchema,
  Combat_Power_LightCone_SkillRarity3: CombatPowerAvatarBaseSchema,
  Combat_Power_LightCone_SkillRarity4: CombatPowerAvatarBaseSchema,
  Combat_Power_LightCone_SkillRarity5: CombatPowerAvatarBaseSchema,
  Combat_Power_Relic_Base: CombatPowerAvatarBaseSchema,
  Combat_Power_Relic_PerLevel: CombatPowerAvatarBaseSchema,
  Combat_Power_Relic_Rarity1: CombatPowerAvatarBaseSchema,
  Combat_Power_Relic_Rarity2: CombatPowerAvatarBaseSchema,
  Combat_Power_Relic_Rarity3: CombatPowerAvatarBaseSchema,
  Combat_Power_Relic_Rarity4: CombatPowerAvatarBaseSchema,
  Combat_Power_Relic_Rarity5: CombatPowerAvatarBaseSchema,
  Combat_Power_Relic_SkillSet2: CombatPowerAvatarBaseSchema,
  Combat_Power_Relic_SkillSet4: CombatPowerAvatarBaseSchema,
  Combat_Power_Relic_SkillSet5: CombatPowerAvatarBaseSchema,
  Combat_Power_Warn_Percent_Monster: BpEquipmentIdSchema,
  Relic_Bonus_Level: BpEquipmentIdSchema,
  Relic_Max_SubAffix: ActivityDayTimeOffsetSchema,
  Relic_Max_Count: ActivityDayTimeOffsetSchema,
  Relic_Max_Count_Hard: ActivityDayTimeOffsetSchema,
  Relic_Exp_ConversionRate: ActivityDayTimeOffsetSchema,
  Relic_ReturnItemID: BpEquipmentIdSchema,
  MissonTalk_ProtectTime: CombatPowerAvatarBaseSchema,
  Item_Sell_Max_Count: ActivityDayTimeOffsetSchema,
  LuaDataTickSpan: ActivityDayTimeOffsetSchema,
  Cocoon_Weekly_Limit_Times: ActivityDayTimeOffsetSchema,
  Newbie_Gacha_Num: ActivityDayTimeOffsetSchema,
  Newbie_Gacha_Discount_Num: ActivityDayTimeOffsetSchema,
  Activity_Day_Time_Offset: ActivityDayTimeOffsetSchema,
  Player_Max_Level: ActivityDayTimeOffsetSchema,
  PlayerComment_Max: ActivityDayTimeOffsetSchema,
  PlayerIcon_DefaultID: ActivityDayTimeOffsetSchema,
  PlayerShowAvatar_Max: ActivityDayTimeOffsetSchema,
  Login_Ready_Delay: CombatPowerAvatarBaseSchema,
  Login_Start_Delay: CombatPowerAvatarBaseSchema,
  Friend_Relation_Limit: ActivityDayTimeOffsetSchema,
  Friend_Daily_Apply_Limit: ActivityDayTimeOffsetSchema,
  Friend_In_Handle_Limit: ActivityDayTimeOffsetSchema,
  Friend_Blacklist_Limit: ActivityDayTimeOffsetSchema,
  Friend_Daily_Apply_Soft_Cap: ActivityDayTimeOffsetSchema,
  Friend_Daily_Apply_Soft_Cap_Interval: ActivityDayTimeOffsetSchema,
  Report_Season_Text_Max_Length: ActivityDayTimeOffsetSchema,
  RemarkName_Max: ActivityDayTimeOffsetSchema,
  Rename_Limit_CD: ActivityDayTimeOffsetSchema,
  BP_Level_Exp: ActivityDayTimeOffsetSchema,
  BP_Week_Max_Exp: ActivityDayTimeOffsetSchema,
  BP_Level_Price: ActivityDayTimeOffsetSchema,
  BP_Equipment_ID: BpEquipmentIdSchema,
  BP_Original_Price68: ActivityDayTimeOffsetSchema,
  BP_Original_Price128: ActivityDayTimeOffsetSchema,
  BP_Discount_Price128: ActivityDayTimeOffsetSchema,
  BP_Max_Level: ActivityDayTimeOffsetSchema,
  BP_Close_Pay: ActivityDayTimeOffsetSchema,
  Default_Music: ActivityDayTimeOffsetSchema,
  Assist_Reward_Max: ActivityDayTimeOffsetSchema,
  Assist_Reward_Daily: ActivityDayTimeOffsetSchema,
  Assist_Reward_Coin_Num: ActivityDayTimeOffsetSchema,
  Assist_List_Friend_Num: ActivityDayTimeOffsetSchema,
  Assist_List_Max_Num: ActivityDayTimeOffsetSchema,
  Assist_Refresh_CD: ActivityDayTimeOffsetSchema,
  Assist_Limit_Time_Max_Daily: ActivityDayTimeOffsetSchema,
  Assist_History_Max_Num: ActivityDayTimeOffsetSchema,
  Sub_Pack_MainMission_ID: ActivityDayTimeOffsetSchema,
  Monthlycard_Limit_Max_Time: ActivityDayTimeOffsetSchema,
  Gameplay_Savedata_Max_Length: ActivityDayTimeOffsetSchema,
  Gameplay_Savedata_Update_Interval: ActivityDayTimeOffsetSchema,
  Relic_Two_Set_Unlock: ActivityDayTimeOffsetSchema,
  DailyActive_MaxPoint: ActivityDayTimeOffsetSchema,
  SimpleTalk_AutoEnd: ActivityDayTimeOffsetSchema,
  Sub_Pack_SubMission_ID: ActivityDayTimeOffsetSchema,
  Text_Join_Text_Max: ActivityDayTimeOffsetSchema,
  Chat_FirstLoad_NumLimit: ActivityDayTimeOffsetSchema,
  Chat_MaxWord_NumLimit: ActivityDayTimeOffsetSchema,
  Chat_Friend_Record_NumLimit: ActivityDayTimeOffsetSchema,
  Chat_Friend_Record_TimeLimit: ActivityDayTimeOffsetSchema,
  Chat_Record_Apply_Once: ActivityDayTimeOffsetSchema,
  Chat_Function_Ban: ActivityDayTimeOffsetSchema,
  Shop_Max_Single_Num: ActivityDayTimeOffsetSchema,
  Activity_Museum_Fund_Proportion: ActivityDayTimeOffsetSchema,
  Activity_Museum_RenewPoint_Reduce1: ActivityDayTimeOffsetSchema,
  Activity_Museum_RenewPoint_Reduce2: ActivityDayTimeOffsetSchema,
  Activity_Museum_RenewPoint_Reduce3: ActivityDayTimeOffsetSchema,
  Activity_Museum_Target_CheckTurn: ActivityDayTimeOffsetSchema,
  Activity_Museum_RenewPoint_S: ActivityDayTimeOffsetSchema,
  Activity_Museum_RenewPoint_A: ActivityDayTimeOffsetSchema,
  Activity_Museum_RenewPoint_B: ActivityDayTimeOffsetSchema,
  Activity_Museum_RenewPoint_C: ActivityDayTimeOffsetSchema,
  MuseumActivity_TargetUnlockMission: ActivityDayTimeOffsetSchema,
  Activity_Museum_argetUnlockMission: ActivityDayTimeOffsetSchema,
  Activity_Museum_MaxMission: ActivityDayTimeOffsetSchema,
  Activity_Museum_AtlasUnlockMission: ActivityDayTimeOffsetSchema,
  Activity_Museum_MarketUnlockMission: ActivityDayTimeOffsetSchema,
  Activity_Museum_UpgradeUnlockMission: ActivityDayTimeOffsetSchema,
  Default_Nickname_CHS: DefaultNicknameChsSchema,
  Default_Nickname_CHT: DefaultNicknameChsSchema,
  Default_Nickname_EN: DefaultNicknameChsSchema,
  Default_Nickname_KR: DefaultNicknameChsSchema,
  Default_Nickname_JP: DefaultNicknameChsSchema,
  Default_Nickname_TH: DefaultNicknameChsSchema,
  Default_Nickname_VN: DefaultNicknameChsSchema,
  Default_Nickname_ES: DefaultNicknameChsSchema,
  Default_Nickname_RU: DefaultNicknameChsSchema,
  Default_Nickname_ID: DefaultNicknameChsSchema,
  Default_Nickname_FR: DefaultNicknameChsSchema,
  Default_Nickname_DE: DefaultNicknameChsSchema,
  Default_Nickname_PT: DefaultNicknameChsSchema,
  RogueChallengeActivity_Max_Save_Count: ActivityDayTimeOffsetSchema,
  RogueChallengeActivity_Support_Refresh_CoolDown: ActivityDayTimeOffsetSchema,
  RogueChallengeActivity_Support_Daily_Limit: ActivityDayTimeOffsetSchema,
  Stamina_Maximum_Num: ActivityDayTimeOffsetSchema,
  PS_Sub_Pack_SubMission_ID: ActivityDayTimeOffsetSchema,
  Default_ChatBubble: ActivityDayTimeOffsetSchema,
  PlayerExp_Scoin_ConvertRate: ActivityDayTimeOffsetSchema,
})
export type ConstValueCommon = z.infer<typeof ConstValueCommonSchema>
