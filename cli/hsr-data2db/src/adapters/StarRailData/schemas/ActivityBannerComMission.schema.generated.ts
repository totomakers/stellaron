import * as z from "zod";

export const ShortDescSchema = z.object({
  Hash: z.number(),
});
export type ShortDesc = z.infer<typeof ShortDescSchema>;

export const ActivityBannerComMissionValueSchema = z.object({
  BannerID: z.number(),
  AvatarIDList: z.array(z.number()),
  SortID: z.number(),
  MainMissionID: z.number(),
  GotoType: z.number(),
  SubMissionID: z.number(),
  Title: ShortDescSchema,
  SubTitle: ShortDescSchema,
  ShortDesc: ShortDescSchema,
  MainImagePath: z.string(),
  SubImagePath: z.string(),
  ActivityModuleID: z.number(),
  MessageID: z.union([z.number(), z.null()]).optional(),
});
export type ActivityBannerComMissionValue = z.infer<
  typeof ActivityBannerComMissionValueSchema
>;
