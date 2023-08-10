import * as z from "zod";

export const BoxingClubPerformanceValueSchema = z.object({
  ID: z.number(),
  PlayerRank: z.string(),
  EnemyRank: z.string(),
  Name: z.string(),
  MonsterTemplateID: z.number(),
  BubbleTalkPlayer: z.string(),
  BubbleTalkEnemy: z.string(),
});
export type BoxingClubPerformanceValue = z.infer<
  typeof BoxingClubPerformanceValueSchema
>;
