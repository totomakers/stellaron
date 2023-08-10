import * as z from "zod";

export const The10018Schema = z.object({
  ID: z.number(),
  BGImgPath: z.string(),
  PicImgPath: z.string(),
  CardWidget0ImgPath: z.string(),
  CardWidget1ImgPath: z.string(),
  CardWidget2ImgPath: z.string(),
});
export type The10018 = z.infer<typeof The10018Schema>;

export const ActivityPanelSevenDayRewardSchema = z.object({
  "10018": The10018Schema,
});
export type ActivityPanelSevenDayReward = z.infer<
  typeof ActivityPanelSevenDayRewardSchema
>;
