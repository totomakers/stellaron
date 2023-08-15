import * as z from "zod";

export const InBattleBindingTypeSchema = z.enum([
  "CharacterAbility",
  "CharacterSkill",
  "StageAbilityAfterCharacterBorn",
  "StageAbilityBeforeCharacterBorn",
]);
export type InBattleBindingType = z.infer<typeof InBattleBindingTypeSchema>;

export const MazeBuffIconTypeSchema = z.enum(["Buff", "Debuff", "Other"]);
export type MazeBuffIconType = z.infer<typeof MazeBuffIconTypeSchema>;

export const MazeBuffTypeSchema = z.enum([
  "Character",
  "CharacterKeepScene",
  "Level",
  "LevelKeepScene",
  "Team",
  "TeamKeepScene",
]);
export type MazeBuffType = z.infer<typeof MazeBuffTypeSchema>;

export const ParamListSchema = z.object({
  Value: z.number(),
});
export type ParamList = z.infer<typeof ParamListSchema>;

export const BuffSchema = z.object({
  Hash: z.number(),
});
export type Buff = z.infer<typeof BuffSchema>;

export const MazeBuffValueSchema = z.object({
  ID: z.number(),
  BuffSeries: z.number(),
  BuffRarity: z.number(),
  Lv: z.number(),
  LvMax: z.number(),
  ModifierName: z.string(),
  InBattleBindingType: z
    .union([InBattleBindingTypeSchema, z.null()])
    .optional(),
  InBattleBindingKey: z.string(),
  ParamList: z.array(ParamListSchema),
  BuffIcon: z.string(),
  BuffName: BuffSchema,
  BuffDesc: BuffSchema,
  BuffSimpleDesc: BuffSchema,
  BuffDescBattle: BuffSchema,
  BuffEffect: z.string(),
  MazeBuffType: MazeBuffTypeSchema,
  MazeBuffIconType: MazeBuffIconTypeSchema,
  BuffDescParamByAvatarSkillID: z.union([z.number(), z.null()]).optional(),
  MazeBuffPool: z.union([z.number(), z.null()]).optional(),
  IsDisplay: z.union([z.boolean(), z.null()]).optional(),
  IsDisplayEnvInLevel: z.union([z.boolean(), z.null()]).optional(),
});
export type MazeBuffValue = z.infer<typeof MazeBuffValueSchema>;
