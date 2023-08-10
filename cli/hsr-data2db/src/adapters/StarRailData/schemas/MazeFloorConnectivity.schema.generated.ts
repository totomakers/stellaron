import * as z from "zod";

export const MazeFloorConnectivityValueSchema = z.object({
  FromFloorID: z.number(),
  ToFloorID: z.number(),
  WayPointGroupID: z.number(),
  WayPointEntityID: z.number(),
});
export type MazeFloorConnectivityValue = z.infer<
  typeof MazeFloorConnectivityValueSchema
>;
