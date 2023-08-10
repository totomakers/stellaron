import * as z from "zod";

export const IconNameSchema = z.enum(["MazeText_Empty"]);
export type IconName = z.infer<typeof IconNameSchema>;

export const MiniMapIconValueSchema = z.object({
  ID: z.number(),
  IconPath: z.string(),
  IconName: IconNameSchema,
  MissionIconPath: z.string(),
  isShowinMap: z.union([z.boolean(), z.null()]).optional(),
  IsShowCornerArrow: z.union([z.boolean(), z.null()]).optional(),
  Priority: z.number(),
  IsCrossLayer: z.union([z.boolean(), z.null()]).optional(),
  IsShowInBillboard: z.union([z.boolean(), z.null()]).optional(),
  BillboardIcon: z.union([z.number(), z.null()]).optional(),
  ConnectID: z.union([z.number(), z.null()]).optional(),
  IsFollowMapScale: z.union([z.boolean(), z.null()]).optional(),
  IconOrientetionSwitch: z.union([z.boolean(), z.null()]).optional(),
});
export type MiniMapIconValue = z.infer<typeof MiniMapIconValueSchema>;
