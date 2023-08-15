import * as z from "zod";

export const PurpleTypeSchema = z.enum(["INT"]);
export type PurpleType = z.infer<typeof PurpleTypeSchema>;

export const FluffyTypeSchema = z.enum(["ARRAY"]);
export type FluffyType = z.infer<typeof FluffyTypeSchema>;

export const TentacledTypeSchema = z.enum(["FLOAT"]);
export type TentacledType = z.infer<typeof TentacledTypeSchema>;

export const StickyTypeSchema = z.enum(["STRING"]);
export type StickyType = z.infer<typeof StickyTypeSchema>;

export const PlayerEnterInvalidSingleTagValueSchema = z.object({
  Type: FluffyTypeSchema,
  ArrayValue: z.array(PamLevelRewardType3IconAddressValueSchema),
});
export type PlayerEnterInvalidSingleTagValue = z.infer<
  typeof PlayerEnterInvalidSingleTagValueSchema
>;

export const PlayerEnterInvalidSchema = z.object({
  ConstValueName: z.string(),
  Value: PlayerEnterInvalidSingleTagValueSchema,
});
export type PlayerEnterInvalid = z.infer<typeof PlayerEnterInvalidSchema>;

export const PamLevelRewardType3IconAddressValueSchema = z.object({
  Type: StickyTypeSchema,
  StringValue: z.string(),
});
export type PamLevelRewardType3IconAddressValue = z.infer<
  typeof PamLevelRewardType3IconAddressValueSchema
>;

export const PamLevelRewardType3IconAddressSchema = z.object({
  ConstValueName: z.string(),
  Value: PamLevelRewardType3IconAddressValueSchema,
});
export type PamLevelRewardType3IconAddress = z.infer<
  typeof PamLevelRewardType3IconAddressSchema
>;

export const MuseumActivityCommentProbabilityValueSchema = z.object({
  Type: FluffyTypeSchema,
  ArrayValue: z.array(GachaEndProtectTimeValueSchema),
});
export type MuseumActivityCommentProbabilityValue = z.infer<
  typeof MuseumActivityCommentProbabilityValueSchema
>;

export const MuseumActivityCommentProbabilitySchema = z.object({
  ConstValueName: z.string(),
  Value: MuseumActivityCommentProbabilityValueSchema,
});
export type MuseumActivityCommentProbability = z.infer<
  typeof MuseumActivityCommentProbabilitySchema
>;

export const GachaEndProtectTimeValueSchema = z.object({
  Type: TentacledTypeSchema,
  FloatValue: z.number(),
});
export type GachaEndProtectTimeValue = z.infer<
  typeof GachaEndProtectTimeValueSchema
>;

export const GachaEndProtectTimeSchema = z.object({
  ConstValueName: z.string(),
  Value: GachaEndProtectTimeValueSchema,
});
export type GachaEndProtectTime = z.infer<typeof GachaEndProtectTimeSchema>;

export const AbyssUnlockMissionListValueSchema = z.object({
  Type: FluffyTypeSchema,
  ArrayValue: z.array(AbyssUnlockMessageGroupIdValueSchema),
});
export type AbyssUnlockMissionListValue = z.infer<
  typeof AbyssUnlockMissionListValueSchema
>;

export const AbyssUnlockMissionListSchema = z.object({
  ConstValueName: z.string(),
  Value: AbyssUnlockMissionListValueSchema,
});
export type AbyssUnlockMissionList = z.infer<
  typeof AbyssUnlockMissionListSchema
>;

export const AbyssUnlockMessageGroupIdValueSchema = z.object({
  Type: PurpleTypeSchema,
  IntValue: z.number(),
});
export type AbyssUnlockMessageGroupIdValue = z.infer<
  typeof AbyssUnlockMessageGroupIdValueSchema
>;

export const AbyssUnlockMessageGroupIdSchema = z.object({
  ConstValueName: z.string(),
  Value: AbyssUnlockMessageGroupIdValueSchema,
});
export type AbyssUnlockMessageGroupId = z.infer<
  typeof AbyssUnlockMessageGroupIdSchema
>;

export const ConstValueClientSchema = z.object({
  UseLess: AbyssUnlockMessageGroupIdSchema,
  CheckServerStatusInterval: AbyssUnlockMessageGroupIdSchema,
  DisplayMaxAvatarPromotion: AbyssUnlockMessageGroupIdSchema,
  DisplayMaxEquipmentPromotion: AbyssUnlockMessageGroupIdSchema,
  VTeamCreateConfirmDialog: AbyssUnlockMessageGroupIdSchema,
  VTeamDelConfirmDialog: AbyssUnlockMessageGroupIdSchema,
  Update_Bounds_Frequency: AbyssUnlockMessageGroupIdSchema,
  Update_Bounds_Enable: AbyssUnlockMessageGroupIdSchema,
  GachaTokenID: AbyssUnlockMissionListSchema,
  GachaShopID: AbyssUnlockMessageGroupIdSchema,
  GachaResultDelayTime: GachaEndProtectTimeSchema,
  GachaResultEndTime: GachaEndProtectTimeSchema,
  GachaConnectDelay: AbyssUnlockMessageGroupIdSchema,
  GachaShopID_1: AbyssUnlockMessageGroupIdSchema,
  Recharge_Enable: AbyssUnlockMessageGroupIdSchema,
  Prestige_Reward_LockedLevelLater: AbyssUnlockMessageGroupIdSchema,
  SkillMaxLevel: AbyssUnlockMissionListSchema,
  HeroPath_Enable: AbyssUnlockMessageGroupIdSchema,
  Screwllum_Eye_Light_Factor: AbyssUnlockMessageGroupIdSchema,
  NPC_Billboard_Fix_Size_Factor: GachaEndProtectTimeSchema,
  NPC_Billboard_Fix_Size_Factor_Mobile: GachaEndProtectTimeSchema,
  NPC_Billboard_Height_Min: GachaEndProtectTimeSchema,
  NPC_Billboard_Height_Max: GachaEndProtectTimeSchema,
  NPC_Billboard_IconContainer_Scale: GachaEndProtectTimeSchema,
  Rank_Shadow_Enable: AbyssUnlockMessageGroupIdSchema,
  GachaSkipBegin: AbyssUnlockMessageGroupIdSchema,
  GachaSkipEnd: AbyssUnlockMessageGroupIdSchema,
  MappingInfo_Track_RangeMin: AbyssUnlockMessageGroupIdSchema,
  PlayerComment_Default: PamLevelRewardType3IconAddressSchema,
  NPC_Interact_LockInput_Delay_Time: GachaEndProtectTimeSchema,
  Friend_Refresh_CoolDown: AbyssUnlockMessageGroupIdSchema,
  GachaPerformEnable: AbyssUnlockMessageGroupIdSchema,
  GachaEndProtectTime: GachaEndProtectTimeSchema,
  GachaSwitchProtectTime: GachaEndProtectTimeSchema,
  GachaBlockDetail: AbyssUnlockMessageGroupIdSchema,
  PlayerIcon_Male: AbyssUnlockMessageGroupIdSchema,
  PlayerIcon_Female: AbyssUnlockMessageGroupIdSchema,
  PlayerEnter_InvalidString: PlayerEnterInvalidSchema,
  PlayerEnter_InvalidTagPair: PlayerEnterInvalidSchema,
  PlayerEnter_InvalidSingleTag: PlayerEnterInvalidSchema,
  Sneak_Exposed_Distance: AbyssUnlockMessageGroupIdSchema,
  Sneak_Lock_Distance: AbyssUnlockMessageGroupIdSchema,
  Force_Lock_Distance_Limit: AbyssUnlockMessageGroupIdSchema,
  DailyActivePoint: AbyssUnlockMessageGroupIdSchema,
  PhoneMessage_Inputing_Time_Range: MuseumActivityCommentProbabilitySchema,
  PhoneMessage_Inputing_Time_Convert_Const:
    MuseumActivityCommentProbabilitySchema,
  PhoneMessage_Item_Interval: GachaEndProtectTimeSchema,
  ItemDefaultSortID: AbyssUnlockMessageGroupIdSchema,
  PhoneMessage_Frozen_HintItem: AbyssUnlockMessageGroupIdSchema,
  PictureShareFunctionEnable: AbyssUnlockMessageGroupIdSchema,
  Tutorial_Protect_Limit: AbyssUnlockMessageGroupIdSchema,
  ItemDetailsDialog_HiddenItemCount_ItemID: AbyssUnlockMissionListSchema,
  PhoneMessage_Item_Interval_AfterPlayer: GachaEndProtectTimeSchema,
  PhoneMessage_Inputing_Time_Image: GachaEndProtectTimeSchema,
  BattlePass_Rebate_Item_ID: AbyssUnlockMessageGroupIdSchema,
  BattlePassPro_Rebate_Item_ID: AbyssUnlockMessageGroupIdSchema,
  BattlePassLevelUp_Rebate_Item_ID: AbyssUnlockMessageGroupIdSchema,
  MonthCard_Rebate_Item_ID: AbyssUnlockMessageGroupIdSchema,
  Community_Activity_FuncEntrance_ID: AbyssUnlockMessageGroupIdSchema,
  PhoneMessage_Item_Scroll_Time_Max: GachaEndProtectTimeSchema,
  Photo_Wall_Pool_Count: AbyssUnlockMessageGroupIdSchema,
  Photo_Wall_New_Count: AbyssUnlockMessageGroupIdSchema,
  Chat_Record_Space: AbyssUnlockMessageGroupIdSchema,
  Chat_HUD_Hide_Time: AbyssUnlockMessageGroupIdSchema,
  Screwllum_Avatar_ID: AbyssUnlockMessageGroupIdSchema,
  BoxingClubActivity_FinialQuestID: AbyssUnlockMessageGroupIdSchema,
  BoxingClubActivity_Unlock_Missions: AbyssUnlockMissionListSchema,
  BoxingClubActivity_PreMainMissionIDList: AbyssUnlockMissionListSchema,
  BoxingClubActivity_PrePhoneMessage_SubmissionID:
    AbyssUnlockMessageGroupIdSchema,
  BoxingClubActivity_PrePhoneMessage_GroupID: AbyssUnlockMessageGroupIdSchema,
  HandBookRogueMappingInfo: AbyssUnlockMessageGroupIdSchema,
  HandBookRogueMapEntrance: AbyssUnlockMessageGroupIdSchema,
  HandBookMazeMappingInfo: AbyssUnlockMessageGroupIdSchema,
  HandBookMazeMapEntrance: AbyssUnlockMessageGroupIdSchema,
  HandBookRogueWorldThree: AbyssUnlockMessageGroupIdSchema,
  Settings_EmergencyExit: AbyssUnlockMessageGroupIdSchema,
  ForbidChallengeContinueMainMissionID: AbyssUnlockMissionListSchema,
  Community_Activity_ActivityModuleID: AbyssUnlockMessageGroupIdSchema,
  LightCone3DGyroSmoothTime: GachaEndProtectTimeSchema,
  LightCone3DGyroMaxRotX: GachaEndProtectTimeSchema,
  NPCMosterTrack_MapIconType: AbyssUnlockMessageGroupIdSchema,
  PhoneJoystickEnable: AbyssUnlockMessageGroupIdSchema,
  Abyss_UnlockMissionList: AbyssUnlockMissionListSchema,
  Abyss_UnlockMessageGroupID: AbyssUnlockMessageGroupIdSchema,
  Abyss_UnlockMissionLevel: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_MaxAreaStats: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_MaxStuffStats: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_DisplayItemID: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_PreMainMissionIDList: AbyssUnlockMissionListSchema,
  MuseumActivity_UnlockMainMissionID: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_AvatarCollectionQuestID: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_MaxItemMission: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_MaxStuffMission: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_AtlasUnlockMission: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_MarketUnlockMission: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_UpgradeUnlockMission: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_RewardEventUnlockMission: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_CutsceneSec: GachaEndProtectTimeSchema,
  MuseumActivity_CutsceneAreaSec: GachaEndProtectTimeSchema,
  MuseumActivity_ResultFundSec: GachaEndProtectTimeSchema,
  MuseumActivity_CommentProbability: MuseumActivityCommentProbabilitySchema,
  MuseumActivity_CommentCount: AbyssUnlockMessageGroupIdSchema,
  MuseumActivity_MuseumMissionChapterID: AbyssUnlockMessageGroupIdSchema,
  PamLevelReward_Type3_IconAddress: PamLevelRewardType3IconAddressSchema,
  ResultDialog_ClickProtectTime: GachaEndProtectTimeSchema,
  RechargeShopID: AbyssUnlockMessageGroupIdSchema,
  RecommendShopID: AbyssUnlockMessageGroupIdSchema,
  RechargeShopGotoID: AbyssUnlockMessageGroupIdSchema,
  SimpleTalk_Text_IntervalSpeed_cn: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_cht: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_en: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_kr: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_jp: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_es: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_ru: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_th: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_vi: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_id: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_fr: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_de: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalSpeed_pt: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalTime_Min: GachaEndProtectTimeSchema,
  SimpleTalk_Text_IntervalTime_Max: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_cn: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_cht: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_en: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_kr: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_jp: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_es: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_ru: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_th: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_vi: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_id: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_fr: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_de: GachaEndProtectTimeSchema,
  SimpleTalk_Text_Speed_pt: GachaEndProtectTimeSchema,
  SimpleTalk_Text_NormalProtectTime: GachaEndProtectTimeSchema,
  RogueChallengeActivity_PreMainMissionIDList: AbyssUnlockMissionListSchema,
  RogueChallengeActivity_SpecialQuestID: AbyssUnlockMessageGroupIdSchema,
  GameModeType_Client_FloorID: AbyssUnlockMessageGroupIdSchema,
  PhoneMessage_NewMessageHint_ProtectTime: GachaEndProtectTimeSchema,
  RegionalMap_Exculde_Beta: AbyssUnlockMessageGroupIdSchema,
  Settings_EmergencyExit_ActiveGameModeType_TransferBanned:
    AbyssUnlockMissionListSchema,
  Settings_EmergencyExit_ActiveGameModeType_Always:
    AbyssUnlockMissionListSchema,
  NPCMonsterTrack_Enable_GameModeType: AbyssUnlockMissionListSchema,
  TreasureDungeonActivity_PreMainMissionIDList: AbyssUnlockMissionListSchema,
  TreasureDungeonActivity_GotoID: AbyssUnlockMessageGroupIdSchema,
  TreasureDungeonActivity_GuideMissionID: AbyssUnlockMessageGroupIdSchema,
  ChallengeMaze_Return_Train: AbyssUnlockMessageGroupIdSchema,
  ChallengeMaze_Activity_Relay_Time: AbyssUnlockMessageGroupIdSchema,
  ChallengeMaze_Shop_GotoID: AbyssUnlockMessageGroupIdSchema,
  Team_RecommendWeakPoint_ParaByMonsterRank: AbyssUnlockMissionListSchema,
  PSBannedFuncEntrance: AbyssUnlockMissionListSchema,
  PhoneMessage_ContactsID_Hero: AbyssUnlockMessageGroupIdSchema,
  ChallengeMaze_Yukong_PreMainMissionIDList: AbyssUnlockMissionListSchema,
  ChallengeMaze_World02_MissionFinish_Value: AbyssUnlockMessageGroupIdSchema,
  RedeemCode_Enable_OS: AbyssUnlockMessageGroupIdSchema,
  RedeemCode_Enable_CN: AbyssUnlockMessageGroupIdSchema,
  Loading_Max_Time_LoadMap: GachaEndProtectTimeSchema,
  Loading_Max_Time_MazeToBattle: GachaEndProtectTimeSchema,
  Loading_Max_Time_BattleToMaze: GachaEndProtectTimeSchema,
  Loading_Max_Time_DesignLoadData: GachaEndProtectTimeSchema,
});
export type ConstValueClient = z.infer<typeof ConstValueClientSchema>;
