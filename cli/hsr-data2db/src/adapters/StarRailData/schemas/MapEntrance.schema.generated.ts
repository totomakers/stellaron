import * as z from "zod";

export const EntranceListIconSchema = z.enum([
  "",
  "SpriteOutput/MapPics/MapTab/MapFloorCityIcon.png",
  "SpriteOutput/MapPics/MapTab/MapFloorTrainIcon.png",
]);
export type EntranceListIcon = z.infer<typeof EntranceListIconSchema>;

export const EntranceTypeSchema = z.enum(["Explore", "Mission", "Town"]);
export type EntranceType = z.infer<typeof EntranceTypeSchema>;

export const ImagePathSchema = z.enum([
  "SpriteOutput/LevelDetailPic/PicSceneMaze01.png",
  "SpriteOutput/LevelDetailPic/PicSceneVallige.png",
]);
export type ImagePath = z.infer<typeof ImagePathSchema>;

export const DescSchema = z.object({
  Hash: z.number(),
});
export type Desc = z.infer<typeof DescSchema>;

export const MapEntranceValueSchema = z.object({
  ID: z.number(),
  IsShowInMapMenu: z.union([z.boolean(), z.null()]).optional(),
  MapMenuSortID: z.number(),
  EntranceType: EntranceTypeSchema,
  Name: DescSchema,
  Desc: DescSchema,
  EntranceListIcon: EntranceListIconSchema,
  ImagePath: ImagePathSchema,
  MiniMapIconHintList: z.array(z.number()),
  PlaneID: z.number(),
  FloorID: z.number(),
  TargetMainMissionList: z.array(z.number()),
  BeginMainMissionList: z.array(z.number()),
  FinishMainMissionList: z.array(z.number()),
  FinishSubMissionList: z.array(z.number()),
  FinishQuestList: z.array(z.any()),
  StartGroupID: z.union([z.number(), z.null()]).optional(),
  StartAnchorID: z.union([z.number(), z.null()]).optional(),
});
export type MapEntranceValue = z.infer<typeof MapEntranceValueSchema>;
