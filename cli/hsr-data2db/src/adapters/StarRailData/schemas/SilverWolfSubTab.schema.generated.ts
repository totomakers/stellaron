import * as z from "zod";

export const TitleSchema = z.object({
  Hash: z.number(),
});
export type Title = z.infer<typeof TitleSchema>;

export const ExplorationSchema = z.object({
  TabType: z.string(),
  GroupID: z.number(),
  Title: TitleSchema,
  QuestList: z.array(z.number()),
  FinalQuest: z.number(),
  UnlockMission: z.number(),
  EntranceID: z.number(),
  MappingInfoID: z.number(),
});
export type Exploration = z.infer<typeof ExplorationSchema>;

export const SilverWolfSubTabSchema = z.object({
  Exploration: z.record(z.string(), ExplorationSchema),
  Shoot: z.record(z.string(), ExplorationSchema),
  Raid: z.record(z.string(), ExplorationSchema),
});
export type SilverWolfSubTab = z.infer<typeof SilverWolfSubTabSchema>;
