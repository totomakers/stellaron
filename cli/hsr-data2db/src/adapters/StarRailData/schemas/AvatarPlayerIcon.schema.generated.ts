import * as z from "zod";

export const AvatarPlayerIconValueSchema = z.object({
  ID: z.number(),
  ImagePath: z.string(),
  IsVisible: z.union([z.boolean(), z.null()]).optional(),
  AvatarID: z.number(),
});
export type AvatarPlayerIconValue = z.infer<typeof AvatarPlayerIconValueSchema>;
