import * as z from "zod";

export const Aim01Schema = z.object({
  Hash: z.number(),
});
export type Aim01 = z.infer<typeof Aim01Schema>;

export const The30004Schema = z.object({
  ActivityID: z.number(),
  Order: z.number(),
  ActivityModuleID: z.number(),
  MissionID: z.number(),
  RewardQuestID: z.number(),
  StartSubMissionID: z.number(),
  FinishSubMissionID: z.number(),
  Title: Aim01Schema,
  Aim01: Aim01Schema,
  Aim02: Aim01Schema,
  Result01: Aim01Schema,
  Result02: Aim01Schema,
});
export type The30004 = z.infer<typeof The30004Schema>;

export const ActivityModuleFindTrotterSchema = z.object({
  "30004": z.record(z.string(), The30004Schema),
});
export type ActivityModuleFindTrotter = z.infer<
  typeof ActivityModuleFindTrotterSchema
>;
