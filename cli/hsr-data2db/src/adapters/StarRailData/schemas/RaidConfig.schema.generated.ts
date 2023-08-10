import * as z from "zod";

export const DamageTypeSchema = z.enum([
  "Fire",
  "Ice",
  "Imaginary",
  "Physical",
  "Quantum",
  "Thunder",
  "Wind",
]);
export type DamageType = z.infer<typeof DamageTypeSchema>;

export const EntrancePageBgImagePathSchema = z.enum([
  "",
  "SpriteOutput/FarmCocoonPic/20213002.png",
  "SpriteOutput/FarmCocoonPic/40222003.png",
]);
export type EntrancePageBgImagePath = z.infer<
  typeof EntrancePageBgImagePathSchema
>;

export const RaidTagListSchema = z.enum(["HardRaid", "Hardest", "NormalRaid"]);
export type RaidTagList = z.infer<typeof RaidTagListSchema>;

export const RecoverTypeSchema = z.enum([
  "RecoverHalfSp",
  "RecoverHp",
  "RecoverMp",
  "Unknown",
]);
export type RecoverType = z.infer<typeof RecoverTypeSchema>;

export const TeamTypeSchema = z.enum([
  "Player",
  "TrialAndPlayer",
  "TrialOnly",
  "TrialOrPlayer",
]);
export type TeamType = z.infer<typeof TeamTypeSchema>;

export const TypeSchema = z.enum([
  "EquilibriumTrial",
  "Mission",
  "PunkLord",
  "TreasureChallenge",
]);
export type Type = z.infer<typeof TypeSchema>;

export const BuffDescSchema = z.object({
  Hash: z.number(),
});
export type BuffDesc = z.infer<typeof BuffDescSchema>;

export const RaidConfigValueSchema = z.object({
  RaidID: z.number(),
  HardLevel: z.number(),
  RaidTagList: z.array(RaidTagListSchema),
  UnlockWorldLevel: z.array(z.number()),
  Type: TypeSchema,
  MonsterList: z.array(z.number()),
  MonsterHideList: z.array(z.number()),
  DisplayEventID: z.union([z.number(), z.null()]).optional(),
  RaidName: BuffDescSchema,
  RaidDesc: BuffDescSchema,
  FinishEntranceID: z.union([z.number(), z.null()]).optional(),
  BuffDesc: BuffDescSchema,
  BuffParamList: z.array(z.any()),
  LimitIDList: z.array(z.number()),
  RecoverType: z.array(RecoverTypeSchema),
  RewardList: z.array(z.number()),
  TeamType: TeamTypeSchema,
  TrialAvatarList: z.array(z.number()),
  MainMissionIDList: z.array(z.number()),
  MainMissionIDBefore: z.union([z.number(), z.null()]).optional(),
  MainMissionIDAfter: z.union([z.number(), z.null()]).optional(),
  IsEntryByProp: z.union([z.boolean(), z.null()]).optional(),
  SkipRewardOnFinish: z.union([z.boolean(), z.null()]).optional(),
  EntrancePageBGImagePath: EntrancePageBgImagePathSchema,
  DamageType: z.array(DamageTypeSchema),
  RaidTargetID: z.array(z.number()),
  EnterType: z.union([z.null(), z.string()]).optional(),
  AutoObtainDamageType: z.union([z.boolean(), z.null()]).optional(),
  MappingInfoID: z.union([z.number(), z.null()]).optional(),
  LockCaptain: z.union([z.boolean(), z.null()]).optional(),
});
export type RaidConfigValue = z.infer<typeof RaidConfigValueSchema>;
