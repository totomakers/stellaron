import * as z from "zod";

export const BgmWorldStateSchema = z.enum([
  "State_City_MBelobog",
  "State_City_MXianzhou_Alliance",
  "State_Herta_Space_Station",
  "State_Spaceship",
]);
export type BgmWorldState = z.infer<typeof BgmWorldStateSchema>;

export const CombatBgmHighSchema = z.enum([
  "",
  "State_Belobog_Overworld_Combat_High",
  "State_Belobog_Underworld_Boxing_Combat",
  "State_Belobog_Underworld_Combat_High",
  "State_Herta_Space_Station_Base_Zone_Combat_High",
  "State_Herta_Space_Station_Storage_Zone_Combat_High",
  "State_Herta_Space_Station_Suppy_Zone_Combat_High",
  "State_Xianzhou_Alliance_X1_1_Combat_High",
  "State_Xianzhou_Maze_X2_1_Combat_High",
  "State_Xianzhou_Maze_X3_Combat_High",
]);
export type CombatBgmHigh = z.infer<typeof CombatBgmHighSchema>;

export const CombatBgmLowSchema = z.enum([
  "",
  "State_Belobog_Overworld_Combat_Low",
  "State_Belobog_Underworld_Boxing_Combat",
  "State_Belobog_Underworld_Combat_Low",
  "State_Herta_Space_Station_Base_Zone_Combat_Low",
  "State_Herta_Space_Station_Storage_Zone_Combat_Low",
  "State_Herta_Space_Station_Suppy_Zone_Combat_Low",
  "State_Xianzhou_Alliance_X1_1_Combat_Low",
  "State_Xianzhou_Maze_X2_1_Combat_Low",
  "State_Xianzhou_Maze_X3_Combat_Low",
]);
export type CombatBgmLow = z.infer<typeof CombatBgmLowSchema>;

export const ExitAudioEventSchema = z.enum(["Ev_sfx_amb_wind_stop"]);
export type ExitAudioEvent = z.infer<typeof ExitAudioEventSchema>;

export const FloorBgmBusyStateNameSchema = z.enum(["", "State_Maze_Busy"]);
export type FloorBgmBusyStateName = z.infer<typeof FloorBgmBusyStateNameSchema>;

export const FloorBgmGroupNameSchema = z.enum([
  "",
  "StateGroup_Herta_Space_Station",
  "StateGroup_MCity_Belobog",
  "StateGroup_MCity_Xianzhou_Alliance",
  "StateGroup_Spaceship",
]);
export type FloorBgmGroupName = z.infer<typeof FloorBgmGroupNameSchema>;

export const FloorDefaultEmotionSchema = z.enum([
  "",
  "State_Bgm_E_D",
  "State_Hollowing",
  "State_Hollowing_D",
  "State_Joyful_D",
  "State_Severe",
]);
export type FloorDefaultEmotion = z.infer<typeof FloorDefaultEmotionSchema>;

export const FloorTypeSchema = z.enum(["Default", "Indoor"]);
export type FloorType = z.infer<typeof FloorTypeSchema>;

export const MunicipalConfigPathSchema = z.enum([
  "Config/ConfigMunicipal/Chap00_SpaceStation_MunicipalConfig.json",
  "Config/ConfigMunicipal/Chap01_DownTown_MunicipalConfig.json",
  "Config/ConfigMunicipal/Chap01_InDoor_MunicipalConfig.json",
  "Config/ConfigMunicipal/Chap01_Square_MunicipalConfig.json",
  "Config/ConfigMunicipal/Chap02_Town_MunicipalConfig.json",
  "Config/ConfigMunicipal/Common_WhiteBox_MunicipalConfig.json",
  "",
]);
export type MunicipalConfigPath = z.infer<typeof MunicipalConfigPathSchema>;

export const OptionalLoadBlocksConfigSchema = z.enum([
  "Config/ConfigOptionalLoadBlocks/TrainCarriage.json",
  "Config/ConfigOptionalLoadBlocks/Train.json",
  "",
]);
export type OptionalLoadBlocksConfig = z.infer<
  typeof OptionalLoadBlocksConfigSchema
>;

export const MapLayerNameListSchema = z.object({
  Hash: z.number(),
});
export type MapLayerNameList = z.infer<typeof MapLayerNameListSchema>;

export const MazeFloorValueSchema = z.object({
  FloorID: z.number(),
  FloorName: z.string(),
  BaseFloorID: z.number(),
  BGMWorldState: BgmWorldStateSchema,
  FloorBGMGroupName: FloorBgmGroupNameSchema,
  FloorBGMNormalStateName: z.string(),
  FloorDefaultEmotion: FloorDefaultEmotionSchema,
  FloorBGMBusyStateName: FloorBgmBusyStateNameSchema,
  EnterAudioEvent: z.array(z.string()),
  ExitAudioEvent: z.array(ExitAudioEventSchema),
  FloorType: FloorTypeSchema,
  WalkingEffectAdditiveScale: z.union([z.number(), z.null()]).optional(),
  OptionalLoadBlocksConfig: OptionalLoadBlocksConfigSchema,
  MunicipalConfigPath: MunicipalConfigPathSchema,
  MapLayerNameList: z.array(MapLayerNameListSchema),
  CombatBGMLow: CombatBgmLowSchema,
  CombatBGMHigh: CombatBgmHighSchema,
});
export type MazeFloorValue = z.infer<typeof MazeFloorValueSchema>;
