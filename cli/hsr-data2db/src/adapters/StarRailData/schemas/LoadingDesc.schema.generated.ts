import * as z from "zod";

export const BbalaagnifiSchema = z.enum(["EntranceID", "MainMissionFinish"]);
export type Bbalaagnifi = z.infer<typeof BbalaagnifiSchema>;

export const ParamSchema = z.object({
  BBALAAGNIFI: BbalaagnifiSchema,
  IPICCLFILEP: z.number(),
});
export type Param = z.infer<typeof ParamSchema>;

export const TextmapIdSchema = z.object({
  Hash: z.number(),
});
export type TextmapId = z.infer<typeof TextmapIdSchema>;

export const LoadingDescValueSchema = z.object({
  ID: z.number(),
  MinLevel: z.number(),
  MaxLevel: z.number(),
  LockParam: z.array(ParamSchema),
  UnlockParam: z.array(ParamSchema),
  ForceParam: z.array(ParamSchema),
  Weight: z.number(),
  TitleTextmapID: TextmapIdSchema,
  DescTextmapID: TextmapIdSchema,
  ImagePath: z.number(),
});
export type LoadingDescValue = z.infer<typeof LoadingDescValueSchema>;
