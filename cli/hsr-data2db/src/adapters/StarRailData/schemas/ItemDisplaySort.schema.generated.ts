import * as z from "zod";

export const ItemDisplaySortValueSchema = z.object({
  ID: z.number(),
  SortID: z.number(),
});
export type ItemDisplaySortValue = z.infer<typeof ItemDisplaySortValueSchema>;
