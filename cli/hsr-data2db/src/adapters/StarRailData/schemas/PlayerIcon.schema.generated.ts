import * as z from "zod";

export const PlayerIconValueSchema = z.object({
  ID: z.number(),
  ImagePath: z.string(),
  IsVisible: z.boolean(),
});
export type PlayerIconValue = z.infer<typeof PlayerIconValueSchema>;
