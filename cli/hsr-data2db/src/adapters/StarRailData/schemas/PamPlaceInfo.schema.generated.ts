import * as z from "zod";

export const GroundSchema = z.object({
  PamPlaceType: z.string(),
  PamActionList: z.array(z.string()),
});
export type Ground = z.infer<typeof GroundSchema>;

export const PamPlaceInfoSchema = z.object({
  Ground: GroundSchema,
  Window: GroundSchema,
  Jukebox: GroundSchema,
  Plant: GroundSchema,
  Vending: GroundSchema,
});
export type PamPlaceInfo = z.infer<typeof PamPlaceInfoSchema>;
