import * as z from "zod";

export const TypeSchema = z.enum(["Avatar", "NPC"]);
export type Type = z.infer<typeof TypeSchema>;

export const EvidenceInfoTextIdSchema = z.object({
  Hash: z.number(),
});
export type EvidenceInfoTextId = z.infer<typeof EvidenceInfoTextIdSchema>;

export const MuseumStuffValueSchema = z.object({
  ItemID: z.number(),
  Type: TypeSchema,
  StatsA: z.number(),
  StatsB: z.union([z.number(), z.null()]).optional(),
  StatsC: z.union([z.number(), z.null()]).optional(),
  UnlockPhase: z.union([z.number(), z.null()]).optional(),
  EvidenceInfoTextID: EvidenceInfoTextIdSchema,
  MuseumStuffDesc: EvidenceInfoTextIdSchema,
  SceneGroupID: z.number(),
  ScenePropID: z.number(),
  DisplayOrder: z.union([z.number(), z.null()]).optional(),
  CollectedReward: z.union([z.number(), z.null()]).optional(),
  IsInitial: z.union([z.boolean(), z.null()]).optional(),
  RecruitPrice: z.union([z.number(), z.null()]).optional(),
  IsTargetReward: z.union([z.boolean(), z.null()]).optional(),
  RecruitUnlockMission: z.union([z.number(), z.null()]).optional(),
});
export type MuseumStuffValue = z.infer<typeof MuseumStuffValueSchema>;
