import * as z from "zod";

export const AiPathSchema = z.enum([
  "Config/ConfigAI/Avatar_ComplexSkilll_AutoFight_AI.json",
]);
export type AiPath = z.infer<typeof AiPathSchema>;

export const RaritySchema = z.enum([
  "CombatPowerAvatarRarityType4",
  "CombatPowerAvatarRarityType5",
]);
export type Rarity = z.infer<typeof RaritySchema>;

export const SpNeedSchema = z.object({
  Value: z.number(),
});
export type SpNeed = z.infer<typeof SpNeedSchema>;

export const RewardListSchema = z.object({
  ItemID: z.union([z.number(), z.null()]).optional(),
  ItemNum: z.number(),
});
export type RewardList = z.infer<typeof RewardListSchema>;

export const AvatarSchema = z.object({
  Hash: z.number(),
});
export type Avatar = z.infer<typeof AvatarSchema>;

export const AvatarConfigTrialValueSchema = z.object({
  AvatarID: z.number(),
  AvatarName: AvatarSchema,
  AvatarFullName: AvatarSchema,
  AdventurePlayerID: z.number(),
  AvatarVOTag: z.string(),
  Rarity: RaritySchema,
  JsonPath: z.string(),
  DamageType: z.string(),
  SPNeed: SpNeedSchema,
  ExpGroup: z.number(),
  MaxPromotion: z.number(),
  MaxRank: z.number(),
  RankIDList: z.array(z.number()),
  RewardList: z.array(RewardListSchema),
  RewardListMax: z.array(RewardListSchema),
  SkillList: z.array(z.number()),
  AvatarBaseType: z.string(),
  DefaultAvatarModelPath: z.string(),
  DefaultAvatarHeadIconPath: z.string(),
  AvatarSideIconPath: z.string(),
  AvatarMiniIconPath: z.string(),
  ActionAvatarHeadIconPath: z.string(),
  UltraSkillCutInPrefabPath: z.string(),
  UIAvatarModelPath: z.string(),
  ManikinJsonPath: z.string(),
  AvatarDesc: AvatarSchema,
  AIPath: AiPathSchema,
  SkilltreePrefabPath: z.string(),
  DamageTypeResistance: z.array(z.any()),
  Release: z.union([z.boolean(), z.null()]).optional(),
  SideAvatarHeadIconPath: z.string(),
  WaitingAvatarHeadIconPath: z.string(),
  AvatarCutinImgPath: z.string(),
  AvatarCutinBgImgPath: z.string(),
  AvatarCutinFrontImgPath: z.string(),
  AvatarCutinIntroText: AvatarSchema,
  GachaResultOffset: z.array(z.number()),
  AvatarDropOffset: z.array(z.number()),
  AvatarTrialOffset: z.array(z.number()),
  PlayerCardOffset: z.array(z.number()),
  AssistOffset: z.array(z.number()),
  AssistBgOffset: z.array(z.union([z.number(), z.number()])),
  AvatarSelfShowOffset: z.array(z.union([z.number(), z.number()])),
});
export type AvatarConfigTrialValue = z.infer<
  typeof AvatarConfigTrialValueSchema
>;
