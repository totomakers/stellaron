import * as z from "zod";

export const The8001265Schema = z.object({
  TriggerMissionID: z.number(),
  TriggerCustomString: z.string(),
});
export type The8001265 = z.infer<typeof The8001265Schema>;

export const MuseumTutorialTalkSchema = z.object({
  "8001265": The8001265Schema,
});
export type MuseumTutorialTalk = z.infer<typeof MuseumTutorialTalkSchema>;
