import * as z from "zod";

export const The1Schema = z.object({
  PlayerReturnID: z.number(),
  ScheduleDataID: z.number(),
  DispatchLink: z.string(),
  FarmMultipleDropID: z.number(),
  LimitTime: z.number(),
  QuestGroupID: z.array(z.number()),
  ReturnRewardID: z.number(),
  KeyPointID: z.array(z.number()),
  LoginReward: z.array(z.number()),
  ValidityPeriod: z.number(),
  DailyDoubleTime: z.number(),
  TotalDoubleTime: z.number(),
});
export type The1 = z.infer<typeof The1Schema>;

export const PlayerReturnConfigSchema = z.object({
  "1": The1Schema,
});
export type PlayerReturnConfig = z.infer<typeof PlayerReturnConfigSchema>;
