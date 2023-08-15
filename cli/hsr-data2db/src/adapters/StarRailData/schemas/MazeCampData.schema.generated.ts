import * as z from "zod";

export const MazePlayerAllySchema = z.object({
  CampID: z.string(),
  HostileCampList: z.array(z.number()),
});
export type MazePlayerAlly = z.infer<typeof MazePlayerAllySchema>;

export const MazeCampDataSchema = z.object({
  Player: MazePlayerAllySchema,
  MazePlayerAlly: MazePlayerAllySchema,
  NpcMonster: MazePlayerAllySchema,
  Prop: MazePlayerAllySchema,
  Neutral: MazePlayerAllySchema,
});
export type MazeCampData = z.infer<typeof MazeCampDataSchema>;
