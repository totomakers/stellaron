import * as z from "zod";

export const CutSceneConfigValueSchema = z.object({
  CutSceneName: z.string(),
  CutScenePath: z.string(),
  CutSceneSFXJsonPath: z.string(),
  SFXID: z.union([z.number(), z.null()]).optional(),
  VoiceID: z.union([z.number(), z.null()]).optional(),
  CutSceneBGMStateName: z.string(),
  CaptionPath: z.string(),
  PosOffSet: z.array(z.number()),
  MazePlaneID: z.union([z.number(), z.null()]).optional(),
  MazeFloorID: z.union([z.number(), z.null()]).optional(),
  HideBlockList: z.array(z.string()),
  IsPlayerInvolved: z.union([z.boolean(), z.null()]).optional(),
});
export type CutSceneConfigValue = z.infer<typeof CutSceneConfigValueSchema>;
