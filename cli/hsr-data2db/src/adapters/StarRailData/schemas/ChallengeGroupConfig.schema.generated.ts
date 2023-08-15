import * as z from "zod";

export const BackGroundPathSchema = z.enum([
  "",
  "UI/UI3D/Abyss/World/Texture/AbyssSenceBg_01.png",
  "UI/UI3D/Abyss/World/Texture/AbyssSenceBg_02.png",
]);
export type BackGroundPath = z.infer<typeof BackGroundPathSchema>;

export const TabPicPathSchema = z.enum([
  "SpriteOutput/UI/Abyss/Process/TypeIcon/AbyssSwitchLoop_Off.png",
  "SpriteOutput/UI/Abyss/Process/TypeIcon/AbyssSwitchW01_Off.png",
  "SpriteOutput/UI/Abyss/Process/TypeIcon/AbyssSwitchW02_Off.png",
]);
export type TabPicPath = z.infer<typeof TabPicPathSchema>;

export const TabPicSelectPathSchema = z.enum([
  "SpriteOutput/UI/Abyss/Process/TypeIcon/AbyssSwitchLoop_On.png",
  "SpriteOutput/UI/Abyss/Process/TypeIcon/AbyssSwitchW01_On.png",
  "SpriteOutput/UI/Abyss/Process/TypeIcon/AbyssSwitchW02_On.png",
]);
export type TabPicSelectPath = z.infer<typeof TabPicSelectPathSchema>;

export const GroupNameSchema = z.object({
  Hash: z.number(),
});
export type GroupName = z.infer<typeof GroupNameSchema>;

export const ChallengeGroupConfigValueSchema = z.object({
  GroupID: z.number(),
  GroupName: GroupNameSchema,
  RewardLineGroupID: z.number(),
  PreMissionID: z.number(),
  MapEntranceID: z.number(),
  MappingInfoID: z.number(),
  WorldID: z.union([z.number(), z.null()]).optional(),
  BackGroundPath: BackGroundPathSchema,
  TabPicPath: TabPicPathSchema,
  TabPicSelectPath: TabPicSelectPathSchema,
  ScheduleDataID: z.union([z.number(), z.null()]).optional(),
  MazeBuffID: z.union([z.number(), z.null()]).optional(),
});
export type ChallengeGroupConfigValue = z.infer<
  typeof ChallengeGroupConfigValueSchema
>;
