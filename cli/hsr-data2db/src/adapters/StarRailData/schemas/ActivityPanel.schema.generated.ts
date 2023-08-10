import * as z from "zod";

export const ActionNameListSchema = z.enum([
  "ActionGroup_Cancel",
  "ActionGroup_Return",
  "ActionGroup_Scroll",
  "ItemDetail",
  "Menu_Cancel",
  "Menu_Confirm",
]);
export type ActionNameList = z.infer<typeof ActionNameListSchema>;

export const TypeSchema = z.enum([
  "FinishMainMission",
  "PlayerLevel",
  "QuestClose",
]);
export type Type = z.infer<typeof TypeSchema>;

export const UnlockConditionSchema = z.object({
  Type: TypeSchema,
  Param: z.string(),
});
export type UnlockCondition = z.infer<typeof UnlockConditionSchema>;

export const IntroDescSchema = z.object({
  Hash: z.number(),
});
export type IntroDesc = z.infer<typeof IntroDescSchema>;

export const DisplayItemListSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.union([z.number(), z.null()]).optional(),
});
export type DisplayItemList = z.infer<typeof DisplayItemListSchema>;

export const ActivityPanelValueSchema = z.object({
  PanelID: z.number(),
  Type: z.number(),
  ActivityModuleID: z.union([z.number(), z.null()]).optional(),
  UIPrefab: z.string(),
  TypeParam: z.array(z.number()),
  UnlockConditions: z.array(UnlockConditionSchema),
  SortWeight: z.number(),
  TabName: IntroDescSchema,
  TitleName: IntroDescSchema,
  PanelDesc: IntroDescSchema,
  TabIcon: z.string(),
  TagDesc: IntroDescSchema,
  IntroDesc: IntroDescSchema,
  DisplayItemList: z.array(DisplayItemListSchema),
  ActionNameList: z.array(ActionNameListSchema),
  ActionNameListOnTab: z.array(ActionNameListSchema),
  IsResidentPanel: z.union([z.boolean(), z.null()]).optional(),
  ResidentPanelUnlockModuleID: z.union([z.number(), z.null()]).optional(),
  ResidentPanelFinishMission: z.union([z.number(), z.null()]).optional(),
  DisplayItemManualSort: z.union([z.boolean(), z.null()]).optional(),
  IsActivityHaveResidentPart: z.union([z.boolean(), z.null()]).optional(),
  HideQuest: z.union([z.number(), z.null()]).optional(),
});
export type ActivityPanelValue = z.infer<typeof ActivityPanelValueSchema>;
