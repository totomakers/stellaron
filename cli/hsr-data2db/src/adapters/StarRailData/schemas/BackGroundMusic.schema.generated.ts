import * as z from "zod";

export const RhythmColourSchema = z.enum(["TYPE_EASY"]);
export type RhythmColour = z.infer<typeof RhythmColourSchema>;

export const BgmDescSchema = z.object({
  Hash: z.number(),
});
export type BgmDesc = z.infer<typeof BgmDescSchema>;

export const BackGroundMusicValueSchema = z.object({
  ID: z.number(),
  GroupID: z.number(),
  MusicName: BgmDescSchema,
  UnlockDesc: BgmDescSchema,
  BGMDesc: BgmDescSchema,
  MusicSwitchName: z.string(),
  BPM: z.number(),
  RhythmColour: z.union([RhythmColourSchema, z.null()]).optional(),
  Unlock: z.union([z.boolean(), z.null()]).optional(),
});
export type BackGroundMusicValue = z.infer<typeof BackGroundMusicValueSchema>;
