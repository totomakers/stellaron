import * as z from "zod";

export const DialogDescSchema = z.object({
  Hash: z.number(),
});
export type DialogDesc = z.infer<typeof DialogDescSchema>;

export const MuseumAreaMissionValueSchema = z.object({
  AreaID: z.number(),
  CollectItemNum: z.number(),
  DialogDesc: DialogDescSchema,
  MissionID: z.number(),
});
export type MuseumAreaMissionValue = z.infer<
  typeof MuseumAreaMissionValueSchema
>;
