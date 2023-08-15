import * as z from "zod";

export const MapEntranceIconValueSchema = z.object({
  ID: z.number(),
  ActiveMapIconImgPath: z.string(),
});
export type MapEntranceIconValue = z.infer<typeof MapEntranceIconValueSchema>;
