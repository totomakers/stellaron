import * as z from "zod";

export const DescSchema = z.object({
  Hash: z.number(),
});
export type Desc = z.infer<typeof DescSchema>;

export const TreasureDungeonGridBuffValueSchema = z.object({
  GridBuffID: z.number(),
  Type: z.union([z.null(), z.string()]).optional(),
  TypeParam: z.array(z.number()),
  GridBuffMaxLevel: z.number(),
  Desc: DescSchema,
  DisplayMazeBuffID: z.union([z.number(), z.null()]).optional(),
  ParamInt: z.union([z.number(), z.null()]).optional(),
});
export type TreasureDungeonGridBuffValue = z.infer<
  typeof TreasureDungeonGridBuffValueSchema
>;
