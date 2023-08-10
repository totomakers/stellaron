import * as z from "zod";

export const PageSchema = z.object({
  PageKey: z.string(),
  CurrencyIDList: z.array(z.number()),
  IsDetailButton: z.boolean(),
});
export type Page = z.infer<typeof PageSchema>;

export const ActivityPunkLordPageSchema = z.object({
  PageKey: z.string(),
  CurrencyIDList: z.array(z.number()),
});
export type ActivityPunkLordPage = z.infer<typeof ActivityPunkLordPageSchema>;

export const ResourceOverallConfigSchema = z.object({
  InventoryPage: ActivityPunkLordPageSchema,
  SkillTreePointDetailPanel: ActivityPunkLordPageSchema,
  SwitchAreaPage: ActivityPunkLordPageSchema,
  MapOverviewPage: ActivityPunkLordPageSchema,
  AvatarLevelUpDialog: ActivityPunkLordPageSchema,
  AvatarPromotionDialog: ActivityPunkLordPageSchema,
  Shop101Page: ActivityPunkLordPageSchema,
  Shop102Page: ActivityPunkLordPageSchema,
  Shop201Page: ActivityPunkLordPageSchema,
  Shop202Page: ActivityPunkLordPageSchema,
  Shop301Page: ActivityPunkLordPageSchema,
  Shop302Page: ActivityPunkLordPageSchema,
  Shop303Page: ActivityPunkLordPageSchema,
  Shop304Page: ActivityPunkLordPageSchema,
  Shop305Page: ActivityPunkLordPageSchema,
  Shop306Page: ActivityPunkLordPageSchema,
  Shop307Page: ActivityPunkLordPageSchema,
  Shop308Page: ActivityPunkLordPageSchema,
  Shop309Page: ActivityPunkLordPageSchema,
  Shop310Page: ActivityPunkLordPageSchema,
  Shop311Page: ActivityPunkLordPageSchema,
  Shop312Page: ActivityPunkLordPageSchema,
  Shop313Page: ActivityPunkLordPageSchema,
  Shop401Page: ActivityPunkLordPageSchema,
  Shop402Page: ActivityPunkLordPageSchema,
  Shop403Page: ActivityPunkLordPageSchema,
  Shop501Page: ActivityPunkLordPageSchema,
  Shop504Page: ActivityPunkLordPageSchema,
  Shop502Page: ActivityPunkLordPageSchema,
  Shop503Page: ActivityPunkLordPageSchema,
  Shop900Page: ActivityPunkLordPageSchema,
  Shop999Page: ActivityPunkLordPageSchema,
  EquipmentLevelUpPanel: ActivityPunkLordPageSchema,
  EquipmentPromotionPanel: ActivityPunkLordPageSchema,
  RewardConfirmDialog: ActivityPunkLordPageSchema,
  ItemComposePage: ActivityPunkLordPageSchema,
  MapContainerPanel: ActivityPunkLordPageSchema,
  StandardGachaPage: PageSchema,
  CharacterGachaPage: PageSchema,
  LightconeGachaPage: PageSchema,
  RogueConfirmRecoverStaminaDialog: ActivityPunkLordPageSchema,
  RogueConfirmReviveAvatarDialog: ActivityPunkLordPageSchema,
  InventoryPage_Rogue: ActivityPunkLordPageSchema,
  RogueAppraisalPage: ActivityPunkLordPageSchema,
  RogueSelectBuffDialog: ActivityPunkLordPageSchema,
  RechargePage: PageSchema,
  FarmRelicRewardDialog: ActivityPunkLordPageSchema,
  FarmRelicPage: ActivityPunkLordPageSchema,
  FarmElementPage: ActivityPunkLordPageSchema,
  RogueBuffShopPage: ActivityPunkLordPageSchema,
  RelicUpgradePage: ActivityPunkLordPageSchema,
  RogueMapSelectPage: ActivityPunkLordPageSchema,
  RogueSelectBuffPage: ActivityPunkLordPageSchema,
  RogueMenuPage: ActivityPunkLordPageSchema,
  BattleBagBuyDialog: ActivityPunkLordPageSchema,
  ActivityPunkLordPage: ActivityPunkLordPageSchema,
  RogueEnhanceBuffPage: ActivityPunkLordPageSchema,
  RogueEnhanceBuffConfirmDialog: ActivityPunkLordPageSchema,
  BattleFarmResultPage: ActivityPunkLordPageSchema,
  RogueTalentPage: ActivityPunkLordPageSchema,
  RogueRandomTalkPage: ActivityPunkLordPageSchema,
  RogueOptionalRewardDialog: ActivityPunkLordPageSchema,
  RogueScoreRewardPage: ActivityPunkLordPageSchema,
  RogueRevivePage: ActivityPunkLordPageSchema,
  RogueAreaDetailDialog: ActivityPunkLordPageSchema,
  RogueChestRewardDialog: ActivityPunkLordPageSchema,
  RogueKeyExchangeDialog: ActivityPunkLordPageSchema,
  HandBookRogueGuide01: ActivityPunkLordPageSchema,
  HandBookRogueGuide02: ActivityPunkLordPageSchema,
  HandBookGuide: ActivityPunkLordPageSchema,
  MuseumPage: ActivityPunkLordPageSchema,
});
export type ResourceOverallConfig = z.infer<typeof ResourceOverallConfigSchema>;