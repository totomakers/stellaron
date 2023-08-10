import * as z from "zod";

export const EvidenceInfoTextIdSchema = z.object({
  Hash: z.number(),
});
export type EvidenceInfoTextId = z.infer<typeof EvidenceInfoTextIdSchema>;

export const MuseumItemValueSchema = z.object({
  ItemID: z.number(),
  AreaID: z.number(),
  UnlockPhase: z.number(),
  MuseumItemDesc: EvidenceInfoTextIdSchema,
  SceneGroupID: z.number(),
  ScenePropID: z.number(),
  EvidenceInfoTextID: EvidenceInfoTextIdSchema,
  ItemSkillList: z.array(z.number()),
  DisplayOrder: z.number(),
  CollectedReward: z.number(),
  HideGetHint: z.union([z.boolean(), z.null()]).optional(),
  RenewPoint: z.union([z.number(), z.null()]).optional(),
});
export type MuseumItemValue = z.infer<typeof MuseumItemValueSchema>;
