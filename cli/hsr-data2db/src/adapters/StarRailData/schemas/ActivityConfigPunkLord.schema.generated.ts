import * as z from "zod";

export const GroupTypeSchema = z.enum(["Common", "Preparatory"]);
export type GroupType = z.infer<typeof GroupTypeSchema>;

export const MonsterPicSchema = z.enum([
  "SpriteOutput/MonsterFigure/Monster_1003010.png",
  "SpriteOutput/MonsterFigure/Monster_1004010.png",
  "SpriteOutput/MonsterFigure/Monster_1013010.png",
  "SpriteOutput/MonsterFigure/Monster_1013020.png",
  "SpriteOutput/MonsterFigure/Monster_1014010.png",
  "SpriteOutput/MonsterFigure/Monster_8003030.png",
  "SpriteOutput/MonsterFigure/Monster_8013010.png",
]);
export type MonsterPic = z.infer<typeof MonsterPicSchema>;

export const MonsterRareSchema = z.enum(["A", "B", "S"]);
export type MonsterRare = z.infer<typeof MonsterRareSchema>;

export const MonsterBuffSchema = z.object({
  Hash: z.number(),
});
export type MonsterBuff = z.infer<typeof MonsterBuffSchema>;

export const ActivityConfigPunkLordValueSchema = z.object({
  ID: z.number(),
  WorldLevel: z.number(),
  RaidID: z.number(),
  GroupType: GroupTypeSchema,
  ManikinConfig: z.string(),
  ShowMonster: z.string(),
  MonsterPic: MonsterPicSchema,
  MonsterBuff: MonsterBuffSchema,
  MonsterRare: MonsterRareSchema,
  TurnLimit: z.number(),
  MonsterHP: z.number(),
  PluralHP: z.number(),
  MonsterLevel: z.number(),
  ExistTime: z.number(),
  KillPoint: z.number(),
  SummonPoint: z.number(),
  AssistPoint: z.number(),
});
export type ActivityConfigPunkLordValue = z.infer<
  typeof ActivityConfigPunkLordValueSchema
>;
