import * as z from "zod";

export const The102120119Schema = z.object({
  SubMissionID: z.number(),
  MainMissionIDListClientDisplay: z.array(z.number()),
  MainMissionIDList: z.array(z.number()),
  RecycleItemList: z.array(z.any()),
  CompensateItemList: z.array(z.any()),
});
export type The102120119 = z.infer<typeof The102120119Schema>;

export const MissionDisableSchema = z.object({
  "102120119": The102120119Schema,
});
export type MissionDisable = z.infer<typeof MissionDisableSchema>;
